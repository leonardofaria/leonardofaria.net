---
id: 319
title: Alterando o PHP.ini da Dreamhost
date: 2007-10-19T13:21:42-02:00
author: Leonardo Faria
ogImage: /images/og-images/319.png
layout: post
guid: https://leonardofaria.net/2007/10/19/alterando-o-phpini-da-dreamhost/
permalink: /2007/10/19/alterando-o-phpini-da-dreamhost/
dsq_thread_id:
  - "1000137490"
categories:
  - desenvolvimento
  - php
tags:
  - desenvolvimento
  - dreamhost
  - host
  - php
---
Algumas configurações do PHP da Dreamhost, como o uso do fopen(), são desabilitadas por questões de segurança. Isso pode atrapalhar o funcionamento de suas aplicações. Entretanto, é possível habilitar essa e outras funções via shell.

O [wiki](http://wiki.dreamhost.com) da Dreamhost traz muitas dicas sobre a configuração do [PHP.ini](http://wiki.dreamhost.com/index.php/PHP.ini). Uma que eu reproduzo abaixo é a habilitação do fopen().

Após fazer uma conexão ssh com o servidor, crie o seguinte shellscript:

### PHP 4

```shell
#!/bin/sh
CGIFILE="$HOME/[your website directory]/cgi-bin/php.cgi"
INIFILE="$HOME/[your website directory]/cgi-bin/php.ini"
cp /dh/cgi-system/php.cgi "$CGIFILE"
cp /etc/php/cgi/php.ini "$INIFILE"

perl -p -i -e '
s/.*allow_url_fopen.*/allow_url_fopen = On/;
' "$INIFILE"
```

### PHP 5

```shell
#!/bin/sh
CGIFILE="$HOME/[your website directory]/cgi-bin/php.cgi"
INIFILE="$HOME/[your website directory]/cgi-bin/php.ini"
cp /dh/cgi-system/php5.cgi "$CGIFILE"
cp /etc/php5/cgi/php.ini "$INIFILE"

perl -p -i -e '
s/.*allow_url_fopen.*/allow_url_fopen = On/;
' "$INIFILE"
```

Defina qual o domínio a ser alterado (linha 2 do script), salve esse script, dê permissão de execução (chmod +x php-update.sh) e o execute (./php-update.sh).

Você também pode colocá-lo em execução semanalmente, para evitar erros futuros. Para isso, abra o crontab (crontab -e) e agende: @weekly /home/myusername/php-update.sh

[update]: via comentário do Vinícius, vale lembrar que deve-se criar um arquivo .htaccess, para mudar o modo de como o PHP é executado por padrão:

```
Options +ExecCGI
Action php-cgi /cgi-bin/php.cgi
AddHandler php-cgi .php
```
