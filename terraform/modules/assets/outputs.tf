output "bucket_id" {
  description = "ID of the assets bucket."
  value       = aws_s3_bucket.assets.id
}

output "bucket_name" {
  description = "Name of the assets bucket."
  value       = aws_s3_bucket.assets.bucket
}

output "bucket_regional_domain_name" {
  description = "Regional domain of the assets bucket."
  value       = aws_s3_bucket.assets.bucket_regional_domain_name
}

output "cloudfront_distribution_id" {
  description = "Identifier of the assets CloudFront distribution."
  value       = aws_cloudfront_distribution.assets.id
}

output "cloudfront_domain_name" {
  description = "Hostname to access assets via CloudFront."
  value       = aws_cloudfront_distribution.assets.domain_name
}

output "custom_domain_name" {
  description = "Custom domain served by the assets CloudFront distribution."
  value       = var.domain_name
}
