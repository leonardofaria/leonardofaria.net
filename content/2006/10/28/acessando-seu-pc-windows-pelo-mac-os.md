---
id: 135
title: Acessando seu PC Windows pelo Mac OS
date: 2006-10-28T21:24:38-03:00
author: Leonardo Faria
ogImage: /images/og-images/135.png
layout: post
guid: https://leonardofaria.net/2006/10/28/acessando-seu-pc-windows-pelo-mac-os/
permalink: /2006/10/28/acessando-seu-pc-windows-pelo-mac-os/
dsq_thread_id:
  - "1020268920"
categories:
  - mac
tags:
  - mac
---
Esse artigo ensina como logar em sua máquina com Windows a partir do Mac OS. Em redes locais isso é muito prático. O software que iremos utilizar é o [Remote Desktop Connection (RDC)](http://www.microsoft.com/mac/otherproducts/otherproducts.aspx?pid=remotedesktopclient). [Faça o download do software](http://www.microsoft.com/mac/downloads.aspx?pid=download&location=/mac/download/misc/rdc_update_103.xml&secid=80&ssid=10&flgnosysreq=True) (eu escolhi a versão em .bin) e vamos lá.

<!--more-->


Com o download realizado, a instalação é super-simples. Basta arrastar o ícone do RDC para a pasta Aplicativos. Ao executar o RDC pela primeira vez, a tela deve ser algo parecido com a abaixo:  
<img src="/wp-content/uploads/2006/10/rdc1.jpg" alt="Primeira tela do RDC" />

&#8220;windows&#8221;, no caso é o nome da máquina que desejo conectar (nesse campo também cabe o IP da máquina a ser conectada). Mas antes de fazermos a conexão temos que autorizar, no Windows, a conexão remota. Para isso, clique com o botão direito no ícone &#8220;Meu computador&#8221; e escolha &#8220;Propriedades&#8221;. Bem, abre-se a janela de Propriedades do sistema. Lá, selecionamos a guia Remoto. Nessa guia, selecionamos &#8220;Permitir que usuários se conectem remotamente a esse computador&#8221;. É essa opção que permite o RDC funcionar. Após marcar essa opção, clique em &#8220;Selecionar usuários remotos&#8221;. Na nova janela, escolha o usuário que terá acesso remotamente. Confirme essas alterações e voltemos ao Mac.

Agora podemos mandar conectar remotamente. Se tudo der certo, essa será a tela:  

[<img id="image136" src="/wp-content/uploads/2006/10/rdc2.jpg" alt="RDC em ação - clique para ver maior" />](/wp-content/uploads/2006/10/rdc2.jpg "RDC em ação - clique para ver maior")

### Considerações

1) A estação com Windows ficará bloqueada enquanto o Remote Desktop estiver sendo usado.  
2) O modo padrão de execução do Windows no Remote Desktop é 800&#215;600 com 256 cores. Para alterar isso, vá em &#8220;Options&#8221;, antes de conectar remotamente
