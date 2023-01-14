---
id: 62
title: Desenvolvimento web no Macintosh
publishedAt: 2006-06-15T23:20:54-03:00
type: Post
ogImage: /images/og-images/62.png
layout: post
guid: https://leonardofaria.net/2006/06/15/desenvolvimento-web-no-macintosh/
permalink: /2006/06/15/desenvolvimento-web-no-macintosh/
dsq_thread_id:
  - "1000135341"
categories:
  - mac
tags:
  - mac
---
Muitos que se migram para o Mac OS se perguntam como trabalhar com desenvolvimento web nele. Well, o Mac OS X já vem com Apache configurado. Falta, portanto, configurar PHP e MySQL.

<span className="hidden">more</span>

Após [baixar o PHP](http://www.entropy.ch/software/macosx/php/) (+- 47MB), você irá descompactá-lo e executar o instalador. Cuidado com a versão. No Mac OS X, o Apache que vem instalado por padrão é o Apache 1.3.  


<center>
  <img src="/wp-content/uploads/2006/06/mac01.gif" alt="Instalação do PHP" />
</center>


Agora o MySQL: [Feito o download](http://dev.mysql.com/downloads/mysql/4.0.html#Mac_OS_X) (+-9MB), instale-o (primeiro o MySQL-standard e depois o MySQL Startup Item). Não há grandes tormentos para essa parte. Abra agora o MySQL.prefPane (que está junto com os 2 instaladores do MySQL). Definido quem vai usar o MySQL, você poderá finalmente iniciar o banco de dados. MySQL iniciado, falta somente o Apache:  
No Apple Menu, escolha Compartilhamento (ou Sharing).  
Selecione Compart. Web Pessoal (ou Pessoal Web Sharing) e inicie-o.  
Pronto! Para testar a configuração crie um arquivo teste.php com o seguinte conteúdo:

```php
<?php
phpinfo();
?>
```

Salve-o em Biblioteca/Webserver/Documents e vá para o Safari, digitando: http://localhost/teste.php  
Uma tela como a seguinte deve ser esperada:  

<center>
  <img src="/wp-content/uploads/2006/06/mac02.gif" alt="PHP configurado" />
</center>
