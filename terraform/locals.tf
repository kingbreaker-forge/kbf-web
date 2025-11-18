locals {
  derived_bucket_name = lower("${var.project_name}-${var.environment}-site")
  bucket_name         = var.bucket_name_override != "" ? var.bucket_name_override : local.derived_bucket_name

  tags = merge(
    {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    },
    var.tags,
  )
}
