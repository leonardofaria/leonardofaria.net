---
id: 406
title: Acelerando seu Textmate
date: 2008-08-16T16:42:25-03:00
type: Post
ogImage: /images/og-images/406.png
layout: post
guid: https://leonardofaria.net/?p=406
permalink: /2008/08/16/acelerando-seu-textmate/
dsq_thread_id:
  - "1000136285"
categories:
  - rubyonrails
tags:
  - mac
  - rubyonrails
---
Estou trabalhando em um projeto usando o Edge Rails. No Textmate, a tecla de atalho CMD + T é uma mão na roda para localizar e abrir qualquer arquivo, entretanto, com o Edge estando na pasta /vendor/rails, a busca pode se tornar lenta e encontrar, além dos seus arquivos, os arquivos do framework. Foi então que encontrei [essa dica](http://groups.google.com/group/rubyonrails-textmate/browse_thread/thread/8de96ea96d51de59?hl=en) do [Dr. Nic](http://drnicwilliams.com/) (sempre ele): 

É possível mudar a forma default de como funciona os patterns para localizar os arquivos. Para isso, acione as preferências do software, escolha Advanced, depois Folder References e substitua, em Folder Pattern, o valor padrão, pelo seguinte: 

```
!.*/(\.[^/]*|vendor/rails|doc|rails_root|CVS|log|data_dump|build|_darcs|pkg |_MTN|\{arch\}|blib|.*~\.nib|.*\.(framework|app|pbproj|pbxproj|xcode(proj)? |bundle))$
```

Caso queira reverter, o valor padrão é:

```
!.*/(\.[^/]*|CVS|_darcs|_MTN|\{arch\}|blib|.*~\.nib|.*\.(framework|app|pbproj|pbxproj|xcode(proj)?|bundle))$
```

Após isso, alguns diretórios não serão mais encontrados e você terá uma busca mais rápida.
