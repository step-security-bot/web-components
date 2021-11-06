#!/usr/bin/env bash

##
# Bash script to convert .css files to .css.ts files.
#
# Inspiration taken from https://github.com/PolymerLabs/lit-mail/blob/master/scripts/build-styles.sh
set -e

# @see https://github.com/koalaman/shellcheck/wiki/SC2207
cssfiles=()
while IFS='' read -r line; do cssfiles+=("$line"); done < <(find packages -name "*.css")

echo "${cssfiles[*]}"
echo ""

for file in "${cssfiles[@]}"; do
  cssfile=${file/.css/-css.ts}
  css=$(cat "$file")
  printf "Generating %s…\n" "$cssfile"
  printf "/**
 * DO NOT EDIT THIS FILE DIRECTLY.
 *
 * It is generated automatically from a given .css file inside the build-styles.sh script.
 */
import { css } from '@inventage-web-components/common';

export const styles = css\`
%s
\`;" "$css" > "$cssfile"
done
echo ""
