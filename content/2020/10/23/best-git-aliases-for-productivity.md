---
id: 2223
title: Best Git aliases for your productivity
date: 2020-10-23
author: Leonardo Faria
ogImage: /images/og-images/2223.png
permalink: /2020/10/23/best-git-aliases-for-productivity
categories:
  - git
tags:
  - git
---

Git is a very powerful tool and it can be scary sometimes. It doesn't matter for how long you are using it, you will see yourself searching for "how to do X".

Today I want to talk about [`alias`](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases). There are 2 types of aliases: Git aliases and shell aliases, controlled by bash, zsh, etc. Aliases are short, custom made commands that translate into others, so you don't need to memorize options or dig in your shell history to find the command you need.

## Creating/editing Git aliases

While shell aliases are often created in shell profile files (ex.: `~/.bashrc`, `~/.zshrc`), Git aliases can be stored globally or per repository. Unless you have a very specific reason to keep an alias scoped to a project, I would recommend editing the global config file. The file path to it is `~/.gitconfig`. 

_Note:_ Alternatively, you can run `git config -e --global` to edit the content of this file in your default terminal editor. If you want to open the config in VS Code, you can run `EDITOR=code git config -e --global`.

Aliases will be in a section `[alias]`. They will be available in your terminal as Git options the same way `add`, `commit` and other options work. 

## My favourite Git aliases

Here are some aliases that I have been using in the last years:

```shell
[alias]
	graph = log --oneline --graph --decorate
	ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
	ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
	lds = log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short
	conflicts = diff --name-only --diff-filter=U
	local-branches = !git branch -vv | cut -c 3- | awk '$3 !~/\\[/ { print $1 }'
	recent-branches = !git branch --sort=-committerdate | head
	authors = !git log --format='%aN <%aE>' | grep -v 'users.noreply.github.com' | sort -u --ignore-case
```

`graph`, `ls`, `ll` and `lds` are useful for history visualization. I use a lot `git ll` since it gives me the commit, the changed files and how many lines were modified, as shown below: 

![git ll example in the Tailwind CSS repository](/wp-content/uploads/2020/10/git-ll.jpg)

`conflicts` returns a list of conflicts which you can just copy and paste in the editor. 

`local-branches` returns a list of branches available locally and not in origin. Quite useful if you are forgetting a branch behind.

`recent-branches` is probably the most used in this list. If you are jumping from branch to branch, this is a must-have.

`authors` is handy for open-source work. You can run `git authors > AUTHORS.txt` and have a list of people who worked in the repository.

## Git shell aliases with Oh My Zsh Git plugin

The list above is quite small, you may think. And it is indeed. The reason why is because I also use the [Oh My Zsh Git plugin](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh) for less complex aliases. 

If you don't what is Oh My Zsh: Oh My Zsh is a framework for managing your zsh configuration. With this tool, you can customize the shell prompt, use different themes and add plugins that offer aliases to increase your productivity.

Going back to aliases, here is an example of shell alias created by the plugin:

```shell
alias gst='git status'
```

Instead of setting up a Git alias `st` for `status` as you may find in many other places, I use the shell alias `gst` that gives me the same result. Oh, before I forget: shell aliases don't need to be prefixed by the command `git`.

If you are using the default shell without any customization, I do recommend checking the [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/) project and [Wes Bos](https://wesbos.com/)' [Command Line Power User](https://commandlinepoweruser.com/).
