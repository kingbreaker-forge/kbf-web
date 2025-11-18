module "web" {
  source = "./modules/web"

  bucket_name      = local.bucket_name
  domain_name      = var.domain_name
  hosted_zone_name = var.hosted_zone_name
  dist_path        = var.dist_path
  aws_region       = var.aws_region
  tags             = local.tags

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }
}

module "assets" {
  source = "./modules/assets"

  bucket_name      = var.assets_bucket_name
  domain_name      = var.assets_domain_name
  hosted_zone_name = var.assets_hosted_zone_name
  tags             = local.tags

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }
}
