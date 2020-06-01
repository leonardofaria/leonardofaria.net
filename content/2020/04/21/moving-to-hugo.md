---
id: 2200
title: Moving to Hugo
date: 2020-04-21T11:41:56-03:00
author: Leonardo Faria
ogImage: /images/og-images/2200.png
layout: post
permalink: /2020/04/21/moving-to-hugo
categories:
  - hugo
---

In the last few days, I worked to move this website to [Hugo](https://gohugo.io). I have been using WordPress for years (this domain turned 15 earlier this month) in a dozen projects however it was time to change. Decided to follow a minimalist setup with Hugo.

## About the stack

I decided to use Hugo here because I wanted something simple. KISS. I like Gatsby and Next.js however I didn't want to choose a JavaScript solution. To achieve similar setup, I would have to add too many dependencies and they would become outdated quickly (rephasing [Wes Bos](https://wesbos.com/new-wesbos-website/#Serverless-Functions)). That's being said, I need to mention that I am using JS to strip the extra classes from Tailwind CSS.

## About the design

My previous site used a theme called [Casper](http://lacymorrow.com/casper/), which is inspired in [Ghost's default theme](https://ghost.org/). I decided to build the theme from scratch inspired by Casper, Medium and many other minimalist blogs. I still have a feel things to fix/improve but designwise I am quite happy with the result.

As I mentioned before, I used [Tailwind CSS](https://tailwindcss.com/) in this project. The utility-first approach definitely makes prototying faster. To avoid a bloated CSS file I am using a [purgecss package](https://www.npmjs.com/package/@fullhuman/postcss-purgecss) to remove all the classes I am not using in the site. The final result is a 2.5KB CSS file.

The previous WordPress had a good score in Lighthouse tests, and I was able to make it even better:

![Lighthouse results](/wp-content/uploads/2020/04/lighthouse.jpg)

The theme is called [Bento](http://bento-hugo-theme.netlify.com/) and it is [open-source](https://github.com/leonardofaria/bento).
