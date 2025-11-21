# Kingbreaker Forge Website

Static site for Kingbreaker Forge, the personal bladesmithing/blacksmithing brand it represents. The project captures shop updates, galleries, and educational notes while serving as a playground for modern frontend tooling and fully automated infrastructure.

## Tech Stack

- **App framework** – [Vike](https://vike.dev) for file-based routing + server integration, powered by Vue 3 and Vuetify for the component layer.
- **Content** – MDX (via `@mdx-js/vue` and `remark-gfm`) mixes Markdown with Vue/TSX snippets for rich storytelling.
- **Tooling** – TypeScript, Vite 7, ESLint/Prettier, Stylelint, and vue-tsc keep the codebase typed, linted, and consistently formatted.
- **Automation** – Terraform (in `terraform/`) provisions the AWS S3 + CloudFront stacks (main site + assets), uploads build output, and triggers CloudFront invalidations.
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

## Deployment (Terraform + AWS)

### Backend (state)
- Terraform state is stored remotely in S3 (`kingbreaker-web-tf`, key `state/terraform.tfstate`, region `us-east-2`) with a DynamoDB lock table (`kingbreaker-web-tf-locks`).
- Run once if the lock table doesn’t exist: `cd terraform && ./bootstrap_backend.sh` (creates the table with tags).
- `terraform init -migrate-state` will migrate local state into the backend; `terraform init` afterwards will use the remote state automatically.

### Main site + assets
- Modules: `modules/web` (site bucket/CF/DNS/upload/invalidation) and `modules/assets` (assets bucket/CF/DNS).
- Root outputs expose nested module objects (`terraform output -json web`, `terraform output -json assets`).
- Build first: `npm run build` (writes to `dist/`; web module uploads this path).
- Typical workflow:
  ```bash
  cd terraform
  terraform init              # after backend bootstrap
  terraform plan -out tfplan
  terraform apply tfplan
  ```
  Or from the repo root use the shortcut `npm run terraform-publish` to run `terraform init && terraform apply` inside `terraform/` (handy for quick updates; still interactive and expects backend/state prepped).
  The web module uploads `dist/` to the web bucket and triggers a CloudFront invalidation only when object etags change. Assets stack is managed separately (no automatic uploads).

## Asset management helper

`./kbf-assets.py` is a Python 3.12+ CLI (stdlib only) that wraps AWS + Terraform outputs for the assets bucket/CDN.

Usage:
- `python kbf-assets.py cp <local> <remote>` – upload file to `s3://assets_bucket/<remote>`
- `python kbf-assets.py ls [prefix]` – recursive list with key, size, mtime, and URL (uses custom domain if set)
- `python kbf-assets.py grep <pattern>` – regex match keys
- `python kbf-assets.py rm <object>` – delete object
- `python kbf-assets.py publish` – CloudFront invalidation for assets distribution

Options:
- `--terraform-dir` (default `./terraform` next to the script)
- `--dry` to print writes instead of executing

It reads the `assets` module outputs from Terraform (`terraform output -json assets`), so ensure the state/backend is initialized and up to date before using it.
