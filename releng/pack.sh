#!/usr/bin/bash

if pwd | rev | cut -d/ -f1 | grep -q gneler; then
  cd ..
else
  echo "Fatal: must be run from releng."
  exit 1
fi

mkdir -p build
version=$(grep '"version"' package.json | cut -d\" -f4)
git ls-files | xargs zip -9 build/twd-$version-all.nw

cd releng/arch && ./pack.sh
