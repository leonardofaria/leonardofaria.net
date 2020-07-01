---
id: 29
title: Eliminando conteúdo para buscas
date: 2006-04-05T22:09:05-03:00
author: Leonardo Faria
ogImage: /images/og-images/29.png
layout: post
guid: https://leonardofaria.net/2006/04/05/eliminando-conteudo-para-buscas/
permalink: /2006/04/05/eliminando-conteudo-para-buscas/
dsq_thread_id:
  - "1308101337"
categories:
  - apache
tags:
  - apache
---
Sistemas de busca, ao trabalhar, lêem um arquivo &#8220;robots.txt&#8221; (deixado na raiz do servidor). Esse arquivo especifica para o spider quais arquivos devem aparecer na busca.

Nesse artigo, veremos como excluir determinada pasta de uma search engine.  
<!--more-->

```text
User-agent: *
Disallow: login.php
Disallow: /images/
Disallow: /cgi-bin/
```

A primeira linha, User-agent: determina para qual robot o conteúdo será desabilitado. O asterisco representa todos eles. Para excluir somente o Google, use googlebot

A segunda, terceira e quarta linhas excluem da busca, todos os arquivos da pasta images e o arquivo login.php, além do arquivos da pasta cgi-bin

Nota: Esse arquivo deve ser criado em formato de texto UNIX. Procure um editor com suporte a mudança de formato de texto.

**Conclusão:**  
Esse rápido artigo mostrou como excluir um determinado conteúdo de um site. Isso pode ser útil para proteger arquivos de configuração e imagens em nosso servidor.

**Mais do mesmo:**  

- [Robots.txt Validator](http://www.searchengineworld.com/cgi-bin/robotcheck.cgi)
