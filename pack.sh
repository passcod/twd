#!/usr/bin/bash

version=$(grep '"version"' package.json | cut -d\" -f4)
git ls-files | xargs zip -9 twd-$version-all.nw
