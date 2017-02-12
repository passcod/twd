#!/usr/bin/bash

cd ../..
version=$(grep '"version"' package.json | cut -d\" -f4)
description=$(grep '"description"' package.json | cut -d\" -f4)
checksum=$(sha512sum build/twd-$version-all.nw | cut -d\  -f1)

mkdir -p build/arch
cp releng/arch/PKGBUILD build/arch/
cp build/twd-$version-all.nw build/arch/

cd build/arch
sed -i "s/%version/$version/" PKGBUILD
sed -i "s/%description/$description/" PKGBUILD
sed -i "s/%checksum/$checksum/" PKGBUILD

mkaurball -f
