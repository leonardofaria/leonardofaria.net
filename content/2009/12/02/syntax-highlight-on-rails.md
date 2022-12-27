---
id: 903
title: Syntax Highlight on Rails
date: 2009-12-02T20:52:12-02:00
type: Post
ogImage: /images/og-images/903.png
layout: post
guid: https://leonardofaria.net/?p=903
permalink: /2009/12/02/syntax-highlight-on-rails/
dsq_thread_id:
  - "1089931967"
categories:
  - portfolio
  - rubyonrails
tags:
  - portfolio
  - rubyonrails
---
Quer fazer um syntax highlight igual ao do codestacker abaixo, _a la Textmate_? É fácil:



Faça o download da biblioteca de expressões regulares [Oniguruma](http://www.geocities.jp/kosako3/oniguruma/). A versão mais recente é a [5.9.1](http://www.geocities.jp/kosako3/oniguruma/archive/onig-5.9.1.tar.gz). Compile-a:

```shell
./configure && make && make install
```

Após isso instale as gems Oniguruma, Textpow e Ultraviolet e instale o plugin [tm\_syntax\_highlighting](http://github.com/arya/tm_syntax_highlighting) em seu projeto.

Em suas views, utilize:

```ruby
code(some_ruby_code, :theme => "twilight", :lang => "ruby", :line_numbers => true)
```
