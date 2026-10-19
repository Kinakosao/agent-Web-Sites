#!/usr/bin/env bash
# Lance Lighthouse sur un site statique et affiche les 4 scores + audits en échec.
# Lighthouse exige une URL http(s) : ce script sert le dossier temporairement.
# Usage : scripts/lighthouse-check.sh <dossier-site> [page.html]
set -euo pipefail

SITE_DIR="${1:?Usage: lighthouse-check.sh <dossier-site> [page.html]}"
PAGE="${2:-index.html}"
PORT=4173

SERVER_PID=""
cleanup() {
  [[ -n "$SERVER_PID" ]] && kill "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT

npx --yes serve -l "$PORT" "$SITE_DIR" >/dev/null 2>&1 &
SERVER_PID=$!
sleep 2

URL="http://localhost:$PORT/$PAGE"
OUT="$(mktemp -t lighthouse-XXXX).json"

LIGHTHOUSE_BIN="$(dirname "$0")/../node_modules/.bin/lighthouse"
if [[ ! -x "$LIGHTHOUSE_BIN" ]]; then
  LIGHTHOUSE_BIN="npx --yes lighthouse"
fi

$LIGHTHOUSE_BIN "$URL" \
  --output=json --output-path="$OUT" \
  --chrome-flags="--headless" \
  --only-categories=performance,accessibility,best-practices,seo \
  --quiet

node -e '
  const r = require("'"$OUT"'");
  for (const [key, cat] of Object.entries(r.categories)) {
    console.log(`${cat.title}: ${Math.round(cat.score * 100)}`);
  }
  console.log("\nAudits en échec :");
  for (const audit of Object.values(r.audits)) {
    if (audit.score !== null && audit.score < 0.9 && audit.scoreDisplayMode === "binary") {
      console.log(`- ${audit.title}`);
    }
  }
'
rm -f "$OUT"
