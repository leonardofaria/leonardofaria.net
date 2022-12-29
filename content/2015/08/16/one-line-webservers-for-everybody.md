---
id: 1553
title: One line webservers for everybody
date: 2015-08-16T13:38:47-03:00
type: Post
ogImage: /images/og-images/1553.png
layout: post
guid: https://leonardofaria.net/?p=1553
permalink: /2015/08/16/one-line-webservers-for-everybody/
dsq_thread_id:
  - "4051595671"
categories:
  - software
tags:
  - software
---
Sometimes it is necessary to serve a folder with static resources (images, for example) as a web server. The probably most popular commands to perform these tasks are:

```shell
php -S localhost:9999
python -m SimpleHTTPServer 9999
```

The option that uses PHP [built-in web server](http://php.net/manual/en/features.commandline.webserver.php) requires PHP 5.4+. The [following gist](https://gist.github.com/willurd/5720255) provides several other ways to run a webserver locally.  

gist willurd 5720255
