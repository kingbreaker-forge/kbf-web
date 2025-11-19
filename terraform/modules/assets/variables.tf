variable "bucket_name" {
  description = "Bucket name for hosting static assets."
  type        = string
  default     = "kingmaker-web-assets"
}

variable "domain_name" {
  description = "Custom domain to serve static assets through CloudFront."
  type        = string
  default     = "assets.kingbreakerforge.com"
}

variable "hosted_zone_name" {
  description = "Route53 hosted zone name (must end with a dot) where asset records live."
  type        = string
  default     = "kingbreakerforge.com."
}

variable "tags" {
  description = "Tags to apply to resources."
  type        = map(string)
  default     = {}
}

variable "price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}
