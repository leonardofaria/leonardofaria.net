---
id: 1469
title: 'Mini-review: Cubieboard 3'
date: 2014-11-11T20:14:06-02:00
author: Leonardo Faria
ogImage: /images/og-images/1469.png
layout: post
guid: https://leonardofaria.net/?p=1469
permalink: /2014/11/11/mini-review-cubieboard-3/
dsq_thread_id:
  - "3215362169"
categories:
  - linux
tags:
  - linux
---
<img src="/wp-content/uploads/2014/11/cubieboard1-300x300.jpg" alt="cubieboard" width="300" height="300" align="right" />O [Cubieboard](http://www.cubieboard.org) é uma placa com processador ARM bem pequena que entrega um computador razoável por seu preço. Com essas características, pode ser usada como media center para sala de TV ou até mesmo como um ponto de venda de loja. Já são 3 versões de Cubieboard, comprei recentemente o [modelo mais recente na Amazon](http://www.amazon.com/gp/product/B00GE4YP5C/), que veio com case, fonte USB, cabo SATA e outras coisinhas.

### Cubieboard vs Raspberry Pi

Acho que é impossível falar do Cubieboard sem compará-lo com o Raspberry Pi. Como [já tive um](https://leonardofaria.net/2012/12/30/raspberry-pi/), resolvi escrever esse mini-review comparando os dois últimos modelos. Por partes:

  * Processador: 1GHz dual no Cubieboard contra 700MHz no Raspberry
  * Memória: 2GB no Cubieboard contra 512MB no Raspberry
  * Armazenamento: Ambos tem entradas MicroSD. Além disso, o Cubieboard tem 4GB internos e entrada para um disco SATA.
  * Saídas: HDMI e VGA no Cubieboard, enquanto o Raspberry conta com uma saída HDMI. O modelo mais recente do Raspberry possui quatro portas USB e o Cubieboard somente duas. Portas USBs sempre fazem falta e um minihub USB é uma boa pedida.
  * Preço: o Cubieboard 3 custa por volta de US$89,00 e o Raspberry por volta de US$35,00

O Cubieboard é um pouco maior que o Raspberry, mas é igualmente portátil. Alguns cases já trazem espaço para um HD de notebook SATA, facilitando o transporte do disco. Vale lembrar que o Cubieboard tem um adaptador Wifi.

### Sistema Operacional

O Cubieboard vem com Android 4.4 instalado em sua memória interna porém é possível usar [várias distribuições Linux](http://dl.cubieboard.org/software/a20-cubietruck/), tanto na memória interna quanto no cartão MicroSD ou no HD Sata. A instalação no cartão de memória geralmente é feita baixando uma imagem pronta do OS e a clonando através do comando `dd`. 

Já a instalação na memória interna é feita ligando o Cubieboard em uma porta USB do computador e transferindo o sistema operacional através de um programa chamado [LiveSuit](http://cubieboard.org/download/) (Mac e Linux). Usuários de Windows podem utilizar um programa chamado PhoenixSuit.

Na saga para deixar o Cubieboard do meu jeito testei algumas distribuições. Foi na base da tentativa e erro, e não me aprofundei bastante em cada uma delas. As distribuições testadas foram:

  * Linaro: baseada no Ubuntu. Tive problemas com updates da distribuição.
  * Cubian: baseada no Debian. Instalei no SD Card e tentei sem sucesso instalar na memória interna.
  * Fedora: não reconheceu meu monitores com saída VGA. Possivelmente deveria testá-la usando uma saída HDMI.
  * Ubuntu Desktop: foi a distribuição que tive sucesso. Tem suporte VGA e HDMI, mas aparentemente é a versão 12. Infelizmente essa distribuição vem com Unity por padrão, o que a torna um pouco lenta, entretanto instalando o XFCE ou outro gerenciador de janelas mais leve é uma alternativa para melhorar a performance.

### Conclusão

Para quem gosta de minicomputadores com Linux, o Cubieboard é uma ótima opção. Apesar de não ser tão conhecido como o Raspberry Pi, talvez o mais famoso da categoria, seu desempenho é razoável até mesmo para ser uma máquina de escritório.
