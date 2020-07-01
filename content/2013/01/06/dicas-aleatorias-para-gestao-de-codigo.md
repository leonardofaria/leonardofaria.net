---
id: 1360
title: Dicas aleatórias para gestão de código
date: 2013-01-06T12:02:56-02:00
author: Leonardo Faria
ogImage: /images/og-images/1360.png
layout: post
guid: https://leonardofaria.net/?p=1360
permalink: /2013/01/06/dicas-aleatorias-para-gestao-de-codigo/
dsq_thread_id:
  - "1010950173"
categories:
  - git
---
No [post anterior mostrei como migrar um repositório de SVN para Git](https://leonardofaria.net/2013/01/04/migrando-um-repositorio-svn-para-git/). No meu caso, eram mais de 2000 commits, 1 GB de código, feito por meia dúzia de programadores. Abaixo compartilho algumas dicas que podem ser úteis na gestão de todo esse código:

### Controle de Banda

Ao fazer a migração dos repositórios, comi uma boa parte da banda de Internet e vi que no servidor local de Internet não havia nada para balancear velocidade. Fazendo meu dever de casa, descobri que é possível [controlar a banda](http://noiseandheat.com/blog/2012/02/throttling-bandwidth-on-os-x/) do que o Mac OS transfere, através do utilitário ipfw. Por exemplo, se você quer limitar a 200KB o tráfego que sai de sua máquina pela porta 22 – execução de um `git push`, por exemplo – digite:

```
sudo ipfw add pipe 1 ip from any to any out dst-port 22
sudo ipfw pipe 1 config bw 200KBytes/s
```

Isso criará uma regra em seu sistema operacional. Para conferir as regras em execução:

```
sudo ipfw pipe list
```

&#8230;e para apagar a regra criada:

```
sudo ipfw pipe delete 1
```

### Gitlab

O [**Gitlab**](https://github.com/gitlabhq/gitlabhq) é feito com Rails e faz o gerencimento de repositórios Git. Sua interface e funcionalidades lembram muito o GitHub. Você cria e edita repositórios com cliques, adiciona membros ao time com facilidade e ainda tem a possibilidade de criar wikis para seus projetos. Só me arrependo de não o ter instalado antes.  


<center>
  <a href="https://github.com/gitlabhq/gitlabhq"><img src="/wp-content/uploads/2013/01/gitlab_hq.png" alt="" width="800" height="467" /></a>
</center>

### StatSVN

O [**StatSVN**](http://wiki.statsvn.org/) é um programa em Java que lê seu log do Subversion e produz várias estatísticas. Se você é ligado a números, teste esse programa!
