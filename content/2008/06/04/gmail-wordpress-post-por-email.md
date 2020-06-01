---
id: 386
title: Gmail + WordPress = post por email
date: 2008-06-04T04:22:38-03:00
author: Leonardo Faria
ogImage: /images/og-images/386.png
layout: post
guid: https://leonardofaria.net/?p=386
permalink: /2008/06/04/gmail-wordpress-post-por-email/
dsq_thread_id:
  - "1000137173"
categories:
  - wordpress
tags:
  - desenvolvimento
  - gmail
  - wordpress
---
Eu já tinha visto o recurso de post por email mas nunca havia testado. É muito simples. Vamos lá:

  1. No adminstrador do WordPress, escolha Options -> Writing.
  2. Em &#8216;Posts por e-mail', defina: 
      * **Mail Server:** ssl://pop.gmail.com – **Port:** 995
      * **Login Name**: usuario@gmail.com
      * **Password:** : suasenha, naturalmente ;)
  3. Agora, basta enviar o post para o destinatário definido no adminstrador.

### Dica extra

É possível passar a categoria do post no assunto da mensagem. Basta colocar o seu respectivo id entre colchetes. Exemplo: supondo que a categoria wordpress tenha ID = 5, o assunto da sua mensagem seria: [5] título do meu post exemplo.
