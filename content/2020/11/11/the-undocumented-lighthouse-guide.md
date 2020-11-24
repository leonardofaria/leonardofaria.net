---
id: 2225
title: The undocumented Lighthouse guide
date: 2020-11-11 00:00:00
author: Leonardo Faria
permalink: /2020/11/11/the-undocumented-lighthouse-guide
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

Lighthouse is the go-to tool for improving the quality of web pages. I have been using the tool a lot at [work](https://leonardofaria.net) to identify performance optimizations and I decided to write a post series showing how to get the best of Lighthouse.

![Lighthouse photo by Robert Wiedemann](/wp-content/uploads/2020/11/lighthouse.jpg)

<div class="my-10 p-4 border border-gray-6 rounded-md bg-white">
<strong>Lighthouse post series</strong>

<ul>
<li><a href="#quick-lighthouse-intro">Quick Lighthouse intro</a></li>
<li><a href="#the-lighthouse-node-package">The Lighthouse Node package</a></li>
<li><a href="/2020/11/11/getting-asset-transfered-information-with-lighthouse/">Getting asset transfered information with Lighthouse</a></li>
<li><a href="/2020/11/11/generating-screenshots-with-lighthouse/">Generating screenshots with Lighthouse</a></li>
<li><a href="/2020/11/11/getting-web-vitals-information-with-lighthouse/">Getting Web Vitals information with Lighthouse programatically</a></li>
<li><a href="/2020/11/11/creating-har-files-with-lighthouse/">Generating HAR files with Lighthouse</a></li>
<li><a href="/2020/11/11/my-experience-using-lighthouse-in-the-real-world/">My experience using Lighthouse in the real world</a></li>
</ul>
</div>

## Quick Lighthouse intro

Lighthouse is an [open-source](https://github.com/GoogleChrome/lighthouse), automated tool for auditing the quality of web pages. The tool generates scores for performance, accessibility, progressive web apps, SEO, best practices of a specific URL and it also offers recomendations on how to improve the bad items of the audits.

![Lighthouse report for leonardofaria.net](/wp-content/uploads/2020/11/lighthouse-report-leonardofaria-net.jpg)

The recommendations offered by Lighthouse are very important to clarify what can be done to improve the quality of the page or web app. Based on their recommendations, developers can inform Product Managers and other stakeholders and from there prioritize the most important / impactful tasks.

There are different ways to run the Lighthouse audits: 

- [From a web UI](https://developers.google.com/speed/pagespeed/insights/): Run Lighthouse via PageSpeed Insights
- [In Chrome DevTools](https://developers.google.com/web/tools/lighthouse#devtools): Open the tab Audit in the Chrome DevTools - a quick way to audit pages behind authentication
- [From the command line](https://developers.google.com/web/tools/lighthouse#cli): Install the `lighthouse` CLI and start testing
- [As a Node module](https://github.com/GoogleChrome/lighthouse): Add the `lighthouse` module in Node scripts

This serie of posts will cover the usage of Lighthouse as a Node module. At my work, I have created a JavaScript tool running every hour to programatically audit 9 critical parts of our applications. The results are persisted in a Postgres database and in Prometheus (a monitoring system & time series database) so we can follow the reports over time.

## The Lighthouse Node package

The Lighthouse docs has a [basic example to start our journey](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically). Here it is: 

{{<highlight js "linenos=inline">}}
const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
  const runnerResult = await lighthouse('https://example.com', options);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  fs.writeFileSync('lhreport.html', reportHtml);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  await chrome.kill();
})();
{{</highlight>}}

The first 3 lines import required packages: `fs` for file system manipulation; `lighthouse`, the main audit package; and `chrome-launcher`, a package used for launching Chrome. Lighthouse needs to know which port has a Chrome instance running, so this audit can happen.

The line 7 surfaces a few Lighthouse options, like `logLevel` (`silent | error | info |verbose`), `output` (`json | html | csv`) and `onlyCategories` (an array filtering the tests you want to run). Their [type definitions file](https://github.com/GoogleChrome/lighthouse/blob/888bd6dc9d927a734a8e20ea8a0248baa5b425ed/typings/externs.d.ts#L82-L119) brings all the offered options.

Next, the test is stored in the `runnerResult` variable (line 8). The `runnerResult` is an object that contains an HTML report, which is persisted in the disk (lines 11-12). This result object is the main topic of my next posts. We will learn how to get relevant information of the audits.

Then, the terminal will show the tested URL and its performance score (lines 15-16) and last, the Chrome instance will be closed.

![Lighthouse report](/wp-content/uploads/2020/11/lighthouse-example-com-report.jpg)

The HTML report is slightly different from the initial report of the post: only performance is audited as it was defined in the options. 

## Conlusions and up next

This post covered what is Lighthouse, why to use it and how to use programatically. 

The snippet of this blog post can be found in the [lighthouse-examples GitHub repository](https://github.com/leonardofaria/lighthouse-examples). From here you can check it out different recipes in the [Lighthouse docs](https://github.com/GoogleChrome/lighthouse#docs--recipes) or keep reading the ones I created:

<ul>
<li><a href="/2020/11/11/getting-asset-transfered-information-with-lighthouse/">Getting asset transfered information with Lighthouse</a></li>
<li><a href="/2020/11/11/generating-screenshots-with-lighthouse/">Generating screenshots with Lighthouse</a></li>
<li><a href="/2020/11/11/getting-web-vitals-information-with-lighthouse/">Getting Web Vitals information with Lighthouse programatically</a></li>
<li><a href="/2020/11/11/creating-har-files-with-lighthouse/">Generating HAR files with Lighthouse</a></li>
<li><a href="/2020/11/11/my-experience-using-lighthouse-in-the-real-world/">My experience using Lighthouse in the real world</a></li>
</ul>

-- 

Photo by [Robert Wiedemann](https://unsplash.com/@antilumen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
