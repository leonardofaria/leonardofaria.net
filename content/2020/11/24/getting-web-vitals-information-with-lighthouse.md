---
id: 2228
title: Generating Web Vitals information with Lighthouse
date: 2020-11-24 03:00:00
author: Leonardo Faria
permalink: /2020/11/24/getting-web-vitals-information-with-lighthouse
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

[Earlier this year](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html) Google announced that "page experience" will impact Search ranking. A few weeks ago, they defined that the new page experience signals will roll out in May 2021. But what are these page experience signals?

![Google's Page experience chart](/wp-content/uploads/2020/11/search-page-experience.jpg)

The [page experience](https://developers.google.com/search/docs/guides/page-experience) signal measures aspects of how users perceive the experience of interacting with a web page. Offering mobile-friendly pages and serving content over HTTPS is something we have been doing for a while but soon slow sites may lose their spot in the Google page ranking algorithm. 

<div class="my-10 p-4 border border-gray-6 rounded-md bg-white">
<strong>Hi, this post is part of a Lighthouse post series. Also, check it out:</strong>

<ul>
<li><a href="/2020/11/24/the-undocumented-lighthouse-guide#quick-lighthouse-intro">Quick Lighthouse intro</a></li>
<li><a href="/2020/11/24/the-undocumented-lighthouse-guide#the-lighthouse-node-package">The Lighthouse Node package</a></li>
<li><a href="/2020/11/24/getting-asset-transferred-information-with-lighthouse/">Getting asset transferred information with Lighthouse</a></li>
<li><a href="/2020/11/24/generating-screenshots-with-lighthouse/">Generating screenshots with Lighthouse</a></li>
<li><a href="/2020/11/24/creating-har-files-with-lighthouse/">Generating HAR files with Lighthouse</a></li>
<li><a href="/2020/11/24/my-experience-using-lighthouse-in-the-real-world/">My experience using Lighthouse in the real world</a></li>
</ul>
</div>

## What are Core Web Vitals

[From Google](https://web.dev/vitals/#core-web-vitals):

> Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. **Each of the Core Web Vitals represents a distinct facet of the user experience**, is measurable in the field, and reflects the real-world experience of a critical user-centric outcome.

The three facets are:

- **Loading**: _how fast is this page?_ [Largest Contentful Paint](https://web.dev/cls/) measures perceived load speed and mark the point in the page load timeline when the page's main content has likely loaded.
- **Interactivity**: _how fast does the page react to user input?_ [First Input Delay](https://web.dev/fid/) measures responsiveness and quantifies the experience users feel when trying to first interact with the page.
- **Visual stability**: _does the page layout change while the page is loading?_ [Cumulative Layout Shift](https://web.dev/cls/) measures visual stability and quantifies the amount of unexpected layout shift of visible page content.

![Core Web Vitals](/wp-content/uploads/2020/11/core-web-vitals.png)

All Google's popular tools for developers support measurement of Core Web Vitals, including [Lighthouse](https://github.com/GoogleChrome/lighthouse), [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), [Search Console](https://search.google.com/search-console/about), [web.dev's measure tool](/measure/), the [Web Vitals Chrome extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma) and a new [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report) API. 

It is important to mention that FID can't be measured in Lighthouse and as an alternative, Google recommends measure the [Total Blocking Time (TBT)](https://web.dev/tbt/). Tools like Lighthouse that load pages in a simulated environment without a user can not measure FID, since a simulated environment has no user input.

## Using Lighthouse for Core Web Vitals measurements

The Web Vitals information is very easy to be found in the Lighthouse reports:

![Web Vitals information in Lighthouse report](/wp-content/uploads/2020/11/lighthouse-web-vitals-report.jpg)

What I want to share today is how to get Web Vitals information from the Lighthouse node package (from my [lighthouse-examples GitHub repository](https://github.com/leonardofaria/lighthouse-examples)):

{{<highlight js "linenos=inline">}}
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {port: chrome.port, emulatedFormFactor: 'desktop'};
  const { lhr: { audits } } = await lighthouse('https://leonardofaria.net', options);

  const webVitals = {
    largestContentfulPaint: audits['largest-contentful-paint'].numericValue,
    cumulativeLayoutShift: audits['cumulative-layout-shift'].numericValue,
    totalBlockingTime: audits['total-blocking-time'].numericValue,
    largestContentfulPaintElement: audits['largest-contentful-paint-element'].details.items[0].node.snippet,
    layoutShiftElements: audits['layout-shift-elements'].details.items.map(({ node }) => node.snippet).toString(),
  };

  console.log(webVitals);

  await chrome.kill();
})();
{{</highlight>}}

The information highlighted in the image above can be found in lines 9 - 14. The output of the script:

```js
{
  largestContentfulPaint: 3429.8639999999996,
  cumulativeLayoutShift: 0.0002832719606426758,
  totalBlockingTime: 0,
  largestContentfulPaintElement: '<header id="header" class="header flex w-full m-0 bg-cover bg-top-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.55))…">',
  layoutShiftElements: '<div id="nav-menu" class="absolute lg:p-6 hidden lg:block self-end text-white rounded-md bg-black sh…">,<a href="https://leonardofaria.net/" class="tracking-tighter text-4xl font-semibold flex flex-shrink-0 text-center px-…">'
}
```

For LCP, CLS and TBT, the output is not including a numeric unit, only the value. The idea here is getting a numeric value so we can manipulate data, like for example sorting or finding minimum / maximum values. If data manipulation is not the main goal, using the `displayValue` property instead of `numericValue` may work better. Example: 

```js
{
  largestContentfulPaint: '2.4 s',
  cumulativeLayoutShift: '0',
  totalBlockingTime: '30 ms',
}
```

The two last properties of the `webVitals` object return strings containing HTML node. The idea of reporting these elements is to facilitate the identification of the villans of the page being tested. 

The Largest Contentful Paint metric can be affected for one or more of the following:

- Slow server response times;
- Render-blocking JavaScript and CSS;
- Slow resource load times;
- Client-side rendering.

In the example, the largest contentful paint element is a header with a hero image. This element contains an external background image and the image is the culprit for the slow time. 

The Cumulative Layout Shift metrics can be affect for one or more of the following:

- Images without dimensions;
- Ads, embeds, iframes without dimensions;
- Dynamically injected content;
- Web fonts causing FOIT/Fout.

The page used in the example uses Google Fonts and there is a tiny layout shift when the font is loaded. The shift may be noticeable by users and it is reported in the layout shift elements property.

## Why do we need this? 

This script is useful to follow closely what is changing in the web vitals metrics of a page. In my particular case, I store in a database the LCP, TBT and CLS numeric values and I use this information in a Gauge dashboard. I am not tracking the largest contentful paint element or layout shift elements yet.

Can you think of different use cases? Let me know in the comments!