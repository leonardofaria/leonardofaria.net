---
id: 1693
title: Shell script for audio recording
date: 2016-01-26T18:13:43-02:00
author: Leonardo Faria
ogImage: /images/og-images/1693.png
layout: post
guid: https://leonardofaria.net/?p=1693
permalink: /2016/01/26/shell-script-for-audio-recording/
dsq_thread_id:
  - "5345235410"
categories:
  - software
  - linux
tags:
  - software
  - linux
---
_[Esse artigo está disponível em português.](https://leonardofaria.net/2016/01/29/shell-script-para-gravar-audio-da-web/)_

One of my favourite radio shows happens every day at 10 AM (Brasilia Timezone). I was unable to listen to it because the time zones. Then, I created the following small shell script to record the show and then I can listen to it in my free time.  
<!--more-->

```shell
#!/bin/bash

# paths
TIMELIMIT="timelimit"
LIVESTREAMER="livestreamer"
FFMPEG="ffmpeg"

# parameters
IN=$1
OUT=$2
TIME=$3
if [[ -z $TIME ]]; then TIME="3600"; fi

if [ $# -lt 1 ]; then
	echo -n "Usage: $0 url output [time]"
	exit 0
fi

if [[ -z `which $TIMELIMIT` ]]; then
	echo "timelimit not found" 1>&2
	exit 1;
fi

if [[ -z `which $LIVESTREAMER` ]]; then
	echo "livestreamer not found" 1>&2
	exit 1;
fi

if [[ -z `which $FFMPEG` ]]; then
	echo "ffmpeg not found" 1>&2
	exit 1;
fi

echo "START STREAMING"
$TIMELIMIT -t $TIME $LIVESTREAMER $IN best -o $OUT.ts

echo "CONVERTING FILE TO MP3"
ffmpeg -y -i $OUT.ts -c:a libmp3lame -b:a 64k -joint_stereo 0 $OUT

rm $OUT.ts
echo "DONE"
```

The [script](https://github.com/leonardofaria/audio-recorder) uses timelimit, ffmpeg and livestreamer. You can create a cron task to run the script according to necessity. For example:

```
00 10 * * 1-5 /Users/leonardo/Sites/audio-recorder/98.sh "hlsvariant://http://stream.izap.com.br/live/98fm.stream/playlist.m3u8" "/Users/leonardo/Downloads/central98.mp3" 3600
```

The previous line will record the m3u8 streaming file by 1 hour (3600 seconds) Monday to Friday at 10 AM. If you are not familiar with crontab syntax, use a [Crontab Generator](http://crontab-generator.org/).

_This post is also [published in coderwall](https://coderwall.com/p/qmlkzg/shell-script-for-audio-recording)._
