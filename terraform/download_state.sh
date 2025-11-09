#!/usr/bin/env bash
set -euo pipefail

BUCKET="kingbreaker-web-tf"
REGION="us-east-2"
PREFIX="${STATE_PREFIX:-kbf-website}"

pushd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null

for file in terraform.tfstate terraform.tfstate.backup; do
  if aws s3 ls "s3://${BUCKET}/${PREFIX}/${file}" --region "${REGION}" >/dev/null 2>&1; then
    aws s3 cp "s3://${BUCKET}/${PREFIX}/${file}" "${file}" --region "${REGION}"
    echo "Downloaded ${file} from s3://${BUCKET}/${PREFIX}/${file}"
  else
    echo "Object for ${file} not found in s3://${BUCKET}/${PREFIX}/"
  fi
done

popd >/dev/null
