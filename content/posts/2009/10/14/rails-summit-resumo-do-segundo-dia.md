---
id: 770
title: 'Rails Summit: resumo do segundo dia'
date: 2009-10-14T13:07:05-03:00
type: Post
ogImage: /images/og-images/770.png
layout: post
guid: https://leonardofaria.net/?p=770
permalink: /2009/10/14/rails-summit-resumo-do-segundo-dia/
dsq_thread_id:
  - "1000136314"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
## [Richard Kilmer](http://twitter.com/rich_kilmer): MacRuby

A primeira palestra do segundo dia trouxe o americano Richard Kilmer que falou sobre [MacRuby](http://www.macruby.org), a união entre Ruby e Objective-C. Notas dos slides:

* Problems with RubyCocoa: It's a bridge; 2 runtimes, 2 GC, different syntax
* MacRuby 0.4: Objective-C 2 + Ruby 1.9
* Every Ruby class is an Objective-C class
* Every Ruby object is an Objective-C object
* Every Ruby method is an Objective-C method
* MacRuby é um pouco mais rápido do que Objective-C
* MacRuby utiliza recursos de processamento paralelo do OS X
* HotCocoa is an idiomatic Ruby API that simplifies the configuration and wiring together of Objetive-C/Cocoa classes – resumindo: simplifica a sintaxe e deixa algo mais &#8216;Ruby Way'

## [Nando Vieira](http://www.twitter.com/fnando): Ruby 1.9

O Nando falou do que há de novo no Ruby 1.9, tema inclusive de um [PDF](http://howtocode.com.br/o-que-mudou-no-ruby-19) de sua série [HOWTO](http://howtocode.com.br/). Sua apresentação, bem bonita, trouxe inúmeras notas sobre as mudanças da linguagem. Alguns pontos:  
<span className="hidden">more</span>

* Lançado em dezembro de 2008, prévia do Ruby 2.0. Mais rápido e com menos memória.
* m17n (multilingualization): várias formas de fazê-lo: text.encode(&#8220;codificação&#8221;); através de instruções no arquivo; File.open(&#8220;file.txt&#8221;, &#8220;r:utf-8
* regexp: utiliza a biblioteca oniguruma, uma biblioteca multi-linguagem. Essa engine é mais rápida e suporta variadas codificações.
* Nova sintaxe para hash, o que torna a sintaxe da linguagem \*ainda\* mais limpa:

```ruby
# 1.8
dict = {
	mac => "Mac OS X",
	win => "Windows"
}

# 1.9
dict = {
	mac: "Mac OS X",
	win: "Windows"
}

# no rails
render partial: "hello"
```

* Ruby 1.9 já traz nativamente rubygems, rake, rdoc, não precisando de instalação a parte.
* Migrar ou não migrar? Verifique antes se todas suas gems já foram portadas e acesse o site: [isitruby19.com](http://isitruby19.com). Projetos com testes migram para a versão 1.9 com mais segurança.
* [Changelog da versão](http://svn.ruby-lang.org/repos/ruby/tags/v1_9_1_0/NEWS) – [Slides da apresentação](http://simplesideias.com.br/rails-summit-o-que-mudou-no-ruby-1-9/)

## [Pratik Naik](http://twitter.com/lifo): Experiências recentes com Rails

Essa foi a primeira apresentação do Pratik Naik. Ele apresentou suas experiências recentes sobre Rails. Algumas notas:

* Use Ruby Enterprise Edition (também usuário pelo Twitter, 37 Signals, Shopify). É recomendado porque é mais rápido e executará seus testes mais rápidos.
* Use o plugin Tickle para execução de testes em paralelo, o que agiliza o processo.
* Focar em testes de integração e não em testes unitários.
* Segurança: [rails_xss](http://github.com/NZKoz/rails_xss), default no Rails 3.
* will_paginate não escala. Alternativa: usar Ajax para criar paginações como Twitter

## [Bruno Miranda](http://www.twitter.com/brupm) / [Jason Seifer](http://www.twitter.com/jseifer): Rails não Escala

O Bruno trouxe seu caso de uso: [Cyloop](http://br.msn.cyloop.com/) é o canal de música do MSN. O Jason só estava presente no Keynote, já que teve alguns problemas com visto. Algumas notas da apresentação:

* 13500 requests per minute
* Using Memcached
* Using Scrooge (já citado em outra apresentação)
* Using Webservices com Sinatra
* Proxies: Round Robin, HA Proxy, Nginx Fair Proxy
* Testes: testar aplicações com dados reais
* Logs para tudo, para garantir a segurança caso algo caia

## [Arthur Geek](http://twitter.com/arthurgeek): Controle de Versões com Git

Arthur falou sobre o que são sistemas de controle de versão, os tipos (centralizado e distribuído). Git, para quem não sabe, é um sistema de controle de versões criado pelo Linus Torvals (sim, o do Linux). Seu foco é em rapidez, eficiência e uso em grandes projetos.

Sua palestra foi técnica com o Git em ação. [Slides da apresentação](http://www.slideshare.net/arthurgeek/git-controle-de-verses-do-jeito-certo)

ps. A palestra na outra sala foi do genial Vinícius Teles. [Para quem não viu](http://blog.improveit.com.br/articles/2009/10/19/palestra-no-rails-summit-2009).

## [Obie Fernandez](http://twitter.com/obie): Dominando a Arte de Desenvolvimento de Aplicações

A última apresentação do Rails Summit foi com o Obie Fernandez. Pontos da apresentação:

* Software é criatividade
* Desenvolvedores não são simplesmente cientistas, são também artistas
* Qualidade artística não tem nada a ver com talento
* 10.000 horas = 10 anos de prática, tempo para se dar bem em algo
* Passe pelas specs da mesma maneira como um músico lê partituras musicais
* Lição Final: Keep Practicing
