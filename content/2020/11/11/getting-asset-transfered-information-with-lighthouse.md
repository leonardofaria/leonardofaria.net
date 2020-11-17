---
id: 2226
title: Getting asset transfered information with Lighthouse
date: 2020-11-11 01:00:00
author: Leonardo Faria
permalink: /2020/11/11/getting-asset-transfered-information-with-lighthouse
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

Have you ever about thought tracking what is added in a page or web app? Didn't know how your website became a 15MB? Time to track this data!

![Chart showing assets transfered by type](/wp-content/uploads/2020/11/asset-transfered-by-type.jpg)

[Calibre](https://calibreapp.com/), one of my favourite web performance tools, shows the chart above to illustrate what is being transfered to users when they visit your page or use your web app.

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

In this post we will learn how to collect similar data using Lighthouse. Here is the recipe:

{{<highlight js "linenos=inline">}}
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {port: chrome.port};
  const runnerResult = await lighthouse('https://leonardofaria.net', options);

  const assets = {};
  runnerResult.lhr.audits['resource-summary'].details.items
    .filter(({ transferSize }) => transferSize > 0)
    .forEach(({ resourceType, transferSize }) => {
      assets[resourceType] = transferSize;
    });

  console.log(assets);
  
  await chrome.kill();
})();
{{</highlight>}}

The script is very straightforward: we import Lighthouse and Chrome Launcher (lines 1-2) and run the audit against the URL, storing its results in the `runnerResult` variable.

The `runnerResult` variable stores 3 main objects:
- `lhr`: Lighthouse Result Object contains run metadata (Lighthouse version, fetch time) and the audit results
- `artifacts`: The data used by the audit
- `report`: A JSON/HTML/CSV report

The magic starts happening in the line 10: we dig into the audits results and get the information of the resource summary audit (line 16). The output of the script is:

```js
{
  total: 400584,
  image: 321981,
  font: 36954,
  script: 27788,
  document: 7912,
  stylesheet: 5274,
  other: 675,
  'third-party': 66493
}
```

If this is not enough information and you also want to include the number of requests, you can just return the `items` object and skip all filter and loop steps: `runnerResult.lhr.audits['resource-summary'].details.items`. 

The image above shows what is inside the `resource-summary` audit:

![audit object](/wp-content/uploads/2020/11/lighthouse-audit-object.jpg)

> Curious to know how the JSON is shown in the image? This is how Firefox renders JSON files by default. I really wish other browsers implemented this by default. 

## Why do we need this? 

This script is useful to follow closely what is being sent to user. In my particular case, this data is stored daily and it is used to identify if new features added in the codebase dramatically impacted the page rendering.

Can you think of different use cases? Let me know in the comments!