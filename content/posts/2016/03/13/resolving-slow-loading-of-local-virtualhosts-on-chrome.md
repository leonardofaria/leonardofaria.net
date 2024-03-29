---
id: 1718
title: Resolving slow loading of local virtualhosts on Chrome
publishedAt: 2016-03-13T14:38:56-03:00
type: Post
ogImage: /images/og-images/1718.png

permalink: /2016/03/13/resolving-slow-loading-of-local-virtualhosts-on-chrome/
dsq_thread_id:
  - "5345234862"
categories:
  - software
  - mac
tags:
  - software
  - mac
---
I've in my development mac different virtualhosts, using .local or .wp TLDs. Opening these address in Chrome are slow – about 3 seconds &#8216;resolving address'. This situation doesn't happen in Safari or Firefox. Here is my typical `/etc/hosts` configuration:  
<span className="hidden">more</span>

```
127.0.0.1 localhost
::1 localhost
255.255.255.255 broadcasthost
fe80::1%lo0 localhost

127.0.0.1 website1.local
127.0.0.1 website2.wp
```

Looking for [answers](http://stackoverflow.com/questions/10064581/how-can-i-eliminate-slow-resolving-loading-of-localhost-virtualhost-a-2-3-secon), I changed my setup for:

```
127.0.0.1 localhost website1.local website2.wp
::1 localhost website1.local website2.wp
255.255.255.255 broadcasthost
fe80::1%lo0 localhost
```

It works like a charm.
