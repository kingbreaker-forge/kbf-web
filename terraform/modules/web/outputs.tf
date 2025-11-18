output "bucket_id" {
  description = "ID of the web bucket."
  value       = aws_s3_bucket.site.id
}

output "bucket_name" {
  description = "Name of the web bucket."
  value       = aws_s3_bucket.site.bucket
}

output "bucket_regional_domain_name" {
  description = "Regional domain of the web bucket."
  value       = aws_s3_bucket.site.bucket_regional_domain_name
}

output "cloudfront_distribution_id" {
  description = "Identifier of the web CloudFront distribution."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Hostname to access the web site via CloudFront."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "custom_domain_name" {
  description = "Custom domain served by the web CloudFront distribution."
  value       = var.domain_name
}
