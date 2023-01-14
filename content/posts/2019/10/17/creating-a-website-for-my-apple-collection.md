---
id: 2017
title: Creating a website for my Apple Collection
publishedAt: 2019-10-17T00:36:30-03:00
type: Post
ogImage: /images/og-images/2017.png

permalink: /2019/10/17/creating-a-website-for-my-apple-collection/
categories:
  - portfolio
  - css
  - javascript
tags:
  - portfolio
  - css
  - javascript
---

![Part of the collection](/wp-content/uploads/2019/10/collection.jpg)

A while ago I started an Apple Collection. After a few laptops and a few iDevices, I decided that I should start collecting info about my iThings. In the beginning, I created a gist containing model, serial number, how did I get the device, minimum/maximum OS, etc.

The list kept going bigger and bigger and the content started looking messy. The natural way to organize my data would be inside a SQL database, with the information distributed in columns. After organizing the information in tables, I would create a graphQL API (the one cool kids use these days) to give me the data needed to populate my UI – probably written in React, compiled with Babel and packed with webpack.

<span className="hidden">more</span>

Reading the previous paragraph aloud, you can hear many technologies and I even ignored the backend language and UI details like SASS or styled-components. It sounds a bit overwhelming when the ultimate goal is showing a list of items in a nice design.

That's being said, I thought: how can I deliver this content without:

  * An API or any backend work
  * Any JS framework/library
  * Any JS tooling (webpack, babel, etc)
  * Any CSS work

On top of these constraints, I had a few stretch goals:

  * Create a website with good accessibility
  * Create a website that works in old browsers, since I have computers running Mac OS 9.2 and iDevices running iOS 3

Challenge accepted. One index.html, a few vanilla JS files, no custom CSS. TL,DR:

  * [Final website](https://bit.ly/collection-website)
  * [Source code](https://bit.ly/collection-source)

## No API or any backend work

A while ago I saw a SaaS product called [Stein](https://steinhq.com/). You create your data inside a Google Sheets document and they give you an endpoint with your data. Their library works like handlebars and it looks perfect for my use case:

```html
<div data-stein-url="https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1" data-stein-limit="2">
  <div>
    <h1>{{title}}</h1>
    <h6>By {{author}}</h6>

    {{content}}

    Read on <a href="{{link}}">Medium</a>
  </div>
</div>
```

## No JS framework/library and tooling

Decided to avoid adding a framework or library in this project since the use case didn't need one. All JS interactions on this page are quite simple (show/hide menus, open a modal screen, handle permalinks).

Since I was not using a framework/library, I would avoid adding webpack and babel. No need to dig into presets and loaders.

PS. You can argue that I'd have chosen create-react-app or Next.js and get all these problems solved, but no.

## No CSS work

I love writing CSS, especially when I can use SASS but I decided to do not write CSS here. I had a few good reasons to avoid doing it:

  * I had no designs and despite I could do something decent-looking, I didn't want to put time and energy on it;
  * I wanted to use [Tailwind CSS](https://tailwindcss.com).

If you never heard about Tailwind CSS, please don't try to think &#8220;it is a Bootstrap option&#8221;. Here is a good short explanation, from their website:

<blockquote class="wp-block-quote">
  <p>
    Most CSS frameworks do too much.<br />&#8230;<br />Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.
  </p>
</blockquote>

This is pretty much true. A quick search gives you many web apps &#8220;rebuilt&#8221; with Tailwind CSS:

  * [Whatsapp](https://tailwindcomponents.com/component/whatsapp-web-clone)
  * [Telegram](https://tailwindcomponents.com/component/telegram-desktop-using-tailwindcss)
  * [Facebook](https://tailwindcomponents.com/component/facebook-clone)
  * [Reddit](https://tailwindcomponents.com/component/reddit-clone)
  * [Youtube](https://tailwindcomponents.com/component/youtube-clone)
  * [Slack](https://tailwindcomponents.com/component/slack-clone-1)
  * [Coinbase](https://tailwindcomponents.com/component/coinbase-clone)
  * [Github](https://tailwindcomponents.com/component/github-profile-clone)
  * [Trello](https://tailwindcomponents.com/component/trello-panel-clone)
  * [Twitter](https://codepen.io/drehimself/full/vpeVMx/)
  * [Netlify](https://www.youtube.com/watch?v=_JhTaENzfZQ)

## Create a website with good accessibility

Last month I started taking accessibility courses at [Deque University](https://dequeuniversity.com/curriculum/packages/full). Their content is great and it reminders me that **HTML is accessible by default**. By using a semantic HTML structure and testing basic things like keyboard navigation and colour contrast you eliminate several barries that move people with disabilities from your content. I am not an accessibility expert but here are a few accessibility-related things I've worked on this website:

  * Disable stylesheets: by disabling stylesheets you can ensure that your content follows a logical/structural way.
  * VoiceOver: VoiceOver is included in macOS and iOS. It is [very simple to use it](https://webaim.org/articles/voiceover/) and by using it you can have a better understanding of how people use this feature.
  * Modals: modals can be problematic. Decided to follow [Ire Aderinokun's](https://bitsofco.de/accessible-modal-dialog/) approach.
  * [axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd): the extension is an accessibility checker for WCAG 2 and Section 508 accessibility rules.

It is not perfect, there are a few things that I didn't work it, like adding a skip link to the main content. If you are curious, [here is the Pull Request with all the changes](https://github.com/leonardofaria/collection/pull/1).

## Create a website that works in old browsers

I couldn't achieve this objective since I had no control over scripts and styles. However, it doesn't seem to be impossible. A few things I noticed:

  * [Expedite](https://github.com/SteinHQ/Expedite) (Stein client) uses [fetch](https://github.com/SteinHQ/Expedite/blob/master/index.js#L51-L54), which was only [added in Safari 10](https://caniuse.com/#feat=fetch). The request to their server could be probably replaced for an XMLHttpRequest.
  * Tailwind uses flexbox in many elements. Safari only started supporting Flexbox in iOS 7. Maybe I could write a few properties to their existing elements to achieve a decent look.
  * SSL Certificates may be an issue to old browsers.

## Conclusions

Making this website was super fun. The fact I added &#8220;constraints&#8221; to it made think outside the box. Out of curiosity, I tracked my time using [Clockify](https://clockify.me) and I've worked 13h on this, between coding, creating the data, testing and writing this post.
