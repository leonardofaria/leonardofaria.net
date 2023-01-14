---
id: 672
title: hirb, dados tabulados no console
publishedAt: 2009-07-01T20:21:22-03:00
type: Post
ogImage: /images/og-images/672.png

permalink: /2009/07/01/hirb-dados-tabulados-no-console/
dsq_thread_id:
  - "1000136230"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
[**hirb**](http://tagaholic.me/hirb/) é uma gem que, num rápido resumo, tabula e organiza em árvores dados que, entre várias origens, podem vir de um array. A instalação

```shell
gem install cldwalker-hirb --source http://gems.github.com
```

A partir daí, basta chamar a biblioteca (require &#8216;hirb'), habilitá-la na execução (Hirb.enable) e correr pro abraço. Confira abaixo:

```ruby
>> require 'hirb'
=> []
>> Hirb.enable
=> nil
>> Exam.find(:all, :limit => 5)
+----+----------+----------+----------+----------+---------+----------+------+
| id | title    | exam     | creat... | updat... | user_id | categ... | hits |
+----+----------+----------+----------+----------+---------+----------+------+
| 1  | Simul... | Simul... | 2009-... | 2009-... | 1       | 1        | 152  |
| 2  | Simul... | Simul... | 2009-... | 2009-... | 1       | 1        | 143  |
| 3  | Espec... | Espec... | 2009-... | 2009-... | 1       | 1        | 1089 |
| 4  | Espec... | Espec... | 2009-... | 2009-... | 1       | 1        | 80   |
| 5  | Espec... | Espec... | 2009-... | 2009-... | 1       | 1        | 40   |
+----+----------+----------+----------+----------+---------+----------+------+
5 rows in set
>>
```
