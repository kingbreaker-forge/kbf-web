output "bucket_name" {
  description = "Name of the S3 bucket hosting the static site."
  value       = aws_s3_bucket.site.bucket
}

output "bucket_regional_domain_name" {
  description = "Regional domain of the S3 bucket."
  value       = aws_s3_bucket.site.bucket_regional_domain_name
}

output "cloudfront_distribution_id" {
  description = "Identifier of the CloudFront distribution."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Hostname to access the site via CloudFront."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "custom_domain_name" {
  description = "Custom domain served by CloudFront."
  value       = var.domain_name
}
