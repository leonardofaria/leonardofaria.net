---
id: 399
title: 'Usando ApacheBench para testes: Apache/mod_rails e Nginx/mongrel'
date: 2008-07-15T00:41:42-03:00
author: Leonardo Faria
ogImage: /images/og-images/399.png
layout: post
guid: https://leonardofaria.net/?p=399
permalink: /2008/07/15/usando-apachebench-para-testes-apachemod_rails-e-nginxmongrel/
dsq_thread_id:
  - "5338540697"
categories:
  - apache
  - rubyonrails
tags:
  - apache
  - benchmark
  - desenvolvimento
  - rails
---
O [ApacheBench](http://httpd.apache.org/docs/2.2/programs/ab.html) é um software do Apache usado para fazer testes de perfomance de servidores web, independente do servidor usado. Isso é muito útil para comparar o desempenho de diversas configurações, mas nem sempre pode apresentar a realidade do ambiente.

O ApacheBench é distribuído nos ambientes Linux pelo pacote apache2-utils – versões para Mac OS e Windows podem ser encontradas no [site do software](http://httpd.apache.org/docs/2.2/programs/ab.html). Em distribuições como o Ubuntu, para instalá-lo basta um apt-get install apache2-utils (como super-usuário). A partir daí, o comando ab fica disponível em seu terminal e é só correr para o abraço!

Um teste pode ser feito com o comando:

<pre class="brush: plain; title: ; notranslate" title="">ab -n 100 -c 5 http://www.leonardofaria.net/
</pre>

O Flag &#8216;-n' indica o número de requisições, enquanto a opção &#8216;-c' indica a ocorrência de conexões simultâneas. A saída do comando acima é semelhante a: 

<pre class="brush: plain; title: ; notranslate" title="">This is ApacheBench, Version 2.0.40-dev < $Revision: 1.146 $> apache-2.0
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Copyright 2006 The Apache Software Foundation, http://www.apache.org/

Benchmarking www.leonardofaria.net (be patient).....done


Server Software:        Apache/2.2.8
Server Hostname:        www.leonardofaria.net
Server Port:            80

Document Path:          /
Document Length:        0 bytes

Concurrency Level:      5
Time taken for tests:   16.460184 seconds
Complete requests:      100
Failed requests:        0
Write errors:           0
Non-2xx responses:      100
Total transferred:      41600 bytes
HTML transferred:       0 bytes
Requests per second:    6.08 [#/sec] (mean)
Time per request:       823.009 [ms] (mean)
Time per request:       164.602 [ms] (mean, across all concurrent requests)
Transfer rate:          2.43 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      255  291  21.2    287     361
Processing:   442  506 131.1    485    1732
Waiting:      438  492  42.9    484     655
Total:        698  797 137.9    774    2040

Percentage of the requests served within a certain time (ms)
  50%    774
  66%    804
  75%    812
  80%    818
  90%    878
  95%    925
  98%    982
  99%   2040
 100%   2040 (longest request)
</pre>

Dezenas de possibilidades podem ser traçadas com esses testes.  
Nos meus benchmarks, realizei basicamente 2 testes: a renderização do index.html default do framework e a renderização de um Time.Now do Ruby. Em ambos os testes, o desempenho do nginx + mongrel\_cluster foi superior ao Apache + mod\_rails. Esse teste também [foi feito](http://blog.matt-darby.com/2008/07/10/apachepassenger-vs-nginxmongrel/) por aí, e com resultados semelhantes ao meu.

Desse modo, em uma balança estão Apache/mod\_rails e Nginx/mongrel\_cluster. De um lado, pesam a facilidade de deployment e o crescente uso em shared hosts. De outro lado pesam a rapidez do servidor e a &#8216;dificuldade' do deployment. E aí? De que lado você vai ficar?
