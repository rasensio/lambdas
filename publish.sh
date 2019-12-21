#!/bin/sh
# npm login
comment="'$*'"
git add *
git commit -m "$comment"
git push
npm version patch
npm publish --access public

