---
id: 28
title: Ocultando a tecnologia de um site usando mod_rewrite
publishedAt: 2006-04-05T22:08:58-03:00
type: Post
ogImage: /images/og-images/28.png
layout: post
guid: https://leonardofaria.net/2006/05/27/ocultando-a-tecnologia-de-um-site-usando-mod_rewrite/
permalink: /2006/04/05/ocultando-a-tecnologia-de-um-site-usando-mod_rewrite/
dsq_thread_id:
  - "5342459188"
categories:
  - apache
tags:
  - apache
---
No artigo anterior, sugeri a mudança na configuração do httpd.conf para ocultar qual a tecnologia de um site. Isso pode ser útil em dois casos. O primeiro, por uma questão estética (não tão relevante) e a segunda por uma questão de segurança. Já que não se conhece como o site foi feito, ataques com SQL Injection, por exemplo, podem ser atrasados.  
<span className="hidden">more</span>


Mas voltando ao conteúdo desse artigo, o Apache oferece outra forma de maquiar uma URL. E isso é através do mod\_rewrite. Além de oferecer a segurança em não mostrar a extensão de um arquivo, o mod\_rewrite permite a criação de URLS &#8216;fáceis' de entender e não monstros do tipo `index.php?id=7&date=05/02/97&page=6`

O mod_rewrite não passa de um módulo (que deve estar ativado no httpd.conf) que permite, através de expressões regulares, redirecionar o usuário. Mas, como ele funciona? <span className="hidden">more</span>

A configuração das URLs amigáveis envolve a criação de um arquivo .htaccess. Esse arquivo deve estar no diretório no qual deve ser trabalhado. Vamos a configuração:

```apache
RewriteEngine On
RewriteRule ^(noticias)/(.+)$	 index.php?id=$1&go=$2
```

Vamos entender o que faz as linhas acima.  
A primeira aciona o módulo. Já a segunda é marcada por três tabulações:

A primeira tabulação traz a palavra RewriteRule, que indica que essa linha possui uma regra de redirecionamento.

A segunda tabulação monta a URL virtual. Segundo essa regra, qualquer URL noticias/teste será redirecionado para a terceira tabulação, index.php?id=$1&go=$2. Observe que $1 e $2, usadas na terceira tabulação, são na verdade a primeira (noticias) e a segunda (qualquer palavra) partes da URL virtual.

**Mais do mesmo:**  

- [Continue lendo sobre expressões regulares.](http://guia-er.sourceforge.net/guia-er.html)  
- [Gerenciamento de URLs](http://www.brunotorres.net/web/urls) e [URLs amigáveis – Esclarecendo dúvidas](http://www.brunotorres.net/web/urls-again), por Bruno Torres  
- [Documentação do mod_rewrite](http://httpd.apache.org/docs-2.0/mod/mod_rewrite.html), pelo Apache
