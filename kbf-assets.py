#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import shlex
import subprocess
import sys
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Sequence
from urllib.parse import quote


def log_cmd(args: Sequence[str]) -> None:
    printable = " ".join(shlex.quote(a) for a in args)
    prefix = "+ "
    print(f"{prefix}{printable}")


def run_cmd(args: Sequence[str], capture_output: bool = False, allow_dryrun: bool = True) -> str:
    log_cmd(args)
    if allow_dryrun and _CONTEXT.get("dry", False):
        return ""
    result = subprocess.run(
        args,
        check=True,
        text=True,
        capture_output=capture_output,
    )
    return result.stdout if capture_output else ""


def terraform_outputs(terraform_dir: Path) -> dict[str, Any]:
    try:
        raw = run_cmd(
            ["terraform", f"-chdir={terraform_dir}", "output", "-json"],
            capture_output=True,
            allow_dryrun=False,
        )
    except subprocess.CalledProcessError as exc:
        print(
            f"Failed to read terraform outputs. Ensure state exists (run plan/apply) and that "
            f"'terraform output' works. Error: {exc}",
            file=sys.stderr,
        )
        if exc.stdout:
            print(exc.stdout, file=sys.stderr)
        if exc.stderr:
            print(exc.stderr, file=sys.stderr)
        sys.exit(exc.returncode)
    try:
        return json.loads(raw or "{}")
    except json.JSONDecodeError as exc:
        print(f"Failed to parse terraform outputs: {exc}", file=sys.stderr)
        sys.exit(1)


def list_all_objects(bucket: str, prefix: str) -> List[dict[str, Any]]:
    objects: List[dict[str, Any]] = []
    continuation: Optional[str] = None
    while True:
        cmd = [
            "aws",
            "s3api",
            "list-objects-v2",
            "--bucket",
            bucket,
        ]
        if prefix:
            cmd.extend(["--prefix", prefix])
        if continuation:
            cmd.extend(["--continuation-token", continuation])

        output = run_cmd(cmd, capture_output=True, allow_dryrun=False)
        data = json.loads(output or "{}")
        contents = data.get("Contents", [])
        objects.extend(contents)

        continuation = data.get("NextContinuationToken")
        if not continuation:
            break

    return objects


def format_table(rows: Iterable[Sequence[str]]) -> str:
    rows_list = list(rows)
    if not rows_list:
        return ""
    col_widths = [max(len(row[i]) for row in rows_list) for i in range(len(rows_list[0]))]
    lines = []
    for row in rows_list:
        padded = [val.ljust(col_widths[i]) for i, val in enumerate(row)]
        lines.append("  ".join(padded))
    return "\n".join(lines)


_CONTEXT: Dict[str, Any] = {"dry": False}


def cmd_cp(terraform_dir: Path, local_path: str, remote_path: str) -> None:
    assets = terraform_outputs(terraform_dir).get("assets", {}).get("value", {})
    bucket = assets.get("bucket_name")
    if not bucket:
        print("Terraform output 'assets.bucket_name' is missing.", file=sys.stderr)
        sys.exit(1)
    dest = f"s3://{bucket}/{remote_path}"
    run_cmd(["aws", "s3", "cp", local_path, dest])


def cmd_ls(terraform_dir: Path, prefix: str) -> None:
    outputs = terraform_outputs(terraform_dir)
    assets = outputs.get("assets", {}).get("value", {})
    bucket = assets.get("bucket_name")
    if not bucket:
        print("Terraform output 'assets.bucket_name' is missing.", file=sys.stderr)
        sys.exit(1)
    domain = assets.get("custom_domain_name") or assets.get("cloudfront_domain_name")
    base_url = f"https://{domain}" if domain else ""

    objects = list_all_objects(bucket, prefix)
    if not objects:
        print("No objects found.")
        return

    rows: List[Sequence[str]] = []
    for obj in objects:
        key = obj.get("Key", "")
        size = str(obj.get("Size", ""))
        mtime = obj.get("LastModified", "")
        url = f"{base_url}/{quote(key)}" if base_url else ""
        rows.append((key, size, mtime, url))

    print(format_table(rows))


