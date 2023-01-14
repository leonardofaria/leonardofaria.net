---
id: 253
title: Deployment na Dreamhost e RailsPlayground
publishedAt: 2007-07-05T22:36:00-03:00
type: Post
ogImage: /images/og-images/253.png
layout: post
guid: https://leonardofaria.net/2007/07/05/deployment-na-dreamhost-e-railsplayground/
permalink: /2007/07/05/deployment-na-dreamhost-e-railsplayground/
dsq_thread_id:
  - "1000136979"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Minha aplicação **Rails** está pronta, mas, e agora? Como instalá-la no servidor?  
Essa é uma dúvida muito comum entre desenvolvedores Rails. Fazer a configuração do ambiente de produção de uma aplicação é uma tarefa bem DIY (do it yourself, ou, faça você mesmo). Não existe uma fórmula certa ou errada para isso, mas sim diferentes soluções para essa questão. Esse artigo, portanto, mostra uma forma, que eu e o [Nando](http://www.simplesideias.com.br) usamos para rodarmos nossas aplicações. Ele na [**RailsPlayground**](http://railsplayground.com/) e eu na [**Dreamhost**](http://www.dreamhost.com). Vamos lá:

<span className="hidden">more</span>

### Mão na Massa

Faça uma conexão SSH com seu servidor. Para quem não sabe, basicamente, é uma conexão que permite você trabalhar num outro computador remotamente. Assim, você pode, copiar arquivos, deletar e gerenciar sua conta nesse host. Em sistemas *nix, como Mac e Linux, digite em um terminal: ssh usuario@meusite.com.br. Após a autenticação você estará no servidor. No Windows, instale o [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/), velho guerreiro para essas operações. 

Nota: esse usuário deve ter, obviamente, acesso a shell. Caso tenha dúvida, verifique seus [usuários](https://panel.dreamhost.com/index.cgi?tree=users.users&).

Uma vez já logado no servidor, crie uma aplicação inicial (por exemplo: teste), apenas para gerar os arquivos certos de configuração (como o dispatch.* e .htaccess). No seu diretório principal (/home/meuusuario) crie:

```rails teste
```

Feito isso, envie sua aplicação para sua pasta de usuário. Você pode fazer isso usando um programa de FTP mesmo. Lembre-se de que sua aplicação não deve estar dentro da pasta public_html ou meusite.com.br ou seja, a pasta que você informa no [gerenciador de domínios](https://panel.dreamhost.com/index.cgi?tree=domain.manage&) da Dreamhost.

Com sua aplicação já no servidor, verifique se seu arquivo environment.rb está com a mesma versão do Rails que está instalada na máquina. Isso previne indesejáveis erros, como o &#8220;Rails application failed to start properly&#8221;. Não esqueça também de descomentar a linha que coloca a aplicação em modo de produção. Não devemos nunca deixar uma aplicação ir para versão final em modo de desenvolvimento, porque nesse modo os logs gerados são enormes. Verificada versão do Rails e servidor configurado para produção, acerte a permissão dos arquivos.

```chmod -R 755 ~/MinhaAppWeb2.0deSucesso
```

Acertada as permissões, copie o .htaccess e os dispatch.* da aplicação teste para sua aplicação. 

```cp ~/teste/public/dispatch.* ~/MinhaAppWeb2.0deSucesso/public/
cp ~/teste/public/.htaccess ~/MinhaAppWeb2.0deSucesso/public/
```

Nota: se você tinha feito uma alteração no .htaccess de sua aplicação, lembre de editar o novo arquivo copiado.

Falta agora fazer as migrações das tabelas de seu banco de dados. Rake neles!

```rake migrate RAILS_ENV="production" 
```

Se você preferir pode usar também o PHPMyAdmin da Dreamhost, para criar/exportar seu banco de dados.  
Finalmente, vamos criar um link simbólico da sua aplicação para o lugar público.

```ln -s /home/meuusuario/MinhaAppWeb2.0deSucesso/public /home/meuusuario/public_html
```

Nesse caso, a aplicação ficaria no diretório principal do domínio (desde que public_html tenha sido especificado como sua pasta raiz do domínio no [gerenciador](https://panel.dreamhost.com/index.cgi?tree=domain.manage&) da Dreamhost)
