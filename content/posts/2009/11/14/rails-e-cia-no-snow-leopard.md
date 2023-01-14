---
id: 878
title: Rails e cia no Snow Leopard
publishedAt: 2009-11-14T20:00:24-02:00
type: Post
ogImage: /images/og-images/878.png

permalink: /2009/11/14/rails-e-cia-no-snow-leopard/
dsq_thread_id:
  - "1005938579"
categories:
  - rubyonrails
  - mac
tags:
  - rubyonrails
  - mac
---
Fiz uma instalação nova do Snow Leopard no meu MacBook e ao migrar os dados do Time Machine, do Leopard, algumas coisas pararam de funcionar. Resolvi então escrever para complementar meu [post anterior sobre o assunto](https://leonardofaria.net/2008/05/24/rails-git-mysql-e-mod_rails-no-leopard/).

### Xcode

**ANTES DE MAIS NADA**, instalei o Xcode. Ele está junto no DVD do Snow Leopard, na pasta de Instalações Opcionais.

### Rails

O Snow Leopard já vem com duas versões do Rails já instaladas: 2.2.2 e 1.13.6. Caso queira atualizar seu ambiente:  
<span className="hidden">more</span>

```shell
sudo gem update --system
sudo gem update rails
```

### Passenger

```shell
sudo gem install passenger
sudo passenger-install-apache2-module
```

Terminada a instalação, do Passenger, você precisa editar o arquivo `/etc/apache2/httpd.conf` e acrescentar o seguinte conteúdo:

```apache
LoadModule passenger_module /Library/Ruby/Gems/1.8/gems/passenger-2.2.5/ext/apache2/mod_passenger.so
PassengerRoot /Library/Ruby/Gems/1.8/gems/passenger-2.2.5
PassengerRuby /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby
```

A configuração dos sites também pode ser feita nesse arquivo, por exemplo:

```apache
<VirtualHost *:80>
  ServerName codestacker
  DocumentRoot "/Users/leonardofaria/Sites/codestacker/public"
</VirtualHost>
```

### MySQL

A instalação do gem do MySQL pode ser feita da mesma forma que [postei anteriormente](https://leonardofaria.net/2008/08/02/mudancas-no-rails-22/): basta [instalar o pacote do site](http://dev.mysql.com/downloads/mysql/5.1.html#macosx-dmg) e executar a instalação da gem com o comando:

```shell
sudo gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config
```

### ImageMagick & rmagick

Fiz a instalação do ImageMagick com o [script do chdorner](http://github.com/chdorner/magick-installer/blob/master/magick-installer.sh):

```shell
#!/bin/sh
curl -O http://nongnu.askapache.com/freetype/freetype-2.3.9.tar.gz
tar xzvf freetype-2.3.9.tar.gz
cd freetype-2.3.9
./configure --prefix=/usr/local
make
sudo make install
cd ..

curl -O http://surfnet.dl.sourceforge.net/project/libpng/00-libpng-stable/1.2.39/libpng-1.2.39.tar.gz
tar xzvf libpng-1.2.39.tar.gz
cd libpng-1.2.39
./configure --prefix=/usr/local
make
sudo make install
cd ..

curl -O http://www.ijg.org/files/jpegsrc.v7.tar.gz
tar xzvf jpegsrc.v7.tar.gz
cd jpeg-7
ln -s `which glibtool` ./libtool
export MACOSX_DEPLOYMENT_TARGET=10.5
./configure --enable-shared --prefix=/usr/local
make
sudo make install
cd ..

curl -O ftp://ftp.remotesensing.org/libtiff/tiff-3.8.2.tar.gz
tar xzvf tiff-3.8.2.tar.gz
cd tiff-3.8.2
./configure --prefix=/usr/local
make
sudo make install
cd ..

curl -O http://voxel.dl.sourceforge.net/project/wvware/libwmf/0.2.8.4/libwmf-0.2.8.4.tar.gz
tar xzvf libwmf-0.2.8.4.tar.gz
cd libwmf-0.2.8.4
make clean
./configure
make
sudo make install
cd ..

curl -O http://www.littlecms.com/lcms-1.17.tar.gz
tar xzvf lcms-1.17.tar.gz
cd lcms-1.17
make clean
./configure
make
sudo make install
cd ..

curl -O http://voxel.dl.sourceforge.net/project/ghostscript/GPL%20Ghostscript/8.70/ghostscript-8.70.tar.gz
tar zxvf ghostscript-8.70.tar.gz
cd ghostscript-8.70/
./configure  --prefix=/usr/local
make
sudo make install
cd ..

curl -O http://voxel.dl.sourceforge.net/project/gs-fonts/gs-fonts/8.11%20%28base%2035%2C%20GPL%29/ghostscript-fonts-std-8.11.tar.gz
tar zxvf ghostscript-fonts-std-8.11.tar.gz
sudo mv fonts /usr/local/share/ghostscript

curl -O http://image_magick.veidrodis.com/image_magick/ImageMagick-6.4.8-7.tar.gz
tar xzvf ImageMagick-6.4.8-7.tar.gz
cd ImageMagick-6.4.8-7
export CPPFLAGS=-I/usr/local/include
export LDFLAGS=-L/usr/local/lib
./configure --prefix=/usr/local --disable-static --with-modules --without-perl --without-magick-plus-plus --with-quantum-depth=8 --with-gs-font-dir=/usr/local/share/ghostscript/fonts
make
sudo make install
cd ..
```

A instalação do gem rmagick é como todas as outras instalações de gem:

```shell
sudo gem install rmagick
```

### E o resto?

O resto é [como na instalação do Leopard](https://leonardofaria.net/2008/05/24/rails-git-mysql-e-mod_rails-no-leopard/).
