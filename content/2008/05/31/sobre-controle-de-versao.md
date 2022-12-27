---
id: 379
title: Sobre Controle de Versão
date: 2008-05-31T17:38:06-03:00
type: Post
ogImage: /images/og-images/379.png
layout: post
guid: https://leonardofaria.net/?p=379
permalink: /2008/05/31/sobre-controle-de-versao/
dsq_thread_id:
  - "1007796758"
categories:
  - academic
  - git
tags:
  - academic
  - git
---
Na disciplina de Engenharia de Software que faço no curso de Sistemas de Informação da Faculdade Pitágoras, fiz um trabalho introdutório sobre Sistemas de Controle de Versão. O trabalho está abaixo e também disponível em [PDF](/wp-content/uploads/2008/05/controle.pdf).

<span className="hidden">more</span>

### Introdução 

O desenvolvimento de software envolve um processo contínuo de evolução de código e baseado nesse paradigma, surgiu a necessidade do desenvolvimento de uma solução que gerenciasse o controle de versões dos códigos-fonte, da documentação e do compartilhamento de trabalho. Assim, surgiram os softwares responsáveis de controle de versão. 

Entre suas funções, os Sistemas de Controle de Versão se destacam por possibilitar: 

  * Controle do histórico: possibilidade de se ter um histórico do desenvolvimento, bem como a possibilidade de rastrear as alterações feitas durante um projeto. 
  * Trabalho em equipe: oportunidade de possibilitar a divisão de tarefas de forma que não comprometa a integridade total do projeto. Desse modo, pode-se dividir uma equipe de programadores sem que nenhum atrapalhe o projeto do outro, tudo isso sem problemas de sincronização de arquivos. 
  * Marcação e resgate de versões estáveis: a utilização dos Sistemas de Controle de Versão facilita a restauração de versões funcionais. Desse modo, é possível trabalhar com segurança o desenvolvimento de uma versão de software sem o comprometimento da versão estável. 
  * Apresentando todo essas vantagens, o Controle de Versão é amplamente usado no desenvolvimento de sistemas. Seja em times pequenos ou grandes, softwares livres ou fechados, o Controle de Versão organiza e centraliza decisões. 

### Funcionamento

Existem diversas soluções para Controle de Versão, gratuitas e pagas. Entre as opções pagas, destacam-se o SourceSafe (Microsoft) e ClearCase (IBM). Entre as opções gratuitas, estão o CVS, o SVN e o Git.  
Todas essas ferramentas tem em comum a forma de funcionamento. Em um rápido resumo: 

  1. Existe um repositório em um servidor qualquer. Esse servidor armazena todas as versões do software. 
  2. Os desenvolvedores (clientes) acessam o repositório e trabalham nos arquivos do projeto, em seus respectivos computadores. 
  3. Periodicamente, os desenvolvedores enviam o código atualizado para o repositório (commit). 

### Comparativo: SVN e SourceSafe 

Para um comparativo, escolhemos dois sistemas bastante antagônicos: o SVN, solução livre e o SourceSafe, da Microsoft. O SVN funciona apenas com a arquitetura cliente-servidor, enquanto o SourceSafe possibilita a utilização de repositórios distribuídos, além de também trabalhar no  
modo cliente-servidor.  
Outra diferença significativa está que o SourceSafe funciona apenas em plataforma Windows, e que surgiu de uma demanda interna da própria Microsoft. Já o SVN é multi-plataforma e livre.  
Além disso, é importante ressaltar outra diferença entre os dois: facilidade de utilização. O SVN funciona a partir do terminal (e através de ferramentas de frontend) e é bem mais simples de instalar e gerenciar do que a ferramenta de controle de versões da empresa de Redmond. 

### Conclusão 

Para um desenvolvimento profissional de aplicações, é imprescindível o Controle de Versão. É ele que garante a integridade do projeto e é, além de ter todas as vantagens apresentadas nesse trabalho, outra forma de previnir acidentes de percurso no desenvolvimento, como estações que podem parar de funcionar por causas diversas.
