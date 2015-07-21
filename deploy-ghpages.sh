#!/bin/bash

echo "Building the app"
gulp || exit 8;
echo "Making sure the dist minified version of the app is ready"
ls dist || exit 9;

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

echo "Ensuring Travis' commits are associated to him"
git config user.name "Travis"
git config user.email "vronvali@cesine.ca"

echo "Ensuring Travis' has my website as a remote"
git remote add mywebsite "https://$GH_TOKEN@github.com/vronvali/vronvali.github.io.git"
git fetch mywebsite
git checkout -b gh-pages mywebsite/master
git checkout gh-pages

echo "Moving todo app into the right directory for where it belongs on my website"
mkdir -p apps
mv dist apps/todos

echo "Committing the updated changes to the todo app"
git add -A apps/todos
git commit -m "rebuild todo App vronvali/mytodo-gulp at ${rev}"

echo "Pushing the changes to my website on github (-q so that nothing gets printed in the travis logs which is sensitive)"
git push -q mywebsite HEAD:master
