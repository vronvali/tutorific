#!/bin/bash

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

git config user.name "Travis"
git config user.email "vronvali@cesine.ca"
git remote rm mywebsite
git remote add mywebsite "https://$GH_TOKEN@github.com/vronvali/vronvali.github.io.git"
git fetch mywebsite
git branch -u mywebsite/gh-pages gh-pages

echo "vronvali.com" > CNAME

gulp

git add -A dist
git commit -m "rebuild todoApp at ${rev}"
git push -q mywebsite HEAD:gh-pages
