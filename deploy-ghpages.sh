#!/bin/bash

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

cd stage/_book

git init
git config user.name "Travis"
git config user.email "vronvali@cesine.ca"

git remote add upstream "https://$GH_TOKEN@github.com/vronvali/vronvali.github.io.git"
git fetch upstream
git reset upstream/gh-pages

echo "vronvali.com" > CNAME

touch .

git add -A dist
git commit -m "rebuild todoApp at ${rev}"
git push -q upstream HEAD:gh-pages
