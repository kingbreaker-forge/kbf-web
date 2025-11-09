## Static site deployment

This Terraform stack provisions everything needed to serve the built contents of `../dist` through AWS:

- Versioned S3 bucket that keeps only the three most recent non-current versions of each object.
- CloudFront distribution fronting the bucket with an origin access identity so the bucket stays private (gzip/Brotli compression enabled).
- Object uploads for every file in `../dist` as part of `terraform apply`.
- Automatic `aws cloudfront create-invalidation` covering `/*` whenever the build output changes.

### Prerequisites

1. The project must be built before running Terraform so that `../dist` exists (e.g. `npm run build`).
2. AWS credentials with permissions for S3, CloudFront, IAM, ACM (us-east-1), and Route53 must be available in the environment.
3. The AWS CLI must be installed because the cache invalidation step shells out to `aws cloudfront`.
4. The public hosted zone for `kingbreakerforge.com` (or whatever value you pass into `domain_name`) already exists in Route53; Terraform only adds the validation/alias records.

### Usage

From this directory:

```bash
terraform init
terraform apply \
  -var project_name="kbf-website" \
  -var environment="prod" \
  -var aws_region="us-east-2"
```

Optional inputs:

- `dist_path`: relative/absolute path to the folder containing the build artifacts (default `../dist`).
- `bucket_name_override`: set a concrete bucket name if the derived one does not meet your naming scheme.
- `domain_name`: custom hostname to serve via CloudFront (default `kingbreakerforge.com`).
- `hosted_zone_name`: Route53 zone name (must end with a dot) where the validation/alias records should live.
- `tags`: map of additional AWS tags to attach to every resource.

After `apply` completes, Terraform prints the bucket and CloudFront domains you can use to verify the deployment, and your Route53 zone will contain an alias pointing `kingbreakerforge.com` at the distribution (plus the ACM validation records). Running `terraform apply` again after a new build automatically uploads changed files and invalidates the CloudFront cache.

### Managing local state

State is kept out of source control. Use the helper scripts in this directory to move it to the manually managed S3 bucket `kingbreaker-web-tf` in `us-east-2`:

```bash
./upload_state.sh   # pushes terraform.tfstate(+backup) to S3
./download_state.sh # pulls the latest copies back down
```

Set `STATE_PREFIX=my-env` when running the scripts if you want to store multiple copies under different prefixes inside the bucket.
