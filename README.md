# twd

_TweetDeck wrapper for use as desktop app._

![Screenshot](https://stuff.passcod.name/humgur/code/twd.png)

Uses [node-webkit] to provide a single-purpose window
onto TweetDeck's web version. Min-width = single-col.

Will not work with node-webkit < 0.10.

[node-webkit]: https://github.com/rogerwang/node-webkit
[release]: https://github.com/passcod/twd/releases

## running…

### …from source:

```bash
$ $package_manager install node-webkit
$ git clone git://github.com/passcod/twd.git
$ cd twd
$ nw .
```

### ~~…on archlinux:~~

There is currently no Arch Linux package, but if someone creates it I'll be glad to link it again.

~~[AUR package](https://aur.archlinux.org/packages/twd)~~

```bash
$ yaourt -S twd
$ twd
```

A `.desktop` file (for graphical menus) is also provided
(see [releng/arch/twd.desktop](releng/arch/twd.desktop)).

## legal

TweetDeck, Twitter, and the TweetDeck logo are trademarks
of, and copyrighted to, Twitter, Inc.

All other files are released in the Public Domain as per
my [policy](https://passcod.name/PUBLIC.txt).
