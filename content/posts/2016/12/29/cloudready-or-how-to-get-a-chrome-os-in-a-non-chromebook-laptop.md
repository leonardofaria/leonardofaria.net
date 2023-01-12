---
id: 1796
title: Cloudready or how to get a Chrome OS in a non-Chromebook laptop
date: 2016-12-29T16:36:55-02:00
type: Post
ogImage: /images/og-images/1796.png
layout: post
guid: https://leonardofaria.net/?p=1796
permalink: /2016/12/29/cloudready-or-how-to-get-a-chrome-os-in-a-non-chromebook-laptop/
dsq_thread_id:
  - "5420292877"
categories:
  - software
tags:
  - software
---

import YouTube from '../../../../../components/Embed/YouTube';

Few months ago I saw in The Verge a [post](http://www.theverge.com/2016/3/7/11173836/neverware-cloudready-how-to-convert-pc-into-chromebook-free) about [CloudReady](https://www.neverware.com/). CloudReady is a remake of Chromium OS ready to go in old PCs or Macs. The company behind the product sells its solutions/support to organizations interested in keeping using their hardware. It's really interesting.

<YouTube id="NAakr95sLOI" />  

I am writing this post because my wife has an old Samsung laptop and I finally found a time to give a chance to CloudReady. Her laptop was initially running Windows 7 and it was updated to Windows 10. The idea was using CloudReady in another partition and using Grub to handle the boot process like any Linux distribution.

Unfortunately, this process was more difficult that I thought. In fact CloudReady supports [dual-boot installation](https://guide.neverware.com/install-cloudready/#select-dual-boot-or-standalone) but there are few details to pay attention:

* If you are using an old computer, you probably need to convert Windows BIOS (MBR) to UEFI. I am not going to describe this once Microsoft Technet has a [detailed article](http://social.technet.microsoft.com/wiki/contents/articles/14286.converting-windows-bios-installation-to-uefi.aspx) about it.
* I initially partitioned the HDD in 1 partition for Windows and I left unlocated space for CloudReady. Windows 10 was installed in its partition without problems.
* The last step was booting CloudReady from a Flash Drive and proceding the installation according to its [documentation](https://guide.neverware.com/critical-requirements/) The dual-boot worked like a charm.

My first impression is that CloudReady is faster and smooth than Windows. In addition, there are no infinite updates, malwares and all the crappy things that we are used to seeing in Windows. It is definitely a good way to bring to life again an old computer. One bad thing that happened it that CloudReady stopped working and I needed to redo all the installation process.
