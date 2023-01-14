---
id: 430
title: PHP junto com o Passenger no Leopard
publishedAt: 2008-11-26T23:32:30-02:00
type: Post
ogImage: /images/og-images/430.png

permalink: /2008/11/26/php-junto-com-o-passenger-no-leopard/
dsq_thread_id:
  - "1028881004"
categories:
  - php
  - rubyonrails
tags:
  - mac
  - php
  - rubyonrails
---
Na minha máquina de desenvolvimento uso o Passenger para trabalhar com o Rails e hoje eu precisei fazer alguns testes com PHP. Deixar o PHP junto com o Passenger é tão simples como 2 + 2 são 4. Vamos lá.

Abra o arquivo de configuração do Apache (`/etc/apache2/httpd.conf`) como superusuário e procure a linha que chama o módulo do PHP (linha 114):

```apache
LoadModule php5_module        libexec/apache2/libphp5.so
```

Basta descomentar essa linha. Em seguida, no fim desse arquivo, crie um host virtual chamado php:

```apache
<virtualhost *:80>
  ServerName php
  DocumentRoot "/Users/leonardofaria/Sites/php"
  <directory "/Users/leonardofaria/Sites/php">
	Options Indexes MultiViews
	AllowOverride None
	Order allow,deny
	Allow from all
  </directory>
</virtualhost>
```

Pronto. Agora a url http://php/ responderá pelo conteúdo da pasta &#8220;/Users/leonardofaria/Sites/php&#8221;. Lá dentro, você pode criar um index.php e para testar se está tudo ok, use o conhecido phpinfo()

```php
<?php
phpinfo();
?>
```

Se tudo der certo, você terá uma tela como a seguinte :)

<center>
  <img src="/wp-content/uploads/2008/11/phpinfo.jpg" alt="" title="phpinfo" />
</center>
