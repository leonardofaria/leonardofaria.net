---
id: 1931
title: Another dotfiles repository
date: 2018-06-16T18:42:55-03:00
type: Post
ogImage: /images/og-images/1931.png
layout: post
guid: https://leonardofaria.net/?p=1931
permalink: /2018/06/16/another-dotfiles-repository/
categories:
  - software
  - git
  - mac
tags:
  - software
  - git
  - mac
---
A few days weeks I got a MacBook Air as secondary machine. Since its SSD is smaller than my main Mac I couldn’t use Time Machine. It was definitely a good time to finally create my [dotfiles](https://github.com/leonardofaria/dotfiles) repository. My repository is based in [webpro/dotfiles](https://github.com/webpro/dotfiles/) (you may want to check it out his repo to understand this one if you feel lost).

<span className="hidden">more</span>

  
![](https://raw.githubusercontent.com/leonardofaria/dotfiles/master/screenshot.jpg) 

## How to use it?

  * Make sure that you have an updated macOS and Command Line Tools for Xcode: `sudo softwareupdate -i -a && xcode-select --install`
  * Clone the repo in your home directory: `cd ~ & git clone git@github.com:leonardofaria/dotfiles.git ~/.dotfiles`
  * Run `./install.sh`

## <a id="What_is_installed_10"></a>What is installed?

### <a id="Installed_via_brew_12"></a>Installed via brew

> Check the description of the less popular apps

  * [bats](http://brewformulas.org/Bats) – Bash Automated Testing System
  * [dockutil](https://github.com/kcrawford/dockutil) – Command line tool for managing dock items
  * [exa](https://the.exa.website/) – A modern replacement for `ls`
  * ffmpeg
  * git
  * git-extras
  * htop
  * [httpie](https://github.com/jakubroztocil/httpie) – A Modern command line HTTP client
  * hugo
  * imagemagick
  * mysql
  * [neofetch](https://github.com/dylanaraps/neofetch) – A command-line system information tool
  * nginx
  * python3
  * sqlite
  * tree
  * [unar](https://theunarchiver.com/command-line) – A easy way for unarchiving files
  * wget
  * wifi-password
  * yarn

### Installed via brew cask

> Using brew cask to install Mac app definitely save you a couple hours of browsing

  * appcleaner
  * atom
  * coconutbattery
  * docker
  * firefox
  * font-meslo-for-powerline
  * geekbench
  * gitify
  * google-chrome
  * iterm2
  * launchrocket
  * sequel-pro
  * slack
  * sourcetree
  * spectacle
  * spotify
  * tableplus
  * the-unarchiver
  * transmission
  * visual-studio-code
  * vlc

### <a id="Quick_Look_plugins_63"></a>Quick Look plugins

  * betterzip
  * qladdict
  * qlcolorcode
  * qlimagesize
  * qlmarkdown
  * qlstephen
  * qlvideo
  * quicklook-csv
  * quicklook-json
  * suspicious-package
  * webpquicklook

### Other stuff also installed

  * Node 8 via `nvm`, with a few global packages: 
      * [dockly](https://www.npmjs.com/package/dockly)
      * [list-scripts](https://www.npmjs.com/package/list-scripts)
      * [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
      * [npm-scripts-tree](https://www.npmjs.com/package/npm-scripts-tree)
      * [script-list](https://www.npmjs.com/package/script-list)
      * [space-hogs](https://www.npmjs.com/package/space-hogs)
      * [speed-test](https://www.npmjs.com/package/speed-test)
  * Ruby 2.5.1 via `rvm`
  * [Oh my zsh](https://github.com/robbyrussell/oh-my-zsh), with [powerlevel9k](https://github.com/bhilburn/powerlevel9k) theme and git, rails, ruby, npm and osx plugins

## Mac Defaults

There are lots of customizable Mac settings. Check [`macos/defaults.sh`](https://github.com/leonardofaria/dotfiles/blob/master/macos/defaults.sh) for all details.

### Dock items

You can update your dock running: `dotfiles dock`.

Note: this will remove all your current dock items.

## <a id="What_is_not_done_automatically_100"></a>What is not done automatically

### <a id="Extra_environment_variables_102"></a>Extra environment variables

Add your extra information environment variables in `system/.custom`.

### <a id="iTerm_2_106"></a>iTerm 2

Open Preferences and in General, check: “Load Preferences from a custom folder or URL”. Point the folder to `macos` – There is a file there called `com.googlecode.iterm2.plist` with all setup.
