---
id: 81
title: Fast Flickr
date: 2006-06-24T23:25:32-03:00
author: Leonardo Faria
ogImage: /images/og-images/81.png
layout: post
guid: https://leonardofaria.net/2006/06/24/fast-flickr/
permalink: /2006/06/24/fast-flickr/
runphp:
  - "1"
dsq_thread_id:
  - "1093335874"
categories:
  - desenvolvimento
  - php
  - wordpress
tags:
  - download
  - flickr
  - php
---
Fast Flickr is my first WordPress plugin. This plugin shows a set of Flickr easily, with [Lightbox 2](http://www.huddletogether.com/projects/lightbox2/) suport.

**USAGE**:  
1) <a href="http://www.leonardofaria.net/pub/fastflickr-1.0.zip">Download</a> the plugin.  
2) Copy Fast Flickr folder into `wp-content/plugins`.  
3) Active in Plugins Panel  
4) In sidebar.php, paste:

```php
<?php fastflickr("Set id", "Show title of set: false or true","Show description: false or true"); ?>
```

**EXAMPLE:**

```php
<?php fastflickr("72157594168783620", 1, 1); ?>
```

**FAST FLICKR IN ACTION (WITHOUT TITLE, DESCRIPTION AND CSS):**

There are 3 CSS classes in this code: .f\_title (title of set), .f\_description (description of set) and .f_picture (used in images). An example of style:

```css
.f_title {font-weight: bold; display: block}
.f_description {color: red; display: block}
.f_picture {border: 1px solid #999999; padding:4px; margin: 3px;}
```

Note: to run Fast Flickr in any post, you need of [PHP Exec Plugin](http://priyadi.net/archives/2005/03/02/wordpress-php-exec-plugin/), that allows PHP executations. For default, WordPress deny PHP Scripts in posts and pages.
