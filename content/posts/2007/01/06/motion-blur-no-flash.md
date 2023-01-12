---
id: 204
title: Motion Blur no Flash
date: 2007-01-06T18:37:31-02:00
type: Post
ogImage: /images/og-images/204.png
layout: post
guid: https://leonardofaria.net/2007/01/06/motion-blur-no-flash/
permalink: /2007/01/06/motion-blur-no-flash/
dsq_thread_id:
  - "1000137473"
categories:
  - flash
tags:
  - flash
---
Um dos efeitos mais bacanas que fiz no site da [is®](http://summer07.is.ind.br) é o Motion Blur nos textos. Para gerar o efeito abaixo, montei a seguinte função (com a a consultoria do [Lucas Ferreira](http://www.lucasferreira.com)):

<center>
  <object width="550" height="100" data="/wp-content/uploads/2007/01/motionblur.swf"></object>
  <br/>
  <a href="/wp-content/uploads/2007/01/motionblur.zip">Download do FLA de exemplo</a><br />
</center>

```actionscript
import mx.effects.Tween;  
var fBlur:flash.filters.BlurFilter = new flash.filters.BlurFilter(0, 0, 2);  
fBlur.blurX = 1;  
fBlur.blurY = 55;

function blur(mcBola:MovieClip):Void {  
  mcBola.filters = new Array(fBlur);  
  mcBola.mov = new Tween(mcBola, [fBlur.blurX, fBlur.blurY], [0, 0], 400);  
  mcBola.onTweenUpdate = function(vf:Array):Void {  
    var tempFilters:Array = this.filters;  
    tempFilters[0].blurX = vf[0];  
    tempFilters[0].blurY = vf[1];  
    this.filters = tempFilters;  
  }  
  mcBola.onTweenEnd = function():Void {
    this.filters = new Array();
  }  
}

blur(mcBola);
```
