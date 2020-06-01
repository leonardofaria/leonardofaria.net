---
id: 403
title: Mudanças no Rails 2.2
date: 2008-08-02T18:41:42-03:00
author: Leonardo Faria
ogImage: /images/og-images/403.png
layout: post
guid: https://leonardofaria.net/?p=403
permalink: /2008/08/02/mudancas-no-rails-22/
dsq_thread_id:
  - "1000136276"
categories:
  - rubyonrails
tags:
  - rails
---
O Rails 2.2 está chegando e ao baixar o Edge para testar o novo recurso de internacionalização (uma das grandes novidades), me deparei com a primeira diferença da versão: o arquivo de conexão com o MySQL não está mais integrado ao framework. É isso o que diz o log do development.log:

<pre class="brush: plain; title: ; notranslate" title="">!!! The bundled mysql.rb driver has been removed from Rails 2.2. Please install the mysql gem and try again: gem install mysql.
</pre>

Como o próprio log já sugere, é só instalar o gem, mas atenção: é preciso especificar o path do arquivo mysql_config, através do flag &#8220;–with-mysql-config&#8221;. Para o Mac OS X, a instalação pode ser feita com: 

<pre class="brush: plain; title: ; notranslate" title="">sudo gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config
</pre>

e no Ubuntu, com:

<pre class="brush: plain; title: ; notranslate" title="">sudo gem install mysql -- --with-mysql-config=/usr/bin/mysql_config
</pre>

Depois disso, é só correr pro abraço!
