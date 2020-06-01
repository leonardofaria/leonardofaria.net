---
id: 1517
title: 'Curiosidade MySQL do dia: senhas em scripts'
date: 2014-12-01T21:46:07-02:00
author: Leonardo Faria
ogImage: /images/og-images/1517.png
layout: post
guid: https://leonardofaria.net/?p=1517
permalink: /2014/12/01/curiosidade-mysql-do-dia-senhas-em-scripts/
dsq_thread_id:
  - "3281229653"
image: /wp-content/uploads/2014/12/05-gen-db.png
categories:
  - desenvolvimento
---

Sempre que você está executando um script automatizado que usa o MySQL você possivelmente se pergunta como aplicará alguma boa prática para evitar a inserção de senha diretamente no shell.

Fiz uma pesquisa rápida sobre o assunto e encontrei duas soluções:

### 1) Variáveis

Você pode usar a variável `MYSQL_PWD` para armazenar uma senha de conexão com o banco. Exemplo:

```
export MYSQL_PWD=mypassword
mysql -h127.0.0.1 -uuser -e "show processlist"
```

No caso acima o `mysql` está sendo usado sem a opção `-p`, que é opção utilizada para informar a senha do banco. O comando só é executado com sucesso pois o MySQL automaticamente identifica a variável `MYSQL_PWD`. Utilizei a opção `-e` para executar via shell o comando `show processlist`, que lista as queries em processamento no momento.

### 2) Arquivo adicional de configuração

Outra [opção interessante](http://dev.mysql.com/doc/refman/5.5/en/password-security-user.html) é criar um arquivo `.my.cnf` com os parâmetros de conexão com o banco e guardá-lo em sua pasta de usuário. Exemplo:

```
[client]
host=127.0.0.1
user=myuser
password=mypassword
```

Lembre-se de dar permissão de acesso a esse arquivo somente para o seu usuário:

```
chmod 600 .my.cnf
```

Feito isso, quando necessário executar o `mysql`, basta informar as credenciais de conexão do seu arquivo:

```
mysql --defaults-extra-file=.my.cnf -e "show processlist"
```

**Atenção:** Lembre-se sempre de rever as permissões do usuário do MySQL que executará scripts. Evite sempre dar privilégios a mais e assim você poderá evitar grandes tragédias :)
