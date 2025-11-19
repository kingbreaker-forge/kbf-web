variable "project_name" {
  description = "Human friendly name for the main site, used for tagging and naming."
  type        = string
  default     = "Kingbreaker Web"
}

variable "environment" {
  description = "Deployment environment string appended to main site resource names."
  type        = string
  default     = "prod"
}

variable "bucket_name_override" {
  description = "Optional explicit bucket name for the main site. Leave blank to derive."
  type        = string
  default     = "kingbreaker-web"
}

variable "domain_name" {
  description = "Public domain served through CloudFront."
  type        = string
  default     = "kingbreakerforge.com"
}

variable "hosted_zone_name" {
  description = "Route53 hosted zone name (must end with a dot) where records live."
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

variable "dist_path" {
  description = "Path to the built static assets for the main site."
  type        = string
  default     = "../dist/client"
}

variable "aws_region" {
  description = "AWS region to use for operations like CloudFront invalidation."
  type        = string
  default     = "us-east-2"
}

variable "mime_types" {
  description = "Override or extend MIME type mappings."
  type        = map(string)
  default = {
    avif = "image/avif"
    css  = "text/css"
    csv  = "text/csv"
    gif  = "image/gif"
    html = "text/html"
    ico  = "image/x-icon"
    jpeg = "image/jpeg"
    jpg  = "image/jpeg"
    js   = "application/javascript"
    json = "application/json"
    map  = "application/json"
    png  = "image/png"
    svg  = "image/svg+xml"
    txt  = "text/plain"
    wasm = "application/wasm"
    webp = "image/webp"
    xml  = "application/xml"
  }
}
