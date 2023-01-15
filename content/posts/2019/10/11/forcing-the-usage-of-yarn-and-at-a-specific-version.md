---
id: 2071
title: Forcing the usage of yarn (and at a specific version)
publishedAt: 2019-10-11T00:40:46-03:00
type: Post
ogImage: /images/og-images/2071.png

permalink: /2019/10/11/forcing-the-usage-of-yarn-and-at-a-specific-version/
categories:
  - javascript
tags:
  - javascript
---
People and organizations often have preferences for a specific package manager. At work, we decided to use Yarn due to emoji support (jk) but how to keep everybody using Yarn?&nbsp;

We can use the [preinstall hook](https://docs.npmjs.com/misc/scripts) to check if the user run `npm install`or `yarn install`. Here is one example:

```js title="package.json"
"scripts": {
  "preinstall": "node -e \"if(process.env.npm_execpath.indexOf('yarn') === -1) throw new Error('You must use Yarn to install, not NPM')\"",
}
```

<span className="hidden">more</span>

If you run `npm install`:

![Terminal](/wp-content/uploads/2019/10/npm-install.jpg)

If you want to ignore the checking (CI environment for instance), use the `--ignore-scripts` option:&nbsp;

```
npm install --ignore-scripts
```

Moreover, you can use the [engines option](https://docs.npmjs.com/files/package.json#engines) of NPM to force a specific version of Node, and/or Yarn. Here is an example:

```js title="package.json"
"engines": {
  "yarn": ">1.19.1",
  "node": ">12"
},
```

![Terminal](/wp-content/uploads/2019/10/npm-engines.jpg)
