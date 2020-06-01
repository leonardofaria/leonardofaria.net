---
id: 407
title: Edge Rails no Windows Vista
date: 2008-09-10T02:26:40-03:00
author: Leonardo Faria
ogImage: /images/og-images/407.png
layout: post
guid: https://leonardofaria.net/?p=407
permalink: /2008/09/10/edge-rails-no-windows-vista/
dsq_thread_id:
  - "1000136879"
categories:
  - offtropic
tags:
  - mysql
  - rails
  - windows
---
Uma das mudanças do Rails 2.2 é não inclusão do bundle do MySQL, responsável por conectar seu projeto ao banco. [Mês passado](https://leonardofaria.net/2008/08/02/mudancas-no-rails-22/) eu postei sobre isso e hoje, ao tentar instalar o gem do MySQL no Windows Vista de um co-worker, me deparei com um problema na DLL libmySQL.dll.

A solução encontrada foi copiar esse arquivo (geralmente em C:\Program Files\MySQL\MySQL Server 4.1\bin\) para a pasta bin do Ruby (por exemplo: C:\ruby\bin).

Que fique documentado ;)
