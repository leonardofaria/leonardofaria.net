---
id: 389
title: Extendendo a classe Tween do Flash
date: 2008-06-10T17:58:21-03:00
author: Leonardo Faria
ogImage: /images/og-images/389.png
layout: post
guid: https://leonardofaria.net/?p=389
permalink: /2008/06/10/extendendo-a-classe-tween-do-flash/
dsq_thread_id:
  - "1000136265"
categories:
  - flash
tags:
  - flash
---
A cada trabalho que volto ao Actionscript, me deparo com soluções interessantíssimas para problemas comuns. Esse post falar sobre classes de transição

### Color Tween

A classe Tween é responsável por fazer transições de objetos do Flash. Entre essas transições estão mudanças nos eixos, na largura, na altura e na opacidade de objetos, não existindo transições entre cores. Existem alguns protótipos para isso, mas a melhor solução que encontrei foi usar a classe [TweenColor](http://www.flashextension.net/product.php?productid=16238&cat=75), que extende a classe padrão encontrada no Flash.

Para usá-la, basta copiar o pacote, instalar (via Extension Manager) e começar a usar. Um rápido exemplo funcional:

```actionscript
import mx.transitions.TweenRGB;

var container:MovieClip = this.createEmptyMovieClip("container", this.getNextHighestDepth());  
var label:TextField = container.createTextField("label", 1, 0, 0, 150, 20);  
label.text = "Hello World";

container.onRollOver = function():Void {  
  var mytween = new TweenRGB(this, "", Regular.easeInOut, 0x000000, 0xff0000, 3, true);  
}  
```

### Tween Extended

A classe [Tween Extended](http://www.sqcircle.com/downloads/) multiplica as possibilidades de se usar a classe Tween padrão. Como a Color Tween, ela também permite a transição entre cores e além disso, possibilita passar de uma só vez, múltiplos parâmetros (\_x, \_y, \_alpha, \_width, \_height, \_xscale, \_yscale e \_rotation) para um Tween de um objeto.

O [Leonardo França](http://www.leonardofranca.com.br/index.php/2006/01/06/usando-a-classe-tweenextended/) e o [Erick Sousa](http://www.ericksouza.com/) já explicaram o funcionamento dessa classe.

### Outras classes de transição

Antes de surgir a classe Tween (Flash 2004 – Actionscript 2), surgiram outras classes interessantes para transição. Uma é a MC Tween 2, do brasileiro Zeh Fernando e a outra é lazo. Para ambas, basta copiar e instalar a extensão e começar a usar.
