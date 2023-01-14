---
id: 1710
title: Shell script para gravar áudio da Web
publishedAt: 2016-01-29T20:06:38-02:00
type: Post
ogImage: /images/og-images/1710.png

permalink: /2016/01/29/shell-script-para-gravar-audio-da-web/
dsq_thread_id:
  - "5345234804"
categories:
  - software
  - linux
tags:
  - software
  - linux
---
_[This post is also available in English.](https://leonardofaria.net/2016/01/26/shell-script-for-audio-recording/)_

Um dos meus programas de rádio favoritos é o Central 98, da [98FM](http://98live.com.br/) (de Belo Horizonte). Ele começa às 10h da manhã e devido a diferença de 6h de fuso horário eu não consigo ouví-lo ao vivo. Então, criei um shell script para gravar o programa e assim posso ouvi-lo no meu tempo livre.

<span className="hidden">more</span>

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

O [script](https://github.com/leonardofaria/audio-recorder) usa timelimit, ffmpeg and livestreamer. Você pode criar uma cron task para executar o script de acordo com a necessidade. Por examplo:

```
00 10 * * 1-5 /Users/leonardo/Sites/audio-recorder/98.sh "hlsvariant://http://stream.izap.com.br/live/98fm.stream/playlist.m3u8" "/Users/leonardo/Downloads/central98.mp3" 3600
```

A linha anterior irá gravar o streaming da url por 1 hora (3600 segundos, de segunda à sexta às 10h da manhã. Se você não conhece a sintaxe do cron, use um [Crontab Generator](http://crontab-generator.org/).

_Esse post também foi [publicado no coderwall](https://coderwall.com/p/qmlkzg/shell-script-for-audio-recording)._
