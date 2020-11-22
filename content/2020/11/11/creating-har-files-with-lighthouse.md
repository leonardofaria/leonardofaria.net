---
id: 2229
title: Creating HAR files with Lighthouse
date: 2020-11-11 04:00:00
author: Leonardo Faria
permalink: /2020/11/11/creating-har-files-with-lighthouse
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

HAR (HTTP Archive) is a JSON file containing all information about a browser’s interactions with a page. This file is often used for performance analysis. [Earlier this year](/2020/06/07/using-har-files-to-analyze-performance-over-time/), I shared which kind of information we can get from it and today we will automate the HAR creation.

![HAR Viewer](/wp-content/uploads/2020/06/har-viewer.jpg)

There are different ways to automate the HAR creation: [puppeteer-har](https://www.npmjs.com/package/puppeteer-har) is a NPM package you can add in your tooling or if you are not from the JavaScript world you can use [Selenium](https://octopus.com/blog/selenium/13-capturing-har-files/capturing-har-files). 

I was using puppeteer-har for a few months but then I noticed that the HAR was missing a few files in specific scenarios (ex. a React app with Loadable and React Router). For that reason I decided to look for another alternative and this is how I found the [chrome-har-capturer](https://www.npmjs.com/package/chrome-har-capturer) package.

<div class="my-10 p-4 border border-gray-6 rounded-md bg-white">
<strong>Excuse me: this post is part of a serie on Lighthouse. Check it out:</strong>

<ul>
<li><a href="#quick-lighthouse-intro">Quick Lighthouse intro</a></li>
<li><a href="#the-lighthouse-node-package">The Lighthouse Node package</a></li>
<li><a href="#">Getting Web Vitals information with Lighthouse programatically</a></li>
<li><a href="#">Generating screenshots with Lighthouse</a></li>
<li><a href="#">Generating HAR files with Lighthouse</a></li>
<li><a href="#">Working with authentication Lighthouse</a></li>
<li><a href="#">Calculating median results with Lighthouse</a></li>
</div>

This package works like a charm: it creates a HAR file following the [HAR 1.2 spec](http://www.softwareishard.com/blog/har-12-spec/) and all that I need to provide is an array of raw events that comes from the [Chrome Debugging Protocol](https://chromedevtools.github.io/devtools-protocol/). Who provides the raw events? Lighthouse!

Let's take a look at the implementation:

{{<highlight js "linenos=inline">}}
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
{{</highlight>}}

In my other posts, I shared how to use the `lighthouse()` function to get all kinds of information: from web vitals metrics to page screenshots. What I didn't mention was the function also keeps the artifacts created by the DevTools protocols. This is what we are storing in line 10 and this is the array of raw events that chrome-har-capturer needs to generate a HAR file.

In the line 12, we use the `fromLog` function to build the HAR object, which we store in the file system in the following line. If you are curious about how the `fromLog` function works, I would recommend reading the package source-code, in special [one of their tests](https://github.com/cyrus-and/chrome-har-capturer/blob/master/test/offline.js).

Next, the content of HAR file is stored in `page.har`. and we can use it in the [HAR Viewer](http://www.softwareishard.com/har/viewer/) for performance analysis. 

## Why do we need this? 

We can extract many valuable information from HAR files, such as:

- Protocols being used in the page (http 1.1, http 2, h3-29);
- Compressed/uncompressed asset sizes;
- Request timing information (ex.: waiting and downloading times);

With this information, we can identify bottlenecks (ex.: what is the slowest request of that URL), find low-hanging fruits (ex.: asset compression is one flag away in your build system tool) and prioritize work to improve performance in our pages.

Can you think of different use cases? Let me know in the comments!