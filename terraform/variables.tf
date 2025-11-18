variable "project_name" {
  description = "Human friendly name for this site, used for tagging and naming."
  type        = string
  default     = "Kingbreaker Web"
}

variable "environment" {
  description = "Deployment environment string appended to resource names."
  type        = string
  default     = "prod"
}

variable "aws_region" {
  description = "AWS region to deploy the S3 bucket."
  type        = string
  default     = "us-east-2"
}

variable "dist_path" {
  description = "Path to the built static assets that should be published."
  type        = string
  default     = "../dist/client"
}

variable "bucket_name_override" {
  description = "Optional explicit bucket name. Leave blank to let Terraform derive one."
  type        = string
  default     = "kingbreaker-web"
}

variable "assets_bucket_name" {
  description = "Bucket name for hosting static assets."
  type        = string
  default     = "kingmaker-web-assets"
}

variable "tags" {
  description = "Additional tags to merge onto every resource."
  type        = map(string)
  default     = { "Project" : "kingbreaker-web" }
}

variable "domain_name" {
  description = "Public domain that should be served through CloudFront."
  type        = string
  default     = "kingbreakerforge.com"
}

variable "assets_domain_name" {
  description = "Domain to serve static assets through CloudFront."
  type        = string
  default     = "assets.kingbreakerforge.com"
}

variable "hosted_zone_name" {
  description = "Route53 hosted zone name (must end with a dot) where domain records live."
  type        = string
  default     = "kingbreakerforge.com."
}
