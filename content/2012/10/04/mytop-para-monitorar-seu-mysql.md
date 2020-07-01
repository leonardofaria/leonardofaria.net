---
id: 1292
title: mytop, para monitorar seu MySQL
date: 2012-10-04T00:27:33-03:00
author: Leonardo Faria
ogImage: /images/og-images/1292.png
layout: post
guid: https://leonardofaria.net/?p=1292
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

<pre class="brush: plain; title: ; notranslate" title="">perl -MCPAN -e 'shell'
</pre>

Em seguida, execute: 

<pre class="brush: plain; title: ; notranslate" title="">get DBD::mysql
exit
</pre>

Ao sair do prompt do cpan, digite:

<pre class="brush: plain; title: ; notranslate" title="">cd ~/.cpan/build/DBD-mysql-<version>/
perl Makefile.PL--testuser='mysql_user_name' --testpassword='mysql_passwd'
make
make test
make install
</pre>

Faça o [download do pacote](http://jeremy.zawodny.com/mysql/mytop/mytop-1.6.tar.gz) porque já é hora de compilá-lo: 

<pre class="brush: plain; title: ; notranslate" title="">tar -zxvf mytop-<version>.tar.gz
cd mytop-<version>
perl Makefile.PL
make
make test
make install
</pre>

Execute o mytop pela primeira vez:

<pre class="brush: plain; title: ; notranslate" title="">mytop</pre>

Pode acontecer o seguinte erro:

<pre class="brush: plain; title: ; notranslate" title="">Error in option spec: "long|!"</pre>

Caso esse erro aconteça, é necessário editarmos o mytop. Abra o arquivo – aqui instalado em /usr/local/bin e edite a linha 159:

<pre class="brush: perl; title: ; notranslate" title="">"long|long_nums|l!" => \$config{long_nums},</pre>

Além disso, substitua as linhas 958 e 959 pelas linhas seguintes:

<pre class="brush: perl; title: ; notranslate" title="">if ($host)
	{
		$host =~ s/^([^.]+).*/$1/;
		$thread->{Host} = $host;
	}
</pre>

## Usando o mytop

Você pode monitorar seu banco passando as configurações de conexão via shell:

<pre class="brush: plain; title: ; notranslate" title="">mytop -u 'seuusuario' -p 'suasenha' -h 127.0.0.1 -d 'seubanco'</pre>

&#8230;ou pode criar um arquivo .mytop em sua pasta de usuários, como o abaixo:

<pre class="brush: plain; title: ; notranslate" title="">user=seuusuario
pass=suasenha
host=127.0.0.1
db=seubanco</pre>
