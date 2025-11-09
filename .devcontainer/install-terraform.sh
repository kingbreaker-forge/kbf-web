#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

case "$(uname -m)" in
  x86_64) ARCH="amd64" ;;
  aarch64) ARCH="arm64" ;;
  *) echo "Unsupported architecture: $(uname -m)" >&2; exit 1 ;;
esac

cd "$SCRIPT_DIR"

mkdir -p terraform
cd terraform

curl -LO "https://releases.hashicorp.com/terraform/1.13.5/terraform_1.13.5_linux_${ARCH}.zip"

unzip terraform_1.13.5_linux_${ARCH}.zip
rm terraform_1.13.5_linux_${ARCH}.zip

ln -s "$(pwd)/terraform" /usr/local/bin/terraform
