---
id: 1995
title: Disabling autofill in Chrome
date: 2019-10-02T16:58:52-03:00
author: Leonardo Faria
ogImage: /images/og-images/1995.png
layout: post
guid: https://leonardofaria.net/?p=1995
permalink: /2019/10/02/disabling-autofill-in-chrome/
categories:
  - offtropic
---
Autofill in form elements is a very useful feature in browsers. Creating new accounts or shopping in an online store are examples of this feature saving us time.

However, the autofill feature can be a problem for SaaS products. Imagine that you want to edit the email address of one of your users. You hit edit in one screen and once you get a form with your user data Chrome will replace their email to your email. This is not a good user experience.

MDN has an article showing &#8220;How to turn off form autocompletion&#8221;. The solution is using the autocomplete attribute with an off value. This doesn't work in Chrome.

Digging in Stackoverflow and Google results, I found a [bug issued in 2015 about the topic](https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164). Here is the TL,DR (from March 2016):

<!--more-->

> First off, thanks for everyone's feedback on this. I apologize for our delay in clarifying our stance. We've been working to finalize our policy regarding Autofill and the autocomplete attribute, and we've been making changes to this over the past few months (as some of you have noticed).
>
> First and foremost, Autofill in Chrome exists to help our everyday users get through common forms (address forms, contact forms, checkout forms, etc) across the web. This has become especially important on mobile devices, where typing on virtual keyboards is both difficult and annoying. Autofill tries to make this experience better, and it's used millions of times per day by Chrome users.
>
> The tricky part here is that somewhere along the journey of the web autocomplete=off become a default for many form fields, without any real thought being given as to whether or not that was good for users. This doesn't mean there aren't very valid cases where you don't want the browser autofilling data (e.g. on CRM systems), but by and large, we see those as the minority cases. And as a result, we started ignoring autocomplete=off for Chrome Autofill data [1].
>
> We don't just ignore the autocomplete attribute, however. In the WHATWG standard, we defined a series of new autocomplete values that developers can use to better inform the browser about what a particular field is, and we encourage developers to use those types. [2]
>
> In cases where you really want to disable autofill, our suggestion at this point is to utilize the autocomplete attribute to give valid, semantic meaning to your fields. If we encounter an autocomplete attribute that we don't recognize, we won't try and fill it.
>
> As an example, if you have an address input field in your CRM tool that you don't want Chrome to Autofill, you can give it semantic meaning that makes sense relative to what you're asking for: e.g. autocomplete=&#8221;new-user-street-address&#8221;. If Chrome encounters that, it won't try and autofill the field.

I also found a [gist](https://gist.github.com/niksumeiko/360164708c3b326bd1c8) with a few solutions. Many people reported using `autocomplete="new-password"` fixes this issue but I have no success on this front. Which solved the issue for me is setting the form fields to read only and then removing the attribute once the user focus them.

```html
<input readonly="readonly" onfocus="this.removeAttribute('readonly');" type="text" value="user@email.com">
```
