#!/usr/bin/env bash
# Optimise toutes les images d'un dossier : conversion WebP + variante
# mobile (~640px) + compression, originaux déplacés dans SITE/workspace/originaux/ (jamais publié).
# Usage : scripts/optimize-images.sh <dossier>
set -euo pipefail

DIR="${1:?Usage: optimize-images.sh <dossier>}"
DIR="${DIR%/}"  # ex. SITE/assets/images

if ! command -v magick >/dev/null 2>&1 && ! command -v convert >/dev/null 2>&1; then
  echo "ImageMagick (magick/convert) est requis." >&2
  exit 1
fi
CONVERT_CMD="convert"
command -v magick >/dev/null 2>&1 && CONVERT_CMD="magick"

shopt -s nullglob nocaseglob
ORIGINALS_DIR="$(dirname "$(dirname "$DIR")")/workspace/originaux"
for img in "$DIR"/*.jpg "$DIR"/*.jpeg "$DIR"/*.png; do
  out="${img%.*}.webp"
  mobile_out="${img%.*}-mobile.webp"
  "$CONVERT_CMD" "$img" -strip -quality 82 "$out"
  "$CONVERT_CMD" "$img" -strip -resize '640x>' -quality 80 "$mobile_out"
  mkdir -p "$ORIGINALS_DIR"
  mv "$img" "$ORIGINALS_DIR/"
  echo "converti : $img -> $out + $mobile_out (original déplacé dans $ORIGINALS_DIR/)"
done
