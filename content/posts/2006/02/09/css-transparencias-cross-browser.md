---
id: 31
title: 'CSS: Transparências cross-browser'
publishedAt: 2006-02-09T22:18:20-02:00
type: Post
ogImage: /images/og-images/31.png
layout: post
guid: https://leonardofaria.net/2006/05/27/css-transparencias-cross-browser/
permalink: /2006/02/09/css-transparencias-cross-browser/
dsq_thread_id:
  - "1092035618"
categories:
  - css
tags:
  - css
---
Existem formas distintas para fazer efeitos de transparência, via CSS. Cada browser reconhece um atributo nas folhas de estilo. Vamos lá então:

```css
filter:alpha(opacity=25)
```

Para o flamigerado IE.

```css
-moz-opacity:.25
```

Usado no browser Mozilla

```css
opacity:.25
```

Usado no Opera

```css
-khtml-opacity:.25
```

Usado em navegadores com engine KHTML (Safari e Konqueror)

Para o Internet Explorer, os valores variam entre 0 a 100. Para os outros browsers, variam entre 0 e 1.  
**[update]** O Opera, não sei porque cargas d'água, não suporta transparência;
