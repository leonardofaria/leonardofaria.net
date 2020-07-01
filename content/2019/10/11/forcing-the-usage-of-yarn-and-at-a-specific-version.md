---
id: 2071
title: Forcing the usage of yarn (and at a specific version)
date: 2019-10-11T00:40:46-03:00
author: Leonardo Faria
ogImage: /images/og-images/2071.png
layout: post
guid: https://leonardofaria.net/?p=2071
permalink: /2019/10/11/forcing-the-usage-of-yarn-and-at-a-specific-version/
categories:
  - javascript
tags:
  - javascript
---
People and organizations often have preferences for a specific package manager. At work, we decided to use Yarn due to emoji support (jk) but how to keep everybody using Yarn?&nbsp;

We can use the [preinstall hook](https://docs.npmjs.com/misc/scripts) to check if the user run `npm install`or `yarn install`. Here is one example:

```js
"scripts": {
    "preinstall": "node -e \"if(process.env.npm_execpath.indexOf('yarn') === -1) throw new Error('You must use Yarn to install, not NPM')\"",
```

<!--more-->

If you run `npm install`:<figure class="wp-block-image">

<img src="/wp-content/uploads/2019/10/npm-install.jpg" alt="" class="wp-image-2084" /> </figure>

If you want to ignore the checking (CI environment for instance), use the `--ignore-scripts` option:&nbsp;

`npm install --ignore-scripts`

Moreover, you can use the [engines option](https://docs.npmjs.com/files/package.json#engines) of NPM to force a specific version of Node, and/or Yarn. Here is an example:

```js
"engines": {
  "yarn": ">1.19.1",
  "node": ">12"
},
```

<figure class="wp-block-image">

<img src="/wp-content/uploads/2019/10/npm-engines.jpg" alt="" class="wp-image-2101" /> </figure>
