---
id: 374
title: Rails, Git, MySQL e mod_rails no Leopard
date: 2008-05-24T16:53:23-03:00
author: Leonardo Faria
ogImage: /images/og-images/374.png
layout: post
guid: https://leonardofaria.net/?p=374
permalink: /2008/05/24/rails-git-mysql-e-mod_rails-no-leopard/
dsq_thread_id:
  - "1000136193"
categories:
  - desenvolvimento
  - macintosh
  - rubyonrails
tags:
  - git
  - howto
  - leopard
  - mac
  - mod_rails
  - mysql
  - rails
---
Comprou um Mac? Não sabe por onde começar? Esse é um mega-post mostrando como configurar Ruby on Rails, Git, MySQL e mod_rails no Leopard. É tudo **muito-fácil**!

### Ruby on Rails

O Leopard já vem com Ruby e Rails já instalados. Então, a única sugestão é a de atualizar todos os gems. O comando `gem list` deve apontar os gems instalados. Por padrão, são:

<!--more-->

```
actionmailer (1.3.6, 1.3.3)
actionpack (1.13.6, 1.13.3)
actionwebservice (1.2.6, 1.2.3)
activerecord (1.15.6, 1.15.3)
activesupport (1.4.4, 1.4.2)
acts_as_ferret (0.4.1)
capistrano (2.0.0)
cgi_multipart_eof_fix (2.2)
daemons (1.0.7)
dnssd (0.6.0)
fastthread (1.0)
fcgi (0.8.7)
ferret (0.11.4)
gem_plugin (0.2.2)
highline (1.2.9)
hpricot (0.6)
libxml-ruby (0.3.8.4)
mongrel (1.0.1)
needle (1.3.0)
net-sftp (1.1.0)
net-ssh (1.1.2)
rails (1.2.6, 1.2.3)
rake (0.7.3)
RedCloth (3.0.4)
ruby-openid (1.1.4)
ruby-yadis (0.3.4)
rubynode (0.1.3)
sources (0.0.1)
sqlite3-ruby (1.2.1)
termios (0.9.4)
```

Observa-se que o Mac OS vem com Rails 1.2.6 e 1.2.3. Para garantir tudo atualizado, é interessante usar o flag update, do comando gem e instalar o Rails, caso sua versão seja diferente da última versão corrente.

```
sudo gem update --system
sudo gem install rails
```

Após atualizar o sistema e executar `gem list`, tem-se:

```
actionmailer (2.0.2, 1.3.6, 1.3.3)
actionpack (2.0.2, 1.13.6, 1.13.3)
actionwebservice (1.2.6, 1.2.3)
activerecord (2.0.2, 1.15.6, 1.15.3)
activeresource (2.0.2)
activesupport (2.0.2, 1.4.4, 1.4.2)
acts_as_ferret (0.4.1)
capistrano (2.0.0)
cgi_multipart_eof_fix (2.2)
daemons (1.0.7)
dnssd (0.6.0)
fastthread (1.0.1, 1.0)
fcgi (0.8.7)
ferret (0.11.4)
gem_plugin (0.2.2)
highline (1.2.9)
hpricot (0.6)
libxml-ruby (0.3.8.4)
mongrel (1.0.1)
needle (1.3.0)
net-sftp (1.1.0)
net-ssh (1.1.2)
passenger (1.0.5)
rails (2.0.2, 1.2.6, 1.2.3)
rake (0.8.1, 0.7.3)
RedCloth (3.0.4)
ruby-openid (1.1.4)
ruby-yadis (0.3.4)
rubygems-update (1.1.1)
rubynode (0.1.3)
sources (0.0.1)
sqlite3-ruby (1.2.1)
termios (0.9.4)
```

### Git

O suporte ao Git não é bicho de sete cabeças. São duas as formas de instalar: via **GUI** ou via **shell**. A instalação via GUI é idêntica as demais instalações de aplicativos do Mac, além de ser mais rápida do que a instalação via shell. Basta [fazer o download](http://code.google.com/p/git-osx-installer/downloads/list?can=3&q=&sort=-uploaded&colspec=Filename+Summary+Uploaded+Size+DownloadCount) do pacote e apertar &#8216;next', &#8216;next', &#8216;finish'. Para [instalação](http://dysinger.net/2007/12/30/installing-git-on-mac-os-x-105-leopard/) via [shell](http://blog.kineticweb.com/articles/2007/10/30/compiling-git-for-mac-os-x-leopard-10-5) é necessário compilar o GIT e outras coisinhas mais.

### MySQL

Para o MySQL, também existem duas formas de instalação: via GUI e através da compilação dos binários, via Shell. Via Gui basta [copiar o pacote](http://dev.mysql.com/downloads/mysql/5.0.html#macosx-dmg) do site e instalar como qualquer outra aplicação do Mac OS. Para compilação, o melhor é seguir [esse artigo](http://hivelogic.com/articles/2007/11/installing-mysql-on-mac-os-x) do [Hivelogic](http://hivelogic.com).

### mod_rails (Passenger)

A instalação ao Passenger é bem menos complicado do que as antigas formas de se trabalhar com Rails. Inicialmente, copie o gem passenger e execute o instalador:

```
sudo gem install passenger
sudo passenger-install-apache2-module
```

O instalador é simples e não há configurações a serem feitas. Agora, é necessário alterar o arquivo de configuração do Apache para carregar o suporte a Rails. Abra o arquivo `/etc/apache2/httpd.conf` e adicione as seguintes linhas no final do arquivo:

```
LoadModule passenger_module /opt/local/lib/ruby/gems/1.8/gems/passenger-1.0.1/ext/apache2/mod_passenger.so
RailsSpawnServer /opt/local/lib/ruby/gems/1.8/gems/passenger-1.0.1/bin/passenger-spawn-server
RailsRuby /opt/local/bin/ruby
```

Além disso, é necessário informar, nesse arquivo, as configurações de sua aplicação

```
<directory "/Users/leonardofaria/Sites/test/public">
    Order allow,deny
    Allow from all
    ServerName localhost
    DocumentRoot /Users/leonardofaria/Sites/test/public
</directory>

<virtualhost *>
    ServerName localhost
    DocumentRoot /Users/leonardofaria/Sites/test/public
</virtualhost>
```

Feita todas as alterações, é hora de reiniciar o Apache. Você pode fazer isso via Preferências do Sistema > Compartilhamento, ou pelo shell:

```
sudo apachectl start
```

### Notas

* O [Nando](http://simplesideias.com.br/) mostra em [seu artigo](http://simplesideias.com.br/instalando-o-mod_rails-phusion-passenger-no-mac-os-x-leopard/#comments) outra forma de carregar as informações das aplicações.
* O Passenger possui uma [longa documentação](http://www.modrails.com/documentation/Users%20guide.html) sobre a configuração do Apache

### Fontes

* <http://dysinger.net/2007/12/30/installing-git-on-mac-os-x-105-leopard/>
* <http://developer.apple.com/tools/developonrailsleopard.html>
* <http://simplesideias.com.br/instalando-o-mod_rails-phusion-passenger-no-mac-os-x-leopard/>
* <http://www.akitaonrails.com/2008/4/16/phusion-passenger-mod_rails-test-drive>
