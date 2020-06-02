---
id: 58
title: O problema do Flash vs IE
date: 2006-06-11T17:47:21-03:00
author: Leonardo Faria
ogImage: /images/og-images/58.png
layout: post
guid: https://leonardofaria.net/2006/06/11/o-problema-do-flash-vs-ie/
permalink: /2006/06/11/o-problema-do-flash-vs-ie/
dsq_thread_id:
  - "1028447525"
categories:
  - browser
  - flash
tags:
  - browser
  - flash
---
Nos últimos tempos, a Microsoft lançou um patch, para o IE, que bloqueava a execução de Flash em documentos da Web. A Adobe lançou um patch, para corrigir o patch do IE mas ainda hoje vejo gente em fóruns, listas e orkut reclamando do problema.

A solução é mais simples do que se pensa e se chama [SWFObject](http://blog.deconcept.com/swfobject/).

Além de corrigir esse tormento da inserção de Flash para o IE, o SWFObject permite a inserção de objetos Flash XHTML válida, além de contar com um recurso que &#8216;filtra' a versão do plugin. Se a versão encontrada for inferior do que a desejada, o upgrade do plugin é sugerido, ou feito automaticamente.

Ah, o [Lucas Ferreira](http://www.lucasferreira.com/) também tem outra solução para esse problema: seu [próprio Flash Tag Object](http://www.lucasferreira.com/flashtag/).
