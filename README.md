# Kingbreaker Forge Website

Static site for Kingbreaker Forge, the personal bladesmithing/blacksmithing brand it represents. The project captures shop updates, galleries, and educational notes while serving as a playground for modern frontend tooling and fully automated infrastructure.

## Tech Stack

- **App framework** – [Vike](https://vike.dev) for file-based routing + server integration, powered by Vue 3 and Vuetify for the component layer.
- **Content** – MDX (via `@mdx-js/vue` and `remark-gfm`) mixes Markdown with Vue/TSX snippets for rich storytelling.
- **Tooling** – TypeScript, Vite 7, ESLint/Prettier, Stylelint, and vue-tsc keep the codebase typed, linted, and consistently formatted.
- **Automation** – Terraform (in `terraform/`) provisions the AWS S3 + CloudFront stack and handles deploy-time object uploads + CloudFront invalidations.
- **Environment** – VS Code Dev Containers backed by a Fedora-based image that preinstalls Node/npm, the AWS CLI, Terraform, and editor extensions.

## Development Environment

1. Install Docker and VS Code (with the **Dev Containers** extension).
2. Open the repository in VS Code and choose **Reopen in Container**. The `.devcontainer/Containerfile` builds a Fedora 43 image, adds the AWS CLI + Terraform, and runs `npm install` automatically via `updateContentCommand`.
3. When the container starts you land in the `developer` user with all tooling on the path. If you work outside the devcontainer, install Node 20+ and the AWS CLI manually, then run `npm install`.

## Local Development & Quality Checks

```bash
npm install        # Once per fresh clone (done for you inside the devcontainer)
npm run dev        # Start the Vike/Vite dev server (hot reload)
npm run build      # Production build -> dist/
npm run preview    # Preview the production build locally
npm run lint       # ESLint across Vue, TS, MDX, YAML, etc.
npm run lint:fix   # ESLint with --fix
npm run format     # Prettier across the repo (includes MDX/JSON/YAML)
npm run typecheck  # vue-tsc project-wide type checking
```

`dist/` is treated as disposable output and is regenerated on every build.

## Deployment (AWS S3 + CloudFront)

1. **Build** – run `npm run build` first; Terraform syncs whatever is in `dist/`.
2. **Credentials** – configure the AWS CLI (`aws configure` or `aws configure --profile <name>`) so Terraform and the helper scripts can access S3, CloudFront, ACM (us-east-1), and Route53.
3. **State sync (optional)** – pull the latest state before making changes:
   ```bash
   cd terraform
   ./download_state.sh          # STATE_PREFIX overrides default kbf-website
   ```
4. **Terraform workflow** – inside `terraform/`:
   ```bash
   terraform init
   terraform plan \
     -var project_name="kbf-website" \
     -var environment="prod" \
     -var aws_region="us-east-2"
   terraform apply <same vars>
   ```
   - `dist_path`, `bucket_name_override`, `domain_name`, and `hosted_zone_name` are exposed as additional variables when needed.
   - `terraform apply` uploads the contents of `dist/` to the versioned S3 bucket, updates CloudFront, and triggers a full `/*` invalidation so the CDN serves the new build immediately.
5. **State backup** – push the updated local state to the shared bucket after a successful apply:
   ```bash
   ./upload_state.sh
   ```
   The helper scripts read/write from `s3://kingbreaker-web-tf/<STATE_PREFIX>/terraform.tfstate*` in `us-east-2`. Both scripts honor `STATE_PREFIX` so you can keep parallel environments (e.g., `STATE_PREFIX=staging ./upload_state.sh`).

## Notes

- Terraform state files are intentionally ignored by Git; always rely on the helper scripts or your own remote backend to keep them synchronized.
- Additional documentation about content or component patterns will land later—this README focuses on environment, tooling, and deployment only.
