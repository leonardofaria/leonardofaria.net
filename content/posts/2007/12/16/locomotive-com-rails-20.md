---
id: 347
title: Locomotive com Rails 2.0
date: 2007-12-16T22:06:23-02:00
type: Post
ogImage: /images/og-images/347.png
layout: post
guid: https://leonardofaria.net/2007/12/16/locomotive-com-rails-20/
permalink: /2007/12/16/locomotive-com-rails-20/
dsq_thread_id:
  - "1031892199"
categories:
  - mac
  - rubyonrails
tags:
  - mac
  - rubyonrails
---
Uma das formas simples de se ter Ruby on Rails no Mac é através do [Locomotive](http://www.locomotive.raaum.org/), um pacote all-in-one com Ruby, Rails e vários gems importantes para desenvolvimento. Como o Rails 2.0 foi lançado no último dia 7, resolvi atualizar minha máquina.

Numa janela do terminal rodei o tradicional `gem install rails -y --source http://gems.rubyonrails.org`, para atualizar a versão do Rails. Eu indiquei o repositório do site oficial, mas não é obrigatório. Logo em seguida criei minha primeira aplicação com um `rails _2.0.1_ teste`. O &#8220;\_2.0.1\_&#8221; gera o projeto com a estrutura já da nova versão.

Em seguida, adicionei a aplicação teste a lista de aplicações do Locomotive e a iniciei. A aplicação não pode ser inicializada e observando o `server.log` percebi que ainda faltava atualizar o RubyGems. Assim, rodei um `gem update --system` e pronto!
