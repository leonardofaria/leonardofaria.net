---
id: 2230
title: My experience using Lighthouse in the real world
date: 2020-11-30 05:00:00
author: Leonardo Faria
ogImage: /images/og-images/2230.png
permalink: /2020/11/30/my-experience-using-lighthouse-in-the-real-world
categories:
  - javascript
  - lighthouse
tags:
  - javascript
  - lighthouse
---

Lighthouse has been part of my daily work for the last few months and I shared some snippets in the last posts. Time to share how I am using Lighthouse in a product used by millions of people and what are my findings.

![Lighthouse photo by Robert Wiedemann](/wp-content/uploads/2020/11/lighthouse.jpg)

_Disclaimers_: 1. This content may be reviewed in the future as I learn more about web performance and Lighthouse; 2. Do not take this post as professional/legal advice; 3. Do not take my comments on tech X or Y as attacks to tech X or Y.

<div class="my-10 p-4 border border-gray-6 rounded-md bg-white">
<strong>Hi, this post is part of a Lighthouse post series. Also, check it out:</strong>

<ul>
<li><a href="/2020/11/30/the-undocumented-lighthouse-guide#quick-lighthouse-intro">Quick Lighthouse intro</a></li>
<li><a href="/2020/11/30/the-undocumented-lighthouse-guide#the-lighthouse-node-package">The Lighthouse Node package</a></li>
<li><a href="/2020/11/30/getting-asset-transferred-information-with-lighthouse/">Getting asset transferred information with Lighthouse</a></li>
<li><a href="/2020/11/30/generating-screenshots-with-lighthouse/">Generating screenshots with Lighthouse</a></li>
<li><a href="/2020/11/30/getting-web-vitals-information-with-lighthouse/">Getting Web Vitals information with Lighthouse</a></li>
<li><a href="/2020/11/30/creating-har-files-with-lighthouse/">Generating HAR files with Lighthouse</a></li>
</ul>
</div>

## Use existing tools before creating your own

It sounds obvious but it doesn't hurt to repeat the message: do not reinvent the wheel (until you need). You can start [monitoring Core Web Vitals for free](https://support.google.com/webmasters/answer/9205520) in the Google Search Console. 

If this is not enough, or if you have a complex web app behind authentication or any other scenarios you can start by using a tool listed in the [Lighthouse integrations docs](https://github.com/GoogleChrome/lighthouse#lighthouse-integrations-in-web-perf-services). From that list, I can only speak of [Calibre](https://calibreapp.com) - for the record, I am not affiliated to them.

Using Calibre, you can schedule Lighthouse tests, create performance budgets, see pretty charts and learn what performance looks like in your product. The relevant information is easy to find and their product has a very polished UI, however, at a certain point, you may want more and that means "custom development".

## The tooling in place

We have decided to create our own tool at [Thinkific](https://thinkific.com) to run Lighthouse tests to be aligned with the monitoring stack and give us more flexibility. Here are some details:

- We have tests every hour;
- We run tests in our Critical User Journeys: these are important routes of our application used in the different use cases;
- The report files (JSON, HTML), along with the page screenshot and HAR file are stored in S3 for future reference;
- The numbers (Lighthouse scores, assets file sizes, Web Vitals) are sent to a relational database (Postgres) and [Promotheus](https://prometheus.io/), a monitoring system and time series database. Postgres empowers the creation of custom reports as we need and Prometheus is used with Grafana to create custom dashboards.

Comparing to open-source solutions, our tool is similar to [lighthouse-monitor](https://github.com/Verivox/lighthouse-monitor/).

### Understanding variability

Running Lighthouse in our tool, we noticed the performance score changed due to inherent variability in web and network technologies, even when there hasn't been a code change.

Network, client hardware and web server variabilities are some examples of how the score can trick you. [Lighthouse documentation](https://github.com/GoogleChrome/lighthouse/blob/master/docs/variability.md) clarifies all the different sources of variability and how to deal with them.

In our case, we run Lighthouse 5 times per URL, calculation a median score. We also store the min/max values in case we want to investigate one-off results.

## Working with Lighthouse results

What do I do when I have Lighthouse reports from 9 different URLs?

![Detective wall, from the Isle of Dogs movie](/wp-content/uploads/2020/11/detective-wall.jpg)

FCP, LCP, TTI, TBT, CLS: my work in the last few months is analyzing data and connecting dots. Some times I find low hanging fruits that improve one metric here and there, some times I go down in the rabbit hole.

With data coming from everywhere, I am following the scientific method to focus on what matters:

1. Make an observation.
2. Ask a question.
3. Form a hypothesis or testable explanation.
3. Make a prediction based on the hypothesis.
4. Test the prediction.
5. Iterate: use the results to make new hypotheses or predictions.

When it comes to performance, there is no silver bullet. Sometimes images are culprit of bad performance scores, sometimes it is an architecture problem. The goal of my post is not blaming X or Y but let me share a few thoughts on these two topics: 

### Image optimization

Images impact page load time since bigger images will take longer to be downloaded and as a result, it will impact different Lighthouse metrics - usually CLS, LCP. 

Recently, [Google worked with Next.js](https://github.com/vercel/next.js/discussions/16832) to create an [Image component](https://nextjs.org/docs/basic-features/image-optimization) that delivers optimized images. The framework supports image conversion from via Imgix, Cloudinary, Akamai and as expected, Vercel.

I predict that the conversion on demand, by using third-party services as mentioned above or by using serverless solutions will become more and more popular. Starting next year, Google [will include Web Vitals metrics](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) in the page ranking algorithms.
### Old architectures didn't age well

Old SPA architectures don't perform well these days and Lighthouse captures that.

Here is one example: back in the day, people (including myself) used to build their JS code into a single file. We wanted to avoid multiple files because HTTP/1.1 didn't support too many concurrent requests, which was improved in HTTP/2. Today, unused JS will be caught in the Lighthouse tests. 

![Code splitting cartoon by Crystallize](/wp-content/uploads/2020/11/codesplitting.png)

Code Splitting is part of any modern JS tech stack using webpack and, in React, it can be combined with [Loadable Components](https://loadable-components.com/docs/getting-started/) and [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy). Giving the user only what their need is key. 

In the back end, [GraphQL](https://graphql.org/) showed us that we can request data as we go. I know, this can also be done with REST as long we know the know what is in the UI but the whole point here is: deliver only the data that users need.

## Conclusions

I hope this series added some light (no pun intended) in your front-end performance skills. Lighthouse is so powerful that people out there are creating full SaaS products to make the web better.

Are you using Lighthouse or planning to start using? Let me know in the comments!
