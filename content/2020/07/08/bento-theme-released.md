---
id: 2207
title: Bento theme released
date: 2020-07-08
author: Leonardo Faria
permalink: /2020/07/08/bento-theme-released
categories:
  - hugo
tags:
  - hugo
---

[Earlier on April](/2020/04/21/moving-to-hugo/) I moved this website from Wordpress to Hugo. I like how Hugo is minimalist, fast and the fact I don't need to maintain one more JavaScript codebase :) 

I created a theme for this website inspired by Casper (v1), Medium and many other minimalist journal templates. Bento was just released in the [Hugo Themes website](https://themes.gohugo.io/) and I decided to do here a show & tell about the work done.

## Design

I have decided to use the OS default typography and lots of gray and blue colors. The color palette is the default TailwindCSS [color palette](https://tailwindcss.com/docs/customizing-colors/#default-color-palette).

### TailwindCSS

### Little big details

In the theme I used transitions for links colors and another nice trick is the reading progress bar in the very top. 

EMBED VIDEO

One of my favourite things in this layout is the backdrop-filter in the sticky header. The  [`backdrop-filter`](https://web.dev/backdrop-filter/) CSS property is very popular in iOS and I want to add this touch in the theme instead of having the usual opacity.

## Performance

### Turbolinks

Copying [their README](https://github.com/turbolinks/turbolinks): Turbolinks® makes navigating your web application faster. Get the performance benefits of a single-page application without the added complexity of a client-side JavaScript framework. Use HTML to render your views on the server side and link to pages as usual. When you follow a link, Turbolinks automatically fetches the page, swaps in its <body>, and merges its <head>, all without incurring the cost of a full page load.

Turbolinks is well-known in the Rails community but it can also be used outside the framework. 

https://devinschulz.com/

### PostCSS