#!/usr/bin/env sh

set -e

npm run build 

cd dist

git init
git add -A 
git commit -m 'first vue proj'
git push -f git@github.com:Aylambo/vue-books.git main:gh-pages

cd -
