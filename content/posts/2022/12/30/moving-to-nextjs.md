---
id: 2235
title: Moving to Next.js
publishedAt: 2022-12-30T11:12:00-08:00
type: Post
ogImage: /images/og-images/2235.png
layout: post
permalink: /2022/12/30/moving-to-nextjs
description: In the last few days, I worked to move this website to Next.js. In 2020, I moved from WordPress to Hugo and would be better served with Next.js. It was a straightforward migration, and I share what was done in this post.
---

import Twitter from '../../../../../src/components/Embed/Twitter';

In the last few days, I worked to move this website to Next.js. In 2020, I moved from WordPress to Hugo and would be better served with Next.js. It was a straightforward migration, and I share what was done in this post.

## Why Hugo?

Hugo, according to themselves, is "The world's fastest framework for building websites." I feared JavaScript fatigue, and Hugo came as a fast, minimalist, easy-to-get-up-and-running solution. At the time, I open-sourced the theme to give back to the community, and it works well for small websites. In 2020 I wrote a lot of posts, and it felt good.

Fast forward to 2022, I am writing less than I wish, and I want to return to it in 2023. In 2020 I decided to write long, detailed posts (also published in freeCodeCamp), which may not work well. I can share small tips here and there, and this format doesn't fit my website well as it is. I could share these things on the bird website; however, I don't want like the new manager. I might keep sharing them there; however, I want to own my content.

## Why Next.js? 

I have been working full-time with Next.js since April (by the way, that was one of the reasons I liked Lattice from the very beginning), and it is clear to me they are one of the best ways to fight JavaScript fatigue. I see similarities between Next.js and Ruby on Rails, such as Convention Over Configuration and good Developer Experience. I know there are new kids on the block; however, I see Next.js (and Vercel) staying for a while. 

## How? 
I recently came across [Contentlayer](https://contentlayer.dev/). Contentlayer is an SDK that validates and transforms your content into type-safe JSON. This is the best of worlds: I can keep my content in markdown and use TypeScript on my website. I don't need to use GraphQL or different solutions to get what I need.

<Twitter id="1517163485439926272" />

[Delba Oliveira](https://delba.dev) has a great post series called "[Build a Developer Blog with Next.js](https://delba.dev/blog/next-blog-structured-mdx-content-with-contentlayer)". Her posts and website source code helped me understand what needed to be done here. There is also another tutorial called "[Building Better Next.js Static Sites with MDX and Contentlayer](https://dawchihliou.github.io/articles/build-better-nextjs-static-sites-with-mdx-and-contentlayer)" that helped me a lot.

If you come from the WordPress world, you are familiar with Posts and Pages. With Contentlayer, I [recreated these entities](https://github.com/leonardofaria/leonardofaria.net/blob/master/contentlayer.config.ts) with the attributes that I needed (permalink, slug, excerpt, etc.), while keeping the same URLs that I used in WordPress and Hugo. I also kept the tags pages in place.

Here is the [PR of the migration](https://github.com/leonardofaria/leonardofaria.net/pull/128), in case you like big PRs. I organized the commits into different types:

- Add Next.js (aka initial commit)
- Rename static → public (Hugo stores static content in a `static` folder and Next.js in a `public` one)
- Remove files related to hosting and Hugo theme (old Hugo and Netlify files)
- Adjust content to Next.js (update some metadata, fix HTML/Markdown syntax)
- Port website from Hugo to Next.js (here is where the sausage is made)

Some work is left, like fixing the RSS feed and things I'd like to add, such as search and design changes. I'll be doing this here and there, and my primary intention was to move stacks to unlock the future versions of this website.

## What is next? 

I want to explore other format content formats, something as Tumblr: video, image, quotes, and links. I'll adjust the design/code of this website to keep the almost 250 posts I have published since 2005 while adding a new session for this microblogging content. 
