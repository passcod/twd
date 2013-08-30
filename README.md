TWEETDECK WRAPPER
=================

![Screenshot](http://i.imgur.com/R9F7Obw.png)

Uses node-webkit to provide a single-purpose window
onto TweetDeck's web version. Defaults to double-column
layout, can be resized easily to single-column size.
Switch columns by using arrow keys or side scroll
or 1 2 3 4 5 6 7 8 9 0 as per tweetdeck shortcuts.

Require node-webkit 0.7.x or greater.

RUNNING
-------

### all platforms

#### from source:

```bash
# Install node-webkit
$ git clone git://github.com/passcod/twd.git
$ cd twd
$ nw .
```

#### from package:

```bash
# Install node-webkit
$ wget https://passcod.name/twd/bin/twd-1.0.1.nw
$ nw twd-1.0.1.nw
```


### platform-specific

#### windows:

https://passcod.name/twd/bin/twd-1.0.1-win32.zip  
Download, unzip, and run twd.exe

#### mac os x:

https://passcod.name/twd/bin/twd-1.0.1-mac.zip  
Download, unzip, and run twd.app

#### linux:

https://passcod.name/twd/bin/twd-1.0.1-linux32.tar.gz  
https://passcod.name/twd/bin/twd-1.0.1-linux64.tar.gz  
Download correct version, tar xzvf, and run ./twd

##### archlinux:

https://aur.archlinux.org/packages/twd  
Install using yaourt, packer, or whatever


COPYRIGHT
---------

TweetDeck, Twitter, and the TweetDeck logo are trademarks
of, and copyrighted to, Twitter, Inc.

Node-webkit is MIT licensed: https://github.com/rogerwang/node-webkit

More licensing information is available in the LICENSE file.
