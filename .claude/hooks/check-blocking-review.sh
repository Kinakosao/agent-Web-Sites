#!/usr/bin/env bash
# PostToolUse hook (Write|Edit) : signale un verdict BLOQUANT dans un rapport
# de revue en l'injectant dans le contexte de qui vient d'écrire le fichier.
# Les reviewers n'ont pas l'outil Write : c'est l'orchestrateur lui-même qui
# écrit ces rapports (voir CLAUDE.md), donc ce hook fire dans son contexte.
# Reste un filet de sécurité : CLAUDE.md impose aussi une lecture explicite
# du Verdict par l'orchestrateur.
set -euo pipefail

input="$(cat)"
file_path="$(jq -r '.tool_input.file_path // .tool_response.filePath // empty' <<<"$input")"
[ -z "$file_path" ] && exit 0

case "$file_path" in
  */workspace/reviews/*.md) ;;
  *) exit 0 ;;
esac

# Ancré sur une ligne de tableau ("| BLOQUANT | ... |") pour éviter un faux
# positif sur une phrase du type "Aucun point BLOQUANT."
if grep -q "^| *BLOQUANT *|" "$file_path" 2>/dev/null; then
  reason="⚠️ Revue bloquante détectée dans $file_path — ne pas livrer avant correction."
  jq -n --arg reason "$reason" \
    '{hookSpecificOutput: {hookEventName: "PostToolUse", additionalContext: $reason}}'
fi
exit 0
