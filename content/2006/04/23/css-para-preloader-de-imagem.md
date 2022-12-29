---
id: 37
title: CSS para preloader de imagem
date: 2006-04-23T22:33:02-03:00
type: Post
ogImage: /images/og-images/37.png
layout: post
guid: https://leonardofaria.net/2006/04/23/css-para-preloader-de-imagem/
permalink: /2006/04/23/css-para-preloader-de-imagem/
dsq_thread_id:
  - "1009870965"
categories:
  - css
tags:
  - css
---
[Pescado](http://specere.net/?webtips) do [digg](http://www.digg.com):

```css
#preloadedImages {
  width: 0px;
  height: 0px;
  display: inline;
  background-image: url(path/to/image1.png);
  background-image: url(path/to/image2.png);
  background-image: url(path/to/image3.png);
  background-image: url(path/to/image4.png);
  background-image: url();
}
```

Depois de configurar o CSS, basta chamar uma div, com seu respectivo id.
