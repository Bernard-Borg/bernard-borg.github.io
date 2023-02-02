#!/usr/bin/env sh

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -B gh-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:Bernard-Borg/bernard-borg.github.io.git gh-pages

cd -