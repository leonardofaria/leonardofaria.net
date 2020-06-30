---
id: 425
title: Migrations sem timestamp
date: 2008-11-09T16:22:44-02:00
author: Leonardo Faria
ogImage: /images/og-images/425.png
layout: post
guid: https://leonardofaria.net/?p=425
permalink: /2008/11/09/migrations-sem-timestamp/
dsq_thread_id:
  - "1348231301"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
No Rails 2.0, os arquivos de migração eram gerados com o prefixo do timestamp. Exemplo: 20080614155951\_create\_users.rb. Nas versões anteriores, o prefixo era numérico. Para o Rails 2.2, será possível você mesmo configurar isso, definindo no environment.rb:


Vale a pena a leitura do [Release Notes do Rails 2.2](http://www.akitaonrails.com/2008/10/24/tradu-o-ruby-on-rails-2-2-release-notes) e, se você ainda não pegou o RC 1 do Rails, lembre-se:

```shell
gem install rails -s http://gems.rubyonrails.org -v 2.2.0
```
