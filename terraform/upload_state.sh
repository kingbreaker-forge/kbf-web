#!/usr/bin/env bash
set -euo pipefail

BUCKET="kingbreaker-web-tf"
REGION="us-east-2"
PREFIX="${STATE_PREFIX:-kbf-website}"

pushd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null

for file in terraform.tfstate terraform.tfstate.backup; do
  if [[ -f "$file" ]]; then
    aws s3 cp "$file" "s3://${BUCKET}/${PREFIX}/${file}" --region "${REGION}"
    echo "Uploaded ${file} to s3://${BUCKET}/${PREFIX}/${file}"
  else
    echo "Skipped ${file} (not found)."
  fi
done

popd >/dev/null
