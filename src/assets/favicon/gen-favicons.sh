#!/bin/bash
set -e

quote ()
{
    local quoted=${1//\'/\'\\\'\'};
    printf "'%s'" "$quoted"
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

SVG_FILE="$SCRIPT_DIR/favicon.svg"
if [ ! -f "$SVG_FILE" ]; then
  echo "SVG file not found or invalid: $SVG_FILE"
  exit 1
fi


echo "Generating PNGs:"
PNG_PATHS=""
for SIZE in 16 32 48 64 128 256 512; do
  PNG_FILE="$SCRIPT_DIR/gen/favicon-$SIZE.png"

  (
    if [ -n "$DEBUG" ]; then
      set -x
    fi
    magick \
      -background none \
      -density 384 \
      "$SVG_FILE" \
      -resize "${SIZE}x${SIZE}" \
      "$PNG_FILE"
  )

  PNG_PATHS="$PNG_PATHS $(quote "$PNG_FILE")"
  echo "- $PNG_FILE"
done

ICO_FILE="$SCRIPT_DIR/gen/favicon.ico"
(
  if [ -n "$DEBUG" ]; then
    set -x
  fi
  sh -c "magick $PNG_PATHS $(quote "$ICO_FILE")"
)
echo "Generated ICO: $ICO_FILE"

