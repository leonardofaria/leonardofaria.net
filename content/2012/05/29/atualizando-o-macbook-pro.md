---
id: 1271
title: Atualizando o MacBook Pro
date: 2012-05-29T15:56:24-03:00
type: Post
ogImage: /images/og-images/1271.png
layout: post
guid: https://leonardofaria.net/?p=1271
permalink: /2012/05/29/atualizando-o-macbook-pro/
dsq_thread_id:
  - "5339293004"
categories:
  - mac
tags:
  - mac
---
Estive um mês de férias na Califórnia, com direito a visitas a Cupertino na Apple e a Stanford. Aproveitando minha vinda aos Estados Unidos, resolvi fazer um upgrade na minha máquina, trocando memória RAM, substituindo o HD original por um drive SSD e também trocando o SuperDrive pelo HD original. Esse não é um upgrade inédito, o [Fábio Akita já fez](http://akitaonrails.com/2011/01/24/off-topic-upgrading-my-macbook-pro-with-an-mce-optibay) e o [Rafael Gimenez também](http://rafaelgimenes.net/2011/09/20/hackeando-macbook-pro-early-2011-memoria-ssd-hd-de-1-tb-e-dvd-externo/). 

### Porque fazer

  * Porque não tinha grana para comprar um MacBook Air;
  * Porque ainda que tivesse grana para um MacBook Air, não poder fazer trocar memória era algo que me incomodava;
  * Porque abrir Macs [é divertido](https://twitter.com/leozera/statuses/14649034669039616).

### Lista de compras

Optei por comprar tudo na Amazon, por ter preços mais baixos. A lista:

  1. [8 GB de RAM](http://www.amazon.com/gp/product/B002YUF8ZG/ref=oh_details_o02_s00_i01): teoricamente seria o máximo suportado pelo MacBook Pro, embora seja possível usar 16 GB
  2. [Drive SSD](http://www.amazon.com/gp/product/B004Q81CKY/ref=oh_details_o02_s00_i00): optei pelo OCZ Vertex 3 por ver muita gente usando em MacBooks semelhantes ao meu
  3. [Case para Super Drive](http://www.amazon.com/gp/product/B005RFOJT6/ref=oh_details_o03_s00_i00): esse case é parecido com o driver externo que a Apple vende para o MacBook Air
  4. [Data Doubler](http://www.amazon.com/gp/product/B004FM4UGE/ref=oh_details_o01_s00_i00): case para acomodar o HD no lugar do antigo drive de CD
  5. [Jogo de ferramentas](http://www.amazon.com/gp/product/B002O95BJK/ref=oh_details_o00_s00_i00): comprei um kit bem bacana &#8216;especifico para Macs'
  6. CD ou imagem devidamente montada do instalador do Mac OS. 

### Como fazer

Antes de abrir a máquina, tenha certeza de que você tem um backup atualizado. O Time Machine é perfeito para isso, pois após instalar o Mac OS no novo disco você pode restaurar sua pasta de usuários e aplicativos instalados no HD antigo.

Para abrir o mac, você vai precisar de uma chave [Phillips 00](http://www.ifixit.com/Tools/Phillips-00-ScrcF145-006), uma [chave T6](http://www.ifixit.com/Tools/T6-Torx-Screwdriver/IF145-004#.T8TvbplYtG4), e um [Spudger](http://www.ifixit.com/Tools/Spudger/IF145-002), que no meu caso estavam entre as ferramentas do kit. Ao abrir a máquina, a primeira coisa a ser feita é desligar o conector da bateria. Eu não vou entrar em detalhes sobre esse processo, uma vez que recorri ao [iFixit](http://www.ifixit.com). Ele explica didaticamente como [trocar os pentes de memória RAM](http://www.ifixit.com/Guide/Installing-MacBook-Pro-13-Inch-Unibody-Early-2011-RAM/5117/1), como [substituir o drive de cd por um segundo HD](http://www.ifixit.com/Guide/Installing-MacBook-Pro-13-Inch-Unibody-Early-2011-Dual-Hard-Drive/8529/1) e [como trocar o disco rígido](http://www.ifixit.com/Guide/Installing-MacBook-Pro-13-Inch-Unibody-Early-2011-Hard-Drive-Replacement/5119/1). 

Após fechar o Mac, é hora de instalar o sistema operacional, usando o cd original ou um pendrive / HD externo com o instalador montado. Para ver o gerenciador de inicialização, segure option imediatamente após ligar o computador. Deverão aparecer a partição que possui o instalador e o seu antigo Macintosh HD. Quando instalar o Mac OS, tenha certeza de que está instalando no disco certo.

A restauração do Time Machine é coisa linda de Deus. As únicas coisas que quebraram aqui foram alguns apps da Adobe e alguns arquivos da pasta /etc, que aparentemente não são restaurados.
