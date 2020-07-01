---
id: 1450
title: 'Curiosidade Ruby do dia #3: Strings'
date: 2014-09-10T23:14:28-03:00
author: Leonardo Faria
ogImage: /images/og-images/1450.png
layout: post
guid: https://leonardofaria.net/?p=1450
permalink: /2014/09/10/curiosidade-ruby-do-dia-strings/
dsq_thread_id:
  - "3007024734"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Strings são, em qualquer linguagem, cadeias de caracteres. Em Ruby, você pode acessar o conteúdo de uma string de forma semelhante a um array, exemplo:

```ruby
message = "Hello World"
puts message[0,5] # Hello
```

É possível substituir uma palavra de dentro de uma string como se ela fosse um elemento de um array, veja:

```ruby
message = "I like cats"
puts message # I like cats
message["cats"] = "dogs"
puts message # I like dogs
```

Uma exceção será disparada caso você tente substituir algo que não existe na string:

```ruby
message = "I like cats"
message["dogs"] = "birds"
IndexError: string not matched
```

Além disso, você também pode obter o conteúdo de uma string utilizando um range, exemplo:

```ruby
message = "ABCDEFGH"
puts message # ABCDEFGH
message[0..2] = "XYZ"
puts message # XYZDEFGH
```
