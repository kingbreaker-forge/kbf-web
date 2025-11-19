#!/usr/bin/env bash
set -euo pipefail

# Bootstrap the DynamoDB lock table for the S3 backend if it doesn't exist.
# Intended to be run once before `terraform init -migrate-state`.

REGION="us-east-2"
TABLE_NAME="kingbreaker-web-tf-locks"

echo "Checking for DynamoDB table: ${TABLE_NAME} in ${REGION}..."
if aws dynamodb describe-table --table-name "${TABLE_NAME}" --region "${REGION}" >/dev/null 2>&1; then
  echo "Table already exists."
  exit 0
fi

echo "Creating table ${TABLE_NAME}..."
aws dynamodb create-table \
  --table-name "${TABLE_NAME}" \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region "${REGION}" \
  --tags Key=Project,Value="kingbreaker-web" Key=ManagedBy,Value=terraform

echo "Waiting for table to become ACTIVE..."
aws dynamodb wait table-exists --table-name "${TABLE_NAME}" --region "${REGION}"
echo "Done."
