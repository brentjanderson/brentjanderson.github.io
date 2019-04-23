---
title: How I set up my machine
date: '2019-01-07T00:00:00.000Z'
draft: false
category: ''
tags:
  - ''
description: 'I write code for Lambda School. This is how I set up my new laptop.'
---

I started at Lambda School this year, writing software to help students and
staff be more productive. As with any modern software job, I had to set up a new
laptop with all of the tools I rely on each day to get the job done.

After setting up the laptop and tightening up a few pieces, here is my
definitive guide to what I install, and why.

## The Hardware

15" Macbook Pro (Space Gray) - Intel core i7, 16 GB RAM, 512 GB SSD

I've debated whether or not I want to dive into a Thinkpad with Ubuntu, but my
inertia with Mac is pretty strong. No reason to try something new just for fun
at this juncture. Same thing applies to Vim, although I may take some time to
get into it at some point.

Also, I don't particularly care about Space Gray vs. Silver, but my home laptop
is silver so space gray helps me keep track of which one I'm using.

## Mac Apps

- Spark for eMail
- Firefox
- Spotify
- Slack
- Monday.com
- Notion
- Zoom Conference
- 1Password
- Amethyst for window management
- Dropbox
- Keybase
- F.lux
- Fohkuhs Pomodoro Timer
- Visual Studio Code
- iTerm 2
- Docker for Mac
- Postgres.app for local `psql` command support

## Command Line Work

> You can tell a lot about an engineer by the contents of his shell profile.

iTerm 2 is my preferred terminal since it's easy to configure and the profiles
are transferrable between machines.

### ZSH & Oh-my-zsh

I like the plugins [Oh-my-zsh](https://ohmyz.sh/) comes packed with: `git`, `docker`, `node`, `yarn`.

I use the `agnoster` theme with [powerline-fonts](https://github.com/powerline/fonts) installed.

### nvm & node

Although I prefer [asdf](https://asdf-vm.com/) for versioning dependencies, however to be consistent with our team standards I installed [nvm](https://github.com/creationix/nvm) for handling our node versions.

I set up an `~/.nvmrc` file as well for some global defaults as needed, including version pinning for dependencies.

### psql

I install [Postgres.app](https://postgresapp.com/) so it's easy to get `psql` on my command line.

I have a `.psqlrc` file to set up table formatting and other features of `psql` so it becomes my go-to tool for interacting with postgres (typically over GUI clients).

### Homebrew

I install [Homebrew](https://brew.sh) so that it's easy to get components I need installed. I typically install `fx` for reading JSON files and `wget` out of the gate.

## Visual Studio Code

VS Code is a fantastic code editor that can be extended to essentially be a full IDE. Although someday I might jump into tmux and vim, VS Code is fast, easy to use and set up, and it works very well.

My preferred base extensions:

- DotENV
- ESLint
- Docker
- markdownlint
- GitLens
- npm
- vscode-icons
- VS Live Share

I add in additional extensions for other language supports.

## Ad, Tracking, and other blocking with DNSMasq

[DNSMasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) is a bundle of network infrastructure services, including a DNS resolver. I use DNSMasq to block trackers, ad networks, and time wasting websites cold. Here's how setup works:

- `brew install dnsmasq`
- Edit `/usr/local/etc/dnsmasq.conf` so it includes the following line: `conf-dir=/usr/local/etc/dnsmasq.d/,*.conf`
- Add a directory `/usr/local/etc/dnsmasq.d`
- Configure basic dnsmasq settings by adding a file to `/usr/local/etc/dnsmasq.d/resolvers.conf` with the following contents:

```conf
# Tell dnsmasq to get its DNS servers from this config file only
no-resolv
# Add alternate DNS servers
server=208.67.222.222
server=208.67.220.220
```

- Configure another dnsmasq.conf file `time-wasters.conf` with the following format:

```conf
address=/.facebook.com/facebook.com/ # This stops any domain under facebook.com
```

- `sudo brew services start dnsmasq`

## Firefox

I use [Duck.com](https://duck.com) for search

Extensions:

- 1Password extension
- HTTPS Everywhere
- Privacy Badger
- Terms of Service; Didn't Read
- uBlock Origin

## Other details

I will update this with further details, but for now this is the base setup I prefer to use on my system.
