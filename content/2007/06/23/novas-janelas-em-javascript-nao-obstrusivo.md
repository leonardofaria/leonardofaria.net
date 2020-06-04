---
id: 278
title: Novas janelas em Javascript não-obstrusivo
date: 2007-06-23T00:49:44-03:00
author: Leonardo Faria
ogImage: /images/og-images/278.png
layout: post
guid: https://leonardofaria.net/2007/06/23/novas-janelas-em-javascript-nao-obstrusivo/
permalink: /2007/06/23/novas-janelas-em-javascript-nao-obstrusivo/
dsq_thread_id:
  - "5340626613"
categories:
  - javascript
  - usability
tags:
  - javascript
  - usability
---
A newsletter dessa semana do [SitePoint](http://www.sitepoint.com/) mostrou uma forma bem interessante de abrir novas janelas com javascript não-obstrusivo e validando XHTML Strict (para quem não sabe, o atributo &#8216;target' da tag &#8216;a' não passa na validação).

```html
<a href="http://example.com/" onclick="
    if (confirm('Open this link in a new window?')) {
      open('http://example.com/');
      return false;
    }
">external link</a>
```

Basicamente, emprega-se o uso de uma caixa de diálogo. Bem simples. Uma alternativa mais sofisticada é criar uma função e ativá-la através do uso de uma classe. Veja:

```html
<a href="http://example.com/" class="ext">external link</a>
<script type="text/javascript">
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.className == "ext") {
      link.onclick = clickHandler;
    }
  }

  function clickHandler() {
    if (confirm("Open this link in a new window?")) {
      open(this.href);
      return false;
    }
  }
</script>
```
