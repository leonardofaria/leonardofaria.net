---
id: 2229
title: Creating HAR files with Lighthouse
publishedAt: 2020-11-30 04:00:00
type: Post
ogImage: /images/og-images/2229.png
permalink: /2020/11/30/creating-har-files-with-lighthouse
description: HAR (HTTP Archive) is a JSON file containing all information about a browser’s interactions with a page. This file is often used for performance analysis. Earlier this year, I shared what kind of information we can get from  and today we will automate the HAR creation.
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

HAR (HTTP Archive) is a JSON file containing all information about a browser’s interactions with a page. This file is often used for performance analysis. [Earlier this year](/2020/06/07/using-har-files-to-analyze-performance-over-time/), I shared what kind of information we can get from  and today we will automate the HAR creation.

![HAR Viewer](/wp-content/uploads/2020/06/har-viewer.jpg)

There are different ways to automate the HAR creation: [puppeteer-har](https://www.npmjs.com/package/puppeteer-har) is a NPM package you can add in your tooling or if you are not from the JavaScript world you can use [Selenium](https://octopus.com/blog/selenium/13-capturing-har-files/capturing-har-files). 

I was using puppeteer-har for a few months but then I noticed that the HAR was missing a few files in specific scenarios (ex. a React app with Loadable and React Router). For this reason, I decided to look for analternative and this is how I found the [chrome-har-capturer](https://www.npmjs.com/package/chrome-har-capturer) package.

<div className="my-10 p-4 border border-gray-6 rounded-md bg-white">
<strong>Hi! This post is part of a Lighthouse post series. Also, check out:</strong>

<ul>
<li><a href="/2020/11/30/the-undocumented-lighthouse-guide#quick-lighthouse-intro">Quick Lighthouse intro</a></li>
<li><a href="/2020/11/30/the-undocumented-lighthouse-guide#the-lighthouse-node-package">The Lighthouse Node package</a></li>
<li><a href="/2020/11/30/getting-asset-transferred-information-with-lighthouse/">Getting asset transferred information with Lighthouse</a></li>
<li><a href="/2020/11/30/generating-screenshots-with-lighthouse/">Generating screenshots with Lighthouse</a></li>
<li><a href="/2020/11/30/getting-web-vitals-information-with-lighthouse/">Getting Web Vitals information with Lighthouse</a></li>
<li><a href="/2020/11/30/my-experience-using-lighthouse-in-the-real-world/">My experience using Lighthouse in the real world</a></li>
</ul>
</div>

This package works like a charm; it creates a HAR file following the [HAR 1.2 spec](http://www.softwareishard.com/blog/har-12-spec/) and all that I need to provide is an array of raw events that comes from the [Chrome Debugging Protocol](https://chromedevtools.github.io/devtools-protocol/). Who provides the raw events? Lighthouse!

Let's take a look at the implementation (from my [lighthouse-examples GitHub repository](https://github.com/leonardofaria/lighthouse-examples)):

```js showLineNumbers
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { fromLog } = require('chrome-har-capturer');
const { writeFileSync } = require('fs');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {port: chrome.port, emulatedFormFactor: 'desktop'};
  const url = 'https://leonardofaria.net'
  const { artifacts: { devtoolsLogs: { defaultPass } } } = await lighthouse(url, options);

  const har = await fromLog(url, defaultPass);
  writeFileSync('page.har', JSON.stringify(har));

  await chrome.kill();
})();
```

In my other posts, I shared how to use the `lighthouse()` function to get all kinds of information: from web vitals metrics to page screenshots. What I didn't mention was the function also keeps the artifacts created by the DevTools protocols. This is what we are storing in line 10 and this is the array of raw events that chrome-har-capturer needs to generate a HAR file.

In line 12, we use the `fromLog` function to build the HAR object, which we store in the file system in the following line. If you are curious about how the `fromLog` function works, I would recommend reading the package source-code, in special [one of their tests](https://github.com/cyrus-and/chrome-har-capturer/blob/master/test/offline.js).

Next, the generated HAR is stored in `page.har`. and we can use it in the [HAR Viewer](http://www.softwareishard.com/har/viewer/) for performance analysis. 

## Why do we need this? 

We can extract a lot of valuable information from HAR files, such as:

- Protocols being used in the page (http 1.1, http 2, h3-29);
- Compressed/uncompressed asset sizes;
- Request timing information (ex.: waiting and downloading times);

With this information, we can identify bottlenecks (ex.what is the slowest request of that URL), find low-hanging fruit (ex.asset compression is one flag away in your build system tool) and prioritize tasks in order to improve performance on our pages.

Can you think of different uses? Let me know in the comments!
