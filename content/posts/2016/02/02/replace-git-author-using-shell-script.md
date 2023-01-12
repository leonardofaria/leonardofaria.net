---
id: 1704
title: Replace git author using shell script
date: 2016-02-02T02:22:56-02:00
type: Post
ogImage: /images/og-images/1704.png
layout: post
guid: https://leonardofaria.net/?p=1704
permalink: /2016/02/02/replace-git-author-using-shell-script/
dsq_thread_id:
  - "5345234838"
categories:
  - git
tags:
  - git
---
This is an old trick that saved me several times. Sometimes people forget to setup their name and email information. The following script is useful to fix mistakes:

```shell
#!/bin/sh

git filter-branch -f --env-filter '

an="$GIT_AUTHOR_NAME"
am="$GIT_AUTHOR_EMAIL"
cn="$GIT_COMMITTER_NAME"
cm="$GIT_COMMITTER_EMAIL"

if [ "$GIT_COMMITTER_EMAIL" = "old@email.com" ]
then
  cn="New author name"
  cm="new@email.com"
fi

export GIT_AUTHOR_NAME="$an"
export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_NAME="$cn"
export GIT_COMMITTER_EMAIL="$cm"
'

echo "Run after"
echo "git push origin +master:master"
```
