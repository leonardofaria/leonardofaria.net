---
id: 2223
title: How to use Git aliases to increase your productivity
publishedAt: 2020-10-27
type: Post
ogImage: /images/og-images/2223.png
permalink: /2020/10/27/how-to-use-git-aliases-to-increase-your-productivity
categories:
  - git
tags:
  - git
---

Git is a very powerful tool, and it can be a little scary sometimes. It doesn't matter how long you've used it, you will find yourself searching for "how to do X".

Today I want to talk about aliases. Aliases are short, custom made commands that translate into other commands. Aside from saving keystrokes, aliases help you avoiding memorizing command options or digging in your shell history to find the command you need.

There are 2 types of aliases: [Git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) and shell aliases, controlled by bash, zsh, etc. Let's start by Git aliases:

## How to create Git aliases

Git aliases can be stored globally or in individual repositories. Unless you have a very specific reason to keep an alias scoped to a project, I would recommend editing the global config file, which is located at `~/.gitconfig`. 

Aliases will live in the section `[alias]`. They are available in your terminal as Git options the same way `add`, `commit` and other options work. Let's see how to add an alias, step-by-step:

First, open your Git config file. In my case, I'll use VS Code:

```bash
code ~/.gitconfig
```

Next, let's add our first Git alias:

```shell
[alias]
	graph = log --oneline --graph --decorate
```

After saving the file, go to an existing Git project and execute `git graph`. The result is similar to the image below: 

![git graph example in the Tailwind CSS repository](/wp-content/uploads/2020/10/git-graph.jpg)

Instead of typing `git log --oneline --graph --decorate` and remembering all three flags, now you can use `git graph` and get the same result.

## My favourite Git aliases

Here are some aliases that I have been using a lot lately:

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

`graph`, `ls`, `ll` and `lds` are useful for history visualization. I use `git ll` a lot since it gives me the commit, the changed files, and how many lines were modified, as shown below:

![git ll example in the Tailwind CSS repository](/wp-content/uploads/2020/10/git-ll.jpg)

`conflicts` returns a list of conflicts which you can just copy and paste in your editor.

`local-branches` returns a list of branches available locally and not in origin (GitHub for example). This can be useful if, for example, you need to double-check if your team has access to your branches.

`recent-branches` is probably the one I use the most in this list. If you are working in different features at the same time and jumping from branch to branch, this is a must-have.

`authors` is handy for open-source work. You can run `git authors > AUTHORS.txt` and see a list of people who have worked in the repository.

## Shell aliases with Oh My Zsh Git plugin

The list above is quite small, you may think. And it is indeed. This is because I also use the aliases created by the [Oh My Zsh Git plugin](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh). 

> If you don't what is Oh My Zsh: Oh My Zsh is a framework for managing your zsh configuration. With this tool, you can customize the shell prompt, use different themes and add plugins that offer aliases to increase your productivity. 

Shell aliases are created in a slightly different way. They live inside the shell config files (usually `~/.bashrc` or `~/.zshrc`, if you use Bash and Zsh respectively). 

Here is an example created by the plugin:

```shell
alias gst='git status'
```

If you don't use Oh My Zsh, you can still copy the line above and paste it in the end of the `~/.bashrc` or `~/.zshrc` files – the shell alias will work fine.

Instead of setting up a Git alias `st` for status, I use the shell alias `gst` which gives me the same result.

I prefer shell aliases over Git aliases for 2 reasons:

1. Shell aliases don't need to be prefixed by the command `git`.
2. I don't need to maintain a list of aliases since I can just learn the ones maintained by the Oh My Zsh community.

> Protip: If you are using the default shell without any customization, I do recommend checking out the [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/) project and [Wes Bos](https://wesbos.com/)' [Command Line Power User](https://commandlinepoweruser.com/).

## Conclusion

Aliases are shortcuts you can create or use to increase your productivity. Today I showed two ways to use them in Git.

I hope this post inspires you to re-imagine how you use the terminal. What about starting to create your own aliases?
