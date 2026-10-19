#!/usr/bin/env bash
# Hook PreToolUse (Write) des reviewers : n'autorise que workspace/reviews/.
f="$(jq -r '.tool_input.file_path // empty')"
case "$f" in
  */workspace/reviews/*) exit 0 ;;
  *) echo "Interdit : un reviewer n'écrit que dans workspace/reviews/" >&2; exit 2 ;;
esac
