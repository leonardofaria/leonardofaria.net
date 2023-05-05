---
id: 694
title: Todo lists para o Textmate
publishedAt: 2009-08-22T16:06:36-03:00
type: Post
ogImage: /images/og-images/694.png

permalink: /2009/08/22/todo-lists-para-o-textmate/
dsq_thread_id:
  - "1002710617"
categories:
  - mac
  - software
tags:
  - mac
  - software
---
Fica a dica para quem usa o Textmate: <A href="https://github.com/henrik/tasks.tmbundle/">Tasks</A> é um bundle para o Textmate que permite a criação de Todo lists bonitinhas.

<center>
  <a href="https://github.com/henrik/tasks.tmbundle/"><img src="/wp-content/uploads/2009/08/textmate_tasks-bundle.png" alt="Tasks" title="Tasks" /></a>
</center>

A [instalação](http://henrik.nyh.se/2007/08/tasks-bundle) é fácil:

```shell
mkdir -p ~/Library/Application\ Support/TextMate/Bundles
cd ~/Library/Application\ Support/TextMate/Bundles
git clone git://github.com/henrik/tasks.tmbundle.git Tasks.tmbundle
osascript -e 'tell app "TextMate" to reload bundles'
```

Depois disso, todos os arquivos `.todo`, `.todolist` e `.tasks` serão formatados de acordo com o bundle.
