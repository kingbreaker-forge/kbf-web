locals {
  build_dir   = abspath("${path.root}/${var.dist_path}")
  asset_files = sort(fileset(local.build_dir, "**"))
  asset_hash  = sha1(join("", [for file in local.asset_files : filemd5("${local.build_dir}/${file}")]))
}

resource "aws_s3_object" "assets" {
  for_each = { for file in local.asset_files : file => file }

  bucket = aws_s3_bucket.site.id
  key    = each.key
  source = "${local.build_dir}/${each.key}"
  etag   = filemd5("${local.build_dir}/${each.key}")

  content_type = lookup(
    var.mime_types,
    lower(element(reverse(split(".", basename(each.key))), 0)),
    "application/octet-stream",
  )

  depends_on = [
    aws_s3_bucket_public_access_block.site,
  ]
}

resource "null_resource" "cloudfront_invalidation" {
  triggers = {
    distribution_id = aws_cloudfront_distribution.site.id
    asset_hash      = local.asset_hash
  }

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.site.id} --paths \"/*\""
    environment = {
      AWS_DEFAULT_REGION = var.aws_region
    }
    working_dir = path.root
  }
}
