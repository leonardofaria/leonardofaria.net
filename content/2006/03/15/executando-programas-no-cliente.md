---
id: 25
title: Executando programas no cliente
date: 2006-03-15T21:56:16-03:00
type: Post
ogImage: /images/og-images/25.png
layout: post
guid: https://leonardofaria.net/2006/03/15/executando-programas-no-cliente/
permalink: /2006/03/15/executando-programas-no-cliente/
dsq_thread_id:
  - "1088681714"
categories:
  - browser
tags:
  - browser
---
A Juliana Vieira entrou em contato e queria saber como executar um programa na máquina do cliente.  
Se fosse no lado do servidor, poderíamos usar a função [exec();](http://www.php.net/function.exec) do PHP, por exemplo. 

Do lado do cliente, provalvemente, só com alguma linguagem Client-side. De uma [discussão antiga](http://groups.google.com/group/arqhp/browse_thread/thread/9e64fe4592ff8bd6/7121ee4d0e03b7dc?q=lan+house&rnum=9#7121ee4d0e03b7dc) da [arqHP](http://groups.google.com/group/arqhp?lnk=lr), veio [um link](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/5593b353-ef4b-4c99-8ae1-f963bac48929.asp) do MSDN. A solução proposta por eles usa um ActiveX e portanto, funciona somente no Internet Explorer.
