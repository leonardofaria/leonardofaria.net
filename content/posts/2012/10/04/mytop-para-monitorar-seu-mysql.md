---
id: 1292
title: mytop, para monitorar seu MySQL
publishedAt: 2012-10-04T00:27:33-03:00
type: Post
ogImage: /images/og-images/1292.png

permalink: /2012/10/04/mytop-para-monitorar-seu-mysql/
dsq_thread_id:
  - "1001382849"
categories:
  - mysql
tags:
  - mysql
---
O [mytop](http://jeremy.zawodny.com/mysql/mytop/) é um clone do comando top para o MySQL. Ele é usado para monitorar a performance do seu banco, sem precisar de softwares caros, complexos ou pesados. Ele é escrito em Perl e abaixo está um mini-roteiro de como instalá-lo – no meu caso, Mac OS Mountain Lion.  


<center>
  <a href="http://jeremy.zawodny.com/mysql/mytop/"><img src="/wp-content/uploads/2012/10/mytop.jpg" alt="" title="mytop" /></a>
</center>

  
  
Antes de compilar o mytop é necessário [instalar o pré-requisito DBD-Mysql](https://discussions.apple.com/thread/3136351?start=0&tstart=0). No terminal, digite:

```
perl -MCPAN -e 'shell'
```

Em seguida, execute: 

```
get DBD::mysql
exit
```

Ao sair do prompt do cpan, digite:

```
cd ~/.cpan/build/DBD-mysql-<version>/
perl Makefile.PL--testuser='mysql_user_name' --testpassword='mysql_passwd'
make
make test
make install
```

Faça o [download do pacote](http://jeremy.zawodny.com/mysql/mytop/mytop-1.6.tar.gz) porque já é hora de compilá-lo: 

```
tar -zxvf mytop-<version>.tar.gz
cd mytop-<version>
perl Makefile.PL
make
make test
make install
```

Execute o mytop pela primeira vez:

```mytop```

Pode acontecer o seguinte erro:

```Error in option spec: "long|!"```

Caso esse erro aconteça, é necessário editarmos o mytop. Abra o arquivo – aqui instalado em /usr/local/bin e edite a linha 159:

```perl
long|long_nums|l!" => \$config{long_nums},
```

Além disso, substitua as linhas 958 e 959 pelas linhas seguintes:

```perl
if ($host)
	{
		$host =~ s/^([^.]+).*/$1/;
		$thread->{Host} = $host;
	}
```

## Usando o mytop

Você pode monitorar seu banco passando as configurações de conexão via shell:

```mytop -u 'seuusuario' -p 'suasenha' -h 127.0.0.1 -d 'seubanco'```

&#8230;ou pode criar um arquivo .mytop em sua pasta de usuários, como o abaixo:

```user=seuusuario
pass=suasenha
host=127.0.0.1
db=seubanco```
