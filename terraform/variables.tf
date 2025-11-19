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

variable "aws_region" {
  description = "AWS region for the main site."
  type        = string
  default     = "us-east-2"
}

variable "dist_path" {
  description = "Path to the built static assets for the main site."
  type        = string
  default     = "../dist/client"
}

variable "tags" {
  description = "Additional tags to merge onto every resource."
  type        = map(string)
  default     = { "Project" : "kingbreaker-web" }
}
