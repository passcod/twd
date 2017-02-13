# Maintaining this project

This living document outlines what a maintainer should do when working on or
around this project. It is here both as written down guidelines for existing
maintainers, and as an introduction for new or prospective maintainers.

**This project is also looking for a new maintainer.** The current maintainer
does not have the time nor willingness to maintain this with the alacrity and
care it deserves. If you are willing, they will be very happy to hand you
commit and publish access. Ask!

- [The project](#the-project)
  - [Description](#description)
  - [Vision](#vision)
- [The specifics](#the-specifics)
  - [Release process](#release-process)
- [The community](#the-community)
  - [Conduct](#conduct)
  - [Growth](#growth)
- [Contact](#contact)
- [About](#about)

## The project

### Description

twd is a [Tweetdeck] wrapper for desktop use, powered by [NW.js]. At time of
creation, Tweetdeck had retired all of its desktop applications, leaving users
who wanted tweetdeck as a standalone application the only choice to run it in
their browser, either as a separate window or just a tab. twd was born to
remedy this problem for all platforms: Windows, Linux, Mac. The name is a
short, consonant-only contraction, that has just enough and just the right
letters that it can be recognised as standing for "Tweetdeck".

While twd was the first, sister projects initially based on the same code were
created later. [slk] was a [Slack] wrapper for Linux Desktop, from before Slack
for Linux Beta was released. [kndl] is a [Kindle Cloud Reader] wrapper. You are
not expected to maintain kndl as well as twd, but you may if you wish to.

[Tweetdeck]: https://tweetdeck.twitter.com/
[NW.js]: https://github.com/nwjs/nw.js
[slk]: https://github.com/passcod/slk
[Slack]: https://slack.com/
[kndl]: https://github.com/passcod/kndl
[Kindle Cloud Reader]: https://read.amazon.com/

### Vision

No particular vision, but two wishes:

- Possibly wanting to share some code between twd and kndl, for ease of
  maintaining them and/or public benefit so more wrappers could be created.

- Also wanting to write scripts and/or set up CIs to build and publish binaries
  for distribution to all three major platforms, as well as updating
  repositories, e.g. [AUR], an Ubuntu/Debian [PPA], a [Homebrew Cask] formula,
  a [Chocolatey] distribution.

[AUR]: https://aur.archlinux.org/
[PPA]: https://launchpad.net/ubuntu/+ppas
[Homebrew Cask]: https://caskroom.github.io/
[Chocolatey]: https://chocolatey.org/

## The specifics

### Release process

Tag the release:

1. Run `npm version <level>` with the appropriate level, following semver
2. Run `git push; git push --tags`

Generate binaries:

1. Download the latest NW.js for all supported platforms
2. Package the source files
3. Add them to the NW.js binaries / distributions
4. Package the binaries:
  - tar.gz for Linux
  - zip for Windows and OS X

Create the release:

1. Go to https://github.com/passcod/twd/releases
2. Draft a new release for the new tag
3. Upload the binaries

Tweet about it!

## The community

### Conduct

This project has a Code of Conduct. Maintainers are expected not only to abide
by it to maintain a community that is safe and welcoming for all, but also to
help in its enforcement.

Enforcement sounds scary! It need not be: it can be as simple as reminding
people to be kind, asking for harmful wording to be edited in comments, or
contacting people privately to call them out on unfriendly behaviour and ask
them to stop.

If offences are more severe, though, it is expected that maintainers help by
locking threads, reporting the offending parties, and/or enforcing temporary or
permanent bans.

Maintainers may also offer support to affected parties and re-affirm our
commitment to providing a safe environment.

### Growth

Much like this document is intended to help existing and new maintainers to
maintain the project as best as they can, so should maintainers look for
additional help, maintainers, contributors, etc as the project grows.

You can give people commit access fairly easily: it can always be revoked if
needed, and git keeps history fairly secure, especially as it is distributed
over all contributors' computers.

## Contact

If you wish to become a maintainer, or you want to contact us for some other
reason, you can either send an email to the owner of the project
(felix@passcod.name) or another existing maintainer, or you can open an issue
on this repository.

If you want to suggest changes to this document, either open an issue or
propose a change using a Pull Request directly.

## About

The ideas for this document came about from various discussions with and around
the developer community. In particular, I would like to thank @zkat,
@charlotteis, and @adampowers of the [WeAllJS](https://wealljs.org/) community.
