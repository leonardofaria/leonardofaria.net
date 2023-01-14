---
id: 1458
title: Ocultando versões do Nginx e PHP de seu servidor web
publishedAt: 2014-09-16T19:38:08-03:00
type: Post
ogImage: /images/og-images/1458.png
layout: post
guid: https://leonardofaria.net/?p=1458
permalink: /2014/09/16/ocultando-versoes-do-nginx-e-php-de-seu-servidor-web/
dsq_thread_id:
  - "5338930573"
categories:
  - php
tags:
  - php
---
Uma prática comum em administração de servidores é ocultar a versão dos softwares utilizados, o que dificultaria na exploração de falhas específicas de um determinado pacote. Resolvi escrever esse arquivo mostrando como é fácil ocultar tais informações no Nginx e no PHP.

## Nginx

Para remover a versão do Nginx das requisições, edite o arquivo `nginx.conf` (geralmente em `/etc/nginx`) e dentro de umas seções: http, server ou location, acrescente:

```
server_tokens off;
```

O uso da variável na seção http modificará a exibição em todos os servers configurados. Por sua vez, você pode filtrar esse comportamento usando a diretiva na seção server, para remover a informação de versão em um servidor específico ou ainda na seção location, para um local específico. Realizada a alteração, reinicie o servidor web:

```
service nginx restart
```

## PHP

Para ocultar a versão do PHP, abra o arquivo `php.ini` e procure pela configuração `expose_php`:

```
expose_php = Off
```

Não se esqueça de reiniciar o Apache ou o PHP5-FPM para que a alteração surja efeito.
