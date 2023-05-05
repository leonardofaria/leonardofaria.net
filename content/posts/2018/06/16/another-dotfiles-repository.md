---
id: 1931
title: Another dotfiles repository
publishedAt: 2018-06-16T18:42:55-03:00
type: Post
ogImage: /images/og-images/1931.png

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
A few days weeks I got a MacBook Air as secondary machine. Since its SSD is smaller than my main Mac I couldn’t use Time Machine. It was definitely a good time to finally create my <A href="https://github.com/leonardofaria/dotfiles">dotfiles</A> repository. My repository is based in <A href="https://github.com/webpro/dotfiles/">webpro/dotfiles</A> (you may want to check it out his repo to understand this one if you feel lost).

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
  * <A href="https://github.com/kcrawford/dockutil">dockutil</A> – Command line tool for managing dock items
  * [exa](https://the.exa.website/) – A modern replacement for `ls`
  * ffmpeg
  * git
  * git-extras
  * htop
  * <A href="https://github.com/jakubroztocil/httpie">httpie</A> – A Modern command line HTTP client
  * hugo
  * imagemagick
  * mysql
  * <A href="https://github.com/dylanaraps/neofetch">neofetch</A> – A command-line system information tool
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
      * <A href="https://www.npmjs.com/package/dockly">dockly</A>
      * <A href="https://www.npmjs.com/package/list-scripts">list-scripts</A>
      * <A href="https://www.npmjs.com/package/npm-check-updates">npm-check-updates</A>
      * <A href="https://www.npmjs.com/package/npm-scripts-tree">npm-scripts-tree</A>
      * <A href="https://www.npmjs.com/package/script-list">script-list</A>
      * <A href="https://www.npmjs.com/package/space-hogs">space-hogs</A>
      * <A href="https://www.npmjs.com/package/speed-test">speed-test</A>
  * Ruby 2.5.1 via `rvm`
  * <A href="https://github.com/robbyrussell/oh-my-zsh">Oh my zsh</A>, with <A href="https://github.com/bhilburn/powerlevel9k">powerlevel9k</A> theme and git, rails, ruby, npm and osx plugins

## Mac Defaults

There are lots of customizable Mac settings. Check <A href="https://github.com/leonardofaria/dotfiles/blob/master/macos/defaults.sh">`macos/defaults.sh`</A> for all details.

### Dock items

You can update your dock running: `dotfiles dock`.

Note: this will remove all your current dock items.

## <a id="What_is_not_done_automatically_100"></a>What is not done automatically

### <a id="Extra_environment_variables_102"></a>Extra environment variables

Add your extra information environment variables in `system/.custom`.

### <a id="iTerm_2_106"></a>iTerm 2

Open Preferences and in General, check: “Load Preferences from a custom folder or URL”. Point the folder to `macos` – There is a file there called `com.googlecode.iterm2.plist` with all setup.
