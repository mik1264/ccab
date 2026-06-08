#!/usr/bin/env bash
# Deploy ccab to Cloudflare Pages production (ccab.mkirsanov.com).
#
# This project is NOT git-connected, so deploys are MANUAL — run ./deploy.sh.
# `wrangler pages deploy` uploads the whole directory, but it (a) rejects any
# file >25 MiB and (b) does NOT honor .assetsignore. So we move local-only
# dirs (.venv, .claude) out of the tree during upload and ALWAYS restore them
# afterwards — even if the deploy fails or is interrupted.
set -euo pipefail

cd "$(dirname "$0")"
PARENT="$(cd .. && pwd)"
EXCLUDE=(.venv .claude)

restore() {
  for name in "${EXCLUDE[@]}"; do
    if [ -e "$PARENT/$name.deploy-tmp" ] && [ ! -e "./$name" ]; then
      mv "$PARENT/$name.deploy-tmp" "./$name"
      echo "restored $name"
    fi
  done
}
trap restore EXIT

# Recover anything left behind by a previously interrupted run.
restore

for name in "${EXCLUDE[@]}"; do
  if [ -e "./$name" ]; then
    mv "./$name" "$PARENT/$name.deploy-tmp"
    echo "moved $name aside"
  fi
done

echo "Deploying to Cloudflare Pages (project: ccab)..."
npx -y wrangler@latest pages deploy . --project-name ccab --branch main --commit-dirty=true