def cmd_grep(terraform_dir: Path, pattern: str) -> None:
    outputs = terraform_outputs(terraform_dir)
    assets = outputs.get("assets", {}).get("value", {})
    bucket = assets.get("bucket_name")
    if not bucket:
        print("Terraform output 'assets.bucket_name' is missing.", file=sys.stderr)
        sys.exit(1)
    objects = list_all_objects(bucket, prefix="")

    regex = re.compile(pattern)
    matches = [obj.get("Key", "") for obj in objects if regex.search(obj.get("Key", ""))]
    for key in matches:
        print(key)


def cmd_rm(terraform_dir: Path, obj: str) -> None:
    outputs = terraform_outputs(terraform_dir)
    assets = outputs.get("assets", {}).get("value", {})
    bucket = assets.get("bucket_name")
    if not bucket:
        print("Terraform output 'assets.bucket_name' is missing.", file=sys.stderr)
        sys.exit(1)
    target = f"s3://{bucket}/{obj}"
    run_cmd(["aws", "s3", "rm", target])


def cmd_publish(terraform_dir: Path) -> None:
    outputs = terraform_outputs(terraform_dir)
    assets = outputs.get("assets", {}).get("value", {})
    dist_id = assets.get("cloudfront_distribution_id")
    if not dist_id:
        print("Terraform output 'assets.cloudfront_distribution_id' is missing.", file=sys.stderr)
        sys.exit(1)
    run_cmd(
        ["aws", "cloudfront", "create-invalidation", "--distribution-id", dist_id, "--paths", "/*"]
    )


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Manage asset bucket via AWS + Terraform outputs.")
    parser.add_argument(
        "--terraform-dir",
        default=Path(__file__).resolve().parent / "terraform",
        type=Path,
        help="Path to terraform configuration (default: ./terraform next to this script).",
    )
    parser.add_argument(
        "--dry",
        action="store_true",
        help="Print write operations instead of executing them.",
    )

    subparsers = parser.add_subparsers(dest="command", required=True)

    cp_parser = subparsers.add_parser("cp", help="Upload a file to the assets bucket.")
    cp_parser.add_argument("local_path", help="Local file path.")
    cp_parser.add_argument("remote_path", help="Destination key in the bucket.")

    ls_parser = subparsers.add_parser("ls", help="List bucket contents with URLs.")
    ls_parser.add_argument("prefix", nargs="?", default="", help="Optional prefix filter.")

    grep_parser = subparsers.add_parser("grep", help="List keys matching a pattern.")
    grep_parser.add_argument("pattern", help="Regex pattern to match.")

    rm_parser = subparsers.add_parser("rm", help="Remove an object from the bucket.")
    rm_parser.add_argument("object", help="Key to delete.")

    subparsers.add_parser("publish", help="Create a CloudFront invalidation.")

    return parser


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    terraform_dir: Path = args.terraform_dir

    _CONTEXT["dry"] = bool(getattr(args, "dry", False))

    try:
        if args.command == "cp":
            cmd_cp(terraform_dir, args.local_path, args.remote_path)
        elif args.command == "ls":
            cmd_ls(terraform_dir, args.prefix)
        elif args.command == "grep":
            cmd_grep(terraform_dir, args.pattern)
        elif args.command == "rm":
            cmd_rm(terraform_dir, args.object)
        elif args.command == "publish":
            cmd_publish(terraform_dir)
        else:
            parser.error("Unknown command")
    except subprocess.CalledProcessError as exc:
        print(f"Command failed: {exc}", file=sys.stderr)
        return exc.returncode

    return 0


if __name__ == "__main__":
    sys.exit(main())
