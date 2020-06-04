---
id: 130
title: Pseudo-seletores são legais
date: 2006-10-28T01:52:29-03:00
author: Leonardo Faria
ogImage: /images/og-images/130.png
layout: post
guid: https://leonardofaria.net/2006/10/28/pseudo-seletores-sao-legais/
permalink: /2006/10/28/pseudo-seletores-sao-legais/
dsq_thread_id:
  - "1082172729"
categories:
  - css
tags:
  - css
---
Todo mundo lembra do pseudo-seletor :hover, quando quer fazer um simples efeito rollover em um link. Well, o que pouco sabe é que existe outros dois seletores muito bacanas: o :after e o :before.

Veja o exemplos:

```css
input:before { content:"&nbsp;";}
a:before { content:">";}
a:after { content: " (link externo) "; }
a:after { content: " (" attr(href) ")";  }
```

O primeiro exemplo coloca um espaço (entidade &nbsp;) antes do conteúdo do botão. O segundo exemplo, coloca um marcador para cada link. Já o terceiro exemplo adiciona o texto &#8220;link externo&#8221; a todo link da página. Bem, e a última linha? Note o uso do attr(href). O que ele faz é simplesmente retornar o valor href do tag a. Ao invés do attr(href), você também pode usar outros atributos. Veja esse exemplo:

```css
img:before { content: "Descrição da imagem: " attr(alt) }
```

Toda imagem será antecidida de: Descrição da imagem: (valor do atributo da imagem)
