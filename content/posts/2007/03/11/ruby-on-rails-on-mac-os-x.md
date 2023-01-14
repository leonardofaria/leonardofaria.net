---
id: 213
title: Ruby on Rails on Mac OS X
publishedAt: 2007-03-11T13:58:58-03:00
type: Post
ogImage: /images/og-images/213.png

permalink: /2007/03/11/ruby-on-rails-on-mac-os-x/
dsq_thread_id:
  - "1000137115"
categories:
  - mac
  - rubyonrails
tags:
  - mac
  - rubyonrails
---
[Estou de fato sumido do blog. [Mudei](https://leonardofaria.net/2006/12/30/mudanca-e-previsoes/) para [Piumhi Harbor](http://pt.wikipedia.com/wiki/piumhi) e fiquei com computador somente na primeira semana. Meu iBook teve problemas e fiquei quase um mês esperando. Enfim, computador novo, finalmente posso brincar com Ruby on Rails. Inclusive já estou começando a trabalhar em um projeto comercial com o uso desse framework.]

Enfim, estou escrevendo esse post para falar das formas de instalação do Ruby on Rails no Mac OS X. [Vale lembrar](http://weblog.rubyonrails.org/2006/8/7/ruby-on-rails-will-ship-with-os-x-10-5-leopard) que a próxima do Mac OS, Leopard, [virá com Rails já instalado](http://www.apple.com/server/macosx/leopard/more.html), mas enquanto o felino não chega, temos um trabalhinho extra.

A forma menos trabalhosa de se ter Rails no Tiger é através do [Locomotive](http://locomotive.sourceforge.net/), que é um pacote all-in-one. Instalação simplificada, basta arrastar a pasta do programa para a Applications' folder e pronto!

A forma mais disseminada é através [desse artigo](http://hivelogic.com/narrative/articles/ruby_rails_lighttpd_mysql_tiger?status=301) de Dan Benjamin. A instalação é toda feita manualmente e compila os vários itens necessários para o funcionamento do framework. Vale lembrar que para essa instalação é necessário ter o Xcode instalado na máquina. Para quem não sabe, Xcode é um ambiente completo de desenvolvimento da própria Apple. Ele sempre vem em CD ou DVD nos computadores da Apple, mas quem não tem pode [puxar os 924MB](http://developer.apple.com/tools/download/) do site de desenvolvedores da Apple.

Outra forma que vi é ter [RoR junto ao Apache](http://maczealots.com/tutorials/ruby-on-rails/).

E por último tem um pacote não tão conhecido chamado [WebServerXKit](http://www.rbsoftware.net/?page=wsxk), que reúne Apache, MySQL, PHP, PostgreSQL e&#8230; RoR!

Mais informações sobre instalações no Mac e em outros sistemas podem ser vistas no [wiki](http://wiki.rubyonrails.org/rails) do site oficial.
