locals {
  build_dir   = abspath("${path.root}/${var.dist_path}")
  asset_files = sort(fileset(local.build_dir, "**"))
  asset_hash  = sha1(join("", [for file in local.asset_files : filemd5("${local.build_dir}/${file}")]))

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

  mime_types = {
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
