#!/usr/bin/env bash
# Build the noindex preview and zip the CONTENTS of dist/ (index.html and
# .htaccess at the zip root) to deploy/natpower-preview.zip.
set -euo pipefail
cd "$(dirname "$0")/.."
PUBLIC_NOINDEX=true npx astro build
mkdir -p deploy
rm -f deploy/natpower-preview.zip
(cd dist && zip -qr -X ../deploy/natpower-preview.zip .)
unzip -l deploy/natpower-preview.zip | grep -E ' (index\.html|\.htaccess|robots\.txt|404\.html)$'
ls -lh deploy/natpower-preview.zip
