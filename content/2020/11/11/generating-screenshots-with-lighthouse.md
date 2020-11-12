---
id: 2227
title: Generating screenshots with Lighthouse
date: 2020-11-11 02:00:00
author: Leonardo Faria
permalink: /2020/11/11/getting-screenshots-with-lighthouse
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

Lighthouse captures the rendering timeline of a page in 10 images. Do you need to store them? Here is how.

![Lighthouse screenshots](/wp-content/uploads/2020/11/lighthouse-screenshots.jpg)

The filmstrip reveals how a page is rendered in the browser and it gives us a glance of what is slow. For example, blank screenshots in the beginning is a sign that the [First Contentful Paint](https://web.dev/fcp/) is too slow. 

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

In this post we will find where these images are stored and how to store them in the file system. Here is the script: 

{{<highlight js "linenos=inline">}}
const { writeFileSync } = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {port: chrome.port};
  const { lhr: { audits } } = await lighthouse('https://leonardofaria.net', options);

  audits['screenshot-thumbnails'].details.items
    .forEach(({ timing, data }) => {
      debugger;
      const screenshot = data.split(';base64,').pop();
      const screenshotFile = `screenshot-${timing}ms.jpg`;
      writeFileSync(screenshotFile, screenshot, { encoding: 'base64' });
    });

  const finalScreenshotFile = `screenshot-final.jpg`;
  const finalScreenshot = audits['final-screenshot'].details.data.split(';base64,').pop();
  writeFileSync(finalScreenshotFile, finalScreenshot, { encoding: 'base64' });

  await chrome.kill();
})();
{{</highlight>}}

Let's dig in the magic. Starting in line 10 we loop in the screenshot-thumbnails audit the images captured by Lighthouse. Notice that images are encoded in the [Base64 format](https://en.wikipedia.org/wiki/Base64) and along with their content, Lighthouse also stores when they happen. 

The script will create 11 image files as shown above.

![Screenshots created by Lighthouse](/wp-content/uploads/2020/11/lighthouse-screenshots-finder.jpg)

### Desktop dimensions

By default, the device emulated in Lighthouse is a Moto G4, with a 5.5 inches screen (1920 x 1080). We can tweak that and emulate a Desktop by setting the `emulatedFormFactor` to `desktop`. The options variable will look like: 

```js
const options = {port: chrome.port, emulatedFormFactor: 'desktop'};
```

## Why do we need this? 

This script is useful to follow closely what is being rendered in a page or web app. In my particular case, I am storing only the final screenshot for future reference (ex. is this the right page?).

Can you think of different use cases? Let me know in the comments!