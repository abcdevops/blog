#!/bin/sh
set -e
set -x

# we need this in order to avoid conflicts with Gemfile
unset BUNDLE_GEMFILE
#cd /tmp

x=$(readlink --canonicalize-existing "$0")
dir=$(dirname "$x")

target=$1

mkdir -p "${target}"
bundle exec fontcustom compile "${dir}" "--output=${target}" --font-name=icons --templates=css --no-hash --force --autowidth
sed -i -E "s|\"./icons([^\"]+)\"|\"/css/icons\1?$(date +%s)\"|g" "${target}/icons.css"