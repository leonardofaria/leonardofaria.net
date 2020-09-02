---
id: 2222
title: 3 privacy-focused open-source Google Analytics alternatives for your next project
date: 2020-09-01
author: Leonardo Faria
ogImage: /images/og-images/2222.png
permalink: /2020/09/01/three-privacy-focused-open-source-google-analytics-alternatives
categories:
  - hugo
tags:
  - hugo
---

As a content creator, I like to know page analytics of my website. Overall, I am curious to learn how many people are reading my content, where they came from (referrer and countries) and what are the most popular pages.

20 years ago, tools like [Webalizer](http://www.webalizer.org/) were all that we could count on. This tool parses the Apache logs and create static pages with the processed data. Another way to get page analytics would be inserting an image - often invisible - in your website. By using the request headers sent to the server, people could count visitors and get a little bit more information such as origin IP, browser, operational system. The technique is old but services like [statcounter](https://statcounter.com/) are still around providing this functionality.

![Webalizer screenshot](/wp-content/uploads/2020/09/webalizer.jpg)

In 2005 Google launched Google Analytics after acquiring [Urchin](https://en.wikipedia.org/wiki/Urchin_(software)), a company which also analyzed server logs. Its presence has been growing since the early days and it is far from any competitor. There are a few reasons [why you should stop using Google Analytics on your website](https://plausible.io/blog/remove-google-analytics): 

1) It is owned by Google: Google uses Analytics in their benefit.
2) It affects site's speed, by adding 45KB in page requests.
3) It is too invasive, collecting lots of personal data that you don't need.
4) It is blocked by many plugins and browsers, creating inaccurate data.

With all of this in mind, I want to share a few open-source alternatives I have been looking at in the last few months.

## Fathom

[Fathom](https://usefathom.com/) ([demo](https://app.usefathom.com/share/sqqvo/chimp+essentials)) is a light golang app to collect analytics. They have different paid plans, starting at $14/month and a lite version that you can install in your server or Heroku for free. 

![Fathom screenshot](/wp-content/uploads/2020/09/fathom.jpg)

The lite version uses cookies and it gives you information about unique visitors, page views, average time on site, bounce rate, top pages and top referrers. Fathom stores data in SQLite, MySQL or Postgresql databases.

## umami

[umami](https://umami.is/) ([demo](https://app.umami.is/share/ISgW2qz8/flightphp.com)) is a solution created with Next.js. I did like how easy it is to deploy it - in my case, I am using Vercel. 

umami shows the same data available in the lite version of Fathom _plus_ information about countries, browsers, operational system and device data.

![Umami screenshot](/wp-content/uploads/2020/09/umami.jpg)

## Plausible

I think I first heard about [Plausible](https://plausible.io/) ([demo](https://plausible.io/plausible.io)) in the "[De-Google-ing your website analytics](https://changelog.com/podcast/396)" Changelog podcast. From a product perspective, it is nice to see a [public roadmap](https://plausible.io/roadmap) out in the wild so customers can learn what is coming next.

Their plans start at $6/month and go up according to your page views - like Fathom. They have an _alpha_ self-hosted option (I didn't have a chance to test it)

![Plausible screenshot](/wp-content/uploads/2020/09/plausible.jpg)

## Conclusion

There are alternatives out there and you don't need to worry about privacy or big corp looking at your users with these options. Their setup time is very similar among themselves and once you have it done, you can add multiple sites, as you do with Google Analytics.

I don't have a favourite here. Feature-wise, umami gives all the basic information you may be curious about it for free and it is very easy to setup in services like Vercel or Netlify. Both Fathom and Plausible offer free trials so you can easily test their solutions before deciding it.

_Do you know another minimalist, open-source alternative to Google Analytics? Let me know in the comments._
