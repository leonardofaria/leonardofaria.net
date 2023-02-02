---
id: 1375
title: Gource, uma forma estilosa de ver logs do seu controle de versão
publishedAt: 2013-01-20T18:53:58-02:00
type: Post
ogImage: /images/og-images/1375.png

permalink: /2013/01/20/gource-uma-forma-estilosa-de-ver-logs-do-seu-controle-de-versao
dsq_thread_id:
  - "1036959682"
categories:
  - git
tags:
  - git
---

O [Catarse](http://catarse.me/) é uma plataforma brasileira de [crowdfunding](http://pt.wikipedia.org/wiki/Crowdfunding) que em [2 anos já apoiou mais de 700 projetos, movimentando quase 5 milhões de reais](http://blog.catarse.me/2-anos-de-catarse/). São números impressionantes, estão todos de parabéns por fazer acontecer, mas não é essa a razão do meu post :)

Ao me deparar com seu [post de estatísticas](http://blog.catarse.me/2-anos-de-catarse/), o [vídeo da evolução do código-fonte](http://vimeo.com/57631568) do app deles me chamou a atenção. Ele foi feito com o [Gource](http://code.google.com/p/gource/), que até o momento não conhecia. Esse aplicativo lê os logs do sistema de controle de versão (Git, Mercurial, Bazaar, Subversion) do seu projeto e gera a visualização gráfica da evolução do desenvolvimento. Por exemplo, o vídeo abaixo mostra a [evolução dos commits de 2004 a 2009 do Rails](http://www.youtube.com/embed/r0ji8FDNTj0):  

<Embed type="YouTube" id="r0ji8FDNTj0" />

O Youtube está [cheio de vídeos desse tipo](http://www.youtube.com/results?search_query=gource). Se você usa Mac OS, pode instalar o gource via port:

```bash
port install gource
```
