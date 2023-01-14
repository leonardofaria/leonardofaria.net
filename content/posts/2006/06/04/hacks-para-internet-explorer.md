---
id: 49
title: Hacks para Internet Explorer
publishedAt: 2006-06-04T14:58:35-03:00
type: Post
ogImage: /images/og-images/49.png

permalink: /2006/06/04/hacks-para-internet-explorer/
dsq_thread_id:
  - "1000136064"
categories:
  - css
tags:
  - browser
  - css
---
Escrever uma página 100% idêntica para vários browsers pode parecer impossível. Mas não é.  
Para contornar isso, hacks são usados, para tentar uma aproximação entre browsers.  
<span className="hidden">more</span>


A primeira forma de esquivar o CSS para diferentes browsers é uma instrução dentro do `<head>`:  

```html
<!--[if IE]>
<link rel="stylesheet" type="text/css" href="all-ie.css" />
<![endif]-->
```
Nesse caso, todos estilos especificados para o I(gnorant) Explorer estariam no arquivo all-ie.

Mas também é possível escrever folhas de estilos para versões distintas do browser da Microsoft, bastando especificar a versão:  

```html
<!--[if IE 5.0]>
<link rel="stylesheet" type="text/css" href="ie-5.0.css" />
<![endif]-->
```

Para IE 5  

```html
<!--[if IE 5.5]>
<link rel="stylesheet" type="text/css" href="ie-5.5.css" />
<![endif]-->
```

Para IE 5.5  

```html
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="ie-6.0.css" />
<![endif]-->
```

Para IE 6  

```html
<!--[if IE lt 6]>
<link rel="stylesheet" type="text/css" href="ie-5.0+5.5.css" />
<![endif]-->
```

O &#8220;lt 6&#8221; significa later 6, ou seja, anteriores a versão 6.  

```html
<style type="text/css">
@import("ie51.css");
</style>
```

Somente para IE for Macintosh  
Outras formas de fazer algo funcionar somente no IE:  

```css
* html #test-span { color:green; }
```

Nesse caso, #test-span será verde, somente no IE

**Mais do mesmo:**  

- [Hack-free CSS for IE](http://virtuelvis.com/archives/2004/02/css-ie-only)  
- [Explorer Exposed!](http://www.positioniseverything.net/explorer.html)  
- [Acid2](http://en.wikipedia.org/wiki/Acid2), teste do W3C para testar a renderização dos browsers  
- [CSS Hack – wiki](http://css-discuss.incutio.com/?page=CssHack)  
- [arqHP](http://groups.google.com/group/arqhp/browse_thread/thread/b5e08d9554b07d7f/d2c326fa390380f1?q=deposit%C3%B3rio+hacks&rnum=1#d2c326fa390380f1), onde tudo começou
