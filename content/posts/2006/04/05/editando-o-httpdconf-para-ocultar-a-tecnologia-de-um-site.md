---
id: 27
title: Editando o httpd.conf para ocultar a tecnologia de um site
publishedAt: 2006-04-05T22:00:45-03:00
type: Post
ogImage: /images/og-images/27.png
layout: post
guid: https://leonardofaria.net/2006/04/27/editando-o-httpdconf-para-ocultar-a-tecnologia-de-um-site/
permalink: /2006/04/05/editando-o-httpdconf-para-ocultar-a-tecnologia-de-um-site/
dsq_thread_id:
  - "1020433179"
categories:
  - apache
tags:
  - apache
---
Em nosso trabalho, deparamos com arquivos do tipo index.do, index.foo, index.123. Mas como isso é feito?  
O Apache permite alterar o suporte das extensões suportadas por ele.  
O arquivo httpd.conf é o principal gerenciador de configurações do servidor. É nele que vamos trabalhar. <span className="hidden">more</span>

  
Devemos procurar pela seguinte linha (aproximdamente na linha 220): 

```apache
AddType application/x-httpd-php .php .php4 .php3 .phtml .leo
```

Essa é linha responsável por definir quais extensões serão executadas com suporte a PHP. Observe que acrescentei a extensão .leo.  
A partir de agora, index.leo, por exemplo, será processado com PHP. Logo, nele posso escrever toda minha aplicação. Mas lembre-se, o suporte só estará funcionando após a reinicialização do Apache.

**[update]** Isso também pode ser feito em um .htaccess
