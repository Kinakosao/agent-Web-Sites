#!/usr/bin/env bash
# Prépare le dossier publiable : copie sites/<nom>/ dans dist/<nom>/ sans
# workspace/ ni _originaux/.
# Usage : scripts/build.sh <nom-du-site>
set -euo pipefail

NAME="${1:?Usage: build.sh <nom-du-site>}"
NAME="$(basename "${NAME%/}")"
SRC="sites/$NAME"
OUT="dist/$NAME"

[ -d "$SRC" ] || { echo "Site introuvable : $SRC" >&2; exit 1; }

rm -rf "$OUT"
mkdir -p "$OUT"
tar -C "$SRC" --exclude='./workspace' --exclude='_originaux' --exclude='.gitkeep' -cf - . | tar -C "$OUT" -xf -
echo "livré : $OUT ($(find "$OUT" -type f | wc -l) fichiers)"
