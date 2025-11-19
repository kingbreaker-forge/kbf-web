module "web" {
  source = "./modules/web"

  project_name = var.project_name
  environment  = var.environment
  dist_path    = var.dist_path
  aws_region   = var.aws_region
  tags         = local.tags

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }
}

module "assets" {
  source = "./modules/assets"

  tags = local.tags

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }
}
