---
id: 400
title: Protegendo projetos com o .htaccess
publishedAt: 2008-07-16T01:48:18-03:00
type: Post
ogImage: /images/og-images/400.png
layout: post
guid: https://leonardofaria.net/?p=400
permalink: /2008/07/16/protegendo-projetos-com-o-htaccess/
dsq_thread_id:
  - "1000137216"
categories:
  - devops
  - apache
tags:
  - devops
  - apache
---
O Apache pode te ajudar a proteger um projeto com seu sistema de autenticação. E isso é mais fácil do que você pensa. Para tal, crie um arquivo .htaccess com o seguinte conteúdo:

```
AuthUserFile /home/leonardo/public_html/project/.htpasswd
AuthGroupFile /dev/null
AuthName "Restricted Access"
AuthType Basic
<limit GET>
require valid-user
</limit>
```

Após isso, crie um .htpasswd com os dados de usuário e senha (atenção ao caminho do arquivo). A senha é criptografada e o conteúdo do arquivo é algo como o seguinte:

```
leo:4tHAiRmQ4OpjM
```

Para criptografar a senha use um dos [vários](http://www.kxs.net/support/htaccess_pw.html) serviços [por aí](http://shop.alterlinks.com/htpasswd/htpasswd.php) existentes. Para proteger um projeto em Rails, a solução também funciona bem, desde que seu .htaccess esteja na pasta public de sua aplicação
