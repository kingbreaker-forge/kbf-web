terraform {
  backend "s3" {
    bucket         = "kingbreaker-web-tf"
    key            = "state/terraform.tfstate"
    region         = "us-east-2"
    dynamodb_table = "kingbreaker-web-tf-locks"
    encrypt        = true
  }
}
