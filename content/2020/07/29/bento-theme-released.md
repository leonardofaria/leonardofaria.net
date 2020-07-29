---
id: 2207
title: Bento theme released
date: 2020-07-29
author: Leonardo Faria
ogImage: /images/og-images/2207.png
permalink: /2020/07/29/bento-theme-released
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

TailwindCSS is my go-to option for CSS in personal projects. It is easy to use, customizable (if I have to) and I just don't need to reinvent the wheel. I did write a few CSS code in the theme (ex: styles of the articles) but even for that I use TailwindCSS [`@apply`](https://tailwindcss.com/docs/extracting-components/#extracting-css-components-with-apply) technique.

### Little big details

In the theme I used transitions for links colors, a gradient in the bottom of the page and last not least, a cool reading progress bar in the top of the page. 

<video class="w-full h-auto" controls autoplay="autoplay">
  <source src="/wp-content/uploads/2020/07/page-scroll.mp4" type="video/mp4">
</video>

One of my favourite things in this layout is the backdrop-filter in the sticky header. The  [`backdrop-filter`](https://web.dev/backdrop-filter/) CSS property is very popular in iOS and I wanted to add this touch in the theme instead of having the usual opacity.

Since I spend lots of my time on GitHub, I chose their color palette for code. 

## Performance

I built Bento with Performance in mind. I wanted to deliver code 

### Turbolinks

Copying [their README](https://github.com/turbolinks/turbolinks): _Turbolinks® makes navigating your web application faster. Get the performance benefits of a single-page application without the added complexity of a client-side JavaScript framework. Use HTML to render your views on the server side and link to pages as usual. When you follow a link, Turbolinks automatically fetches the page, swaps in its <body>, and merges its `<head>`, all without incurring the cost of a full page load._

Turbolinks is well-known in the Rails community but it can also be used outside the framework. I saw it first at [Devin Schulz](https://devinschulz.com/) Hugo website and I decided to add it in my theme. The integration is painless: add the JS file from a CDN in your page and there is no step 2. Since I don't have lots of JS interactions here, adding Turbolinks was very straightforward.

### PostCSS

CSS libraries like Bootstrap and TailwindCSS are often critized for their weight. Offering modular styles has its tradeoff however packages like [postcss-purgecss](https://www.npmjs.com/package/@fullhuman/postcss-purgecss) can avoid the big CSS files. 

The setup I used here came from the [hugopipes-tailwindcss](https://github.com/budparr/hugopipes-tailwindcss), in case you are curious.

## Future

I am quite happy with Bento right now but I may work in some features in the future, like adding search or subtle animations for images. Talking about images, adding neumorphism shadows would also be a nice touch.
