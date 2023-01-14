---
id: 131
title: Ajax a seu favor. E não contra
publishedAt: 2006-10-28T20:36:26-03:00
type: Post
ogImage: /images/og-images/131.png
layout: post
guid: https://leonardofaria.net/2006/10/28/ajax-a-seu-favor-e-nao-contra/
permalink: /2006/10/28/ajax-a-seu-favor-e-nao-contra/
dsq_thread_id:
  - "1000134929"
categories:
  - ajax
  - usability
tags:
  - ajax
  - usability
---
Usar Ajax desenfreamente por aí pode causar dependência química. O [Ajaxonline](http://www.ajaxonline.com.br) é um portal sobre o assunto e apresenta uma séria falha, que muitos sites que também usam XMLHttpRequest também apresentam: links obstrusivos.

A &#8216;agilidade' do uso do Ajax está em re-aproveitar camadas e iframes para substituição de conteúdo, requisitando URLs e enviando formulários, enfim, interagindo com o usuário. O problema está na hora de chamar essas requisições. Ao chamar uma dessa funções pelo atributo href da tag a do HTML (ou simplesmente setando o valor desse atributo para &#8216;#'), o desenvolvedor esquece que os usuários possuem diferentes formas de interação com o sites. 

Eu, por exemplo, ao me deparar com um site com vários links interessantes, saio clicando nesses links com a tecla command selecionada. Isso, no meu navegador, vai fazer com que os links simplesmente se abram em novas abas. No Ajaxonline eu não consigo fazer isso, pois na nova aba, ao invés de encontrar o conteúdo da página com um assunto do link, me deparo com a home do site, novamente.

Escrevi esse post para lembrar que links não-obstrusivos são muito importantes no desenvolvimento de qualquer aplicação web. Sabem por que? Porque eu não sei prever a interação do usuário com o meu projeto!
