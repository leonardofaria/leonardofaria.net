---
id: 634
title: URL curta no WordPress
date: 2009-04-26T14:46:56-03:00
author: Leonardo Faria
ogImage: /images/og-images/634.png
layout: post
guid: https://leonardofaria.net/?p=634
permalink: /2009/04/26/url-curta-no-wordpress/
dsq_thread_id:
  - "1000136884"
categories:
  - php
  - wordpress
tags:
  - php
  - wordpress
---
As URLs curtas possuem muitas utilizações por aí, principalmente em microblogs como o Twitter.

```php
<?php

function getShortUrl($url) {
  $tinyurl = file_get_contents("http://tinyurl.com/api-create.php?url=".$url);
  return $tinyurl;
}

?>
```

Use a função acima no arquivo functions.php do seu tema. Para exibir o link, crie a seguinte linha no arquivo do post – single.php:

```php
<?php echo '<a href="'.getShortUrl(get_permalink($post->ID)).'">short url'; ?>
```
