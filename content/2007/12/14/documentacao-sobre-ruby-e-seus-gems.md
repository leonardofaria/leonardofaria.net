---
id: 346
title: Documentação sobre Ruby e seus gems
date: 2007-12-14T23:58:23-02:00
author: Leonardo Faria
ogImage: /images/og-images/346.png
layout: post
guid: https://leonardofaria.net/2007/12/14/documentacao-sobre-ruby-e-seus-gems/
permalink: /2007/12/14/documentacao-sobre-ruby-e-seus-gems/
dsq_thread_id:
  - "1000136873"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Uma dica que pouca gente conhece sobre documentação é o gem\_server. O comando gem\_server inicia na porta 8808 uma instância WEBrick com a listagem de todos os gems instalados na máquina e suas respectivas informações de versão e inclusive documentação. Por ali, é possível obter inclusive todas as informações sobre métodos e classes dos cincos pacotes que integram o Rails. Uma vez startado, para ver o serviço basta carregar a URI [localhost:8808](http://localhost:8808) e obter uma página como a abaixo. [Dica via [Akita](http://www.akitaonrails.com)]

Outro comando interessante é o ri. O ri mostra informações de classes, métodos e módulos do Ruby. Por exemplo, para obter informações sobre String, use ri String.

**[upgrade]** O [Ronaldo](http://logbr.reflectivesurface.com/) sugeriu o [FastRI](http://eigenclass.org/hiki/fastri), uma alternativa ao ri e que é distribuído como gem. Para instalar basta um simples &#8220;gem install fastri&#8221; e para usar, qri String.
