---
id: 1354
title: Migrando um repositório SVN para GIT
date: 2013-01-04T12:39:33-02:00
type: Post
ogImage: /images/og-images/1354.png
layout: post
guid: https://leonardofaria.net/?p=1354
permalink: /2013/01/04/migrando-um-repositorio-svn-para-git/
dsq_thread_id:
  - "1009803688"
categories:
  - git
tags:
  - git
---
Nos últimos dias, pesquisei uma forma de migrar um repositório de SVN para GIT e quando consegui fazer, percebi que era mais fácil que eu imagina. Com isso, resolvi escrever uma receitinha de como fazer isso.

Inicialmente você deve criar um arquivo mapeando seus usuários do SVN para o GIT. Ele deverá ter o formato abaixo:

```
leonardo = Leonardo Faria <leonardo@email.com>
autor2 = Autor <autor@email.com>
```

Nota: caso você não queira manualmente escrever esse arquivo, vasculhe o log do seu projeto SVN e obtenha a lista de autores automaticamente:

```shell
svn log -q | awk -F '|' '/^r/ {sub("^ ", "", $2); sub(" $", "", $2); print $2" = "$2" <"$2">"}' | sort -u > authors.txt
```

<span className="hidden">more</span>


A seguir, crie um novo repositório e defina os autores dos commits de acordo com o criado no arquivo acima.

```shell
mkdir repo && cd repo
git svn init http://server/svn/project/trunk --no-metadata
git config svn.authorsfile ~/authors.txt
```

Lembre-se que todos os autores de commits devem constar no arquivo, caso contrário o processo não irá funcionar. Em seguida, execute:

```shell
git svn fetch
```

Dependendo do tamanho do seu repositório, isso pode demorar um pouco.  
Em seguida, é só adicionar as configurações do servidor e pronto!

```shell
git remote add origin git@server:path/repo.git
git push -u origin master
```

### Uma coisa mais

Você também pode converter as propriedades do svn:ignore para um arquivo .gitignore. Para isso:

```shell
git svn show-ignore > .gitignore
git add .gitignore
git commit -m 'Convert svn:ignore properties to .gitignore.'
```
