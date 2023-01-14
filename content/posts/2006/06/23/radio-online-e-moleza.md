---
id: 70
title: Rádio online é moleza!
publishedAt: 2006-06-23T00:45:29-03:00
type: Post
ogImage: /images/og-images/70.png
layout: post
guid: https://leonardofaria.net/2006/06/23/radio-online-e-moleza/
permalink: /2006/06/23/radio-online-e-moleza/
dsq_thread_id:
  - "5339145251"
categories:
  - radio
tags:
  - radio
---
**[update] Esse artigo foi escrito em 2006 e atualmente pode não ser a melhor opção para streaming.**

Escrevi esse artigo no começo do ano para explicar como ocorre a transmissão de áudio para a Internet. (Nas minhas férias de faculdade – mês que vem – vou refazer esse artigo e aproveitar que tenho 2 micros em casa agora)Utilizaremos o SHOUTcast, que é livre e funciona em vários sistemas operacionais. É uma solução pequena, mais interessantíssima.

<span className="hidden">more</span>

### Ingredientes

Um computador (de preferência, dedicado para essa função) com conexão banda larga (de preferência, rápida e dedicada)  
[Winamp](http://winamp.com/player/) (usei a versão 2.8)  
[SHOUTcast DSP Plug-in](http://www.shoutcast.com/download/broadcast.phtml) (Plug-in do Winamp para transmissão. Usei a versão 1.9.0)  
[SHOUTcast Server](http://www.shoutcast.com/download/serve.phtml) (Servidor de transmissão. Usei a versão 1.9.5)

### Modo de Preparo

Faça a instalação dos programas.  
Depois, inicie o Winamp e abra a janela de Preferências (CTRL + P).  
Acione Plug-ins > DSP/Effect, e selecione &#8216;Nullsoft SHOUTcast Source DSP v.1.9.0'. Essa é a janela de configuração em que trabalharemos.

<center>
  <img src="/wp-content/uploads/2006/06/shoutcast1.jpg" alt="Configuração do SHOUTcast" />
</center>

Mas antes de usá-la, vamos configurar o servidor.  
Abra o SHOUTcast DNA (GUI), dentro de Iniciar > Programas > SHOUTcast DNAS.  
Esse é o servidor do SHOUTcast. Vamos configurá-lo.

<center>
  <img src="/wp-content/uploads/2006/06/shoutcast2.jpg" alt="O servidor do SHOUTcast" />
</center>

O botão &#8216;Edit config' abre o arquivo de configuração.  
As principais mudanças estão nas linhas 21 (Número máximo de usuários) e 29 (Senha de acesso).  
ATENÇÃO: Para o número máximo de usuários divida sua velocidade de upload por 24. Ex.: 256/24=10

Após configurar o arquivo, salve-o e reinicie o SHOUTcast Server Monitor.

Agora, voltemos ao DSP Plug-in:  
Na guia Output, configure o Address, a porta (a padrão é 8000), a senha (a mesma que você modificou no SHOUTcast Server Monitor).  
Nessa mesma guia, temos o botão Yellowpages, que permite o cadastro de nossa rádio no site do Winamp.

<center>
  <img src="/wp-content/uploads/2006/06/shoutcast3.jpg" alt="Definindo configurações" />
</center>

Na guia Input, determinamos a origem do som que iremos colocar na Internet.

Para a execução de mp3 e transmissão das mesmas na Internet, selecionamos &#8216;Winamp (Recommended)' no drop-down Input Device. Depois disso, você cria sua playlist e pronto! A rádio já está pronta.

Para a transmissão do sinal de um rádio AM ou FM, o processo é um pouquinho mais complicado.  
Inicialmente, devemos inicialmente ligar um rádio a entrada do microfone.  
Na seção &#8216;Soundcard Mixer', escolhemos Microphone. A rádio já está pronta.  
ATENÇÃO: Cuidado com o volume de sua rádio. Esse é um detalhe que pode comprometer nosso serviço.

### Saboreando a rádio

Para ouvir a rádio, basta divulgar o endereço: http://127.0.0.1/listen.pls, substituindo o IP (óbvio). Esse link carregará o Winamp.  
Para colocar a rádio em uma página HTML, podemos usar o código abaixo:

```html
<object id="Player" height="65" width="264" classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6">
  <param name="url" value="http://127.0.0.1:8000"><!-- URL da rádio -->
  </param><param name="volume" value="50"><!-- Volume padrão -->
  </param><param name="enableContextMenu" value="0"><!-- Habilita/desabilita o bot&atilde;o direito, com funções do Media Player. O valor padrão é TRUE -->
  </param><param name="fullScreen" value="0"><!-- Habilita/desabilita o modo fullscreen. O padrão é FALSE -->
  </param><param name="mute" value="0"><!-- Habilita/desabilita a função mudo. O padrão é FALSE -->
  </param><param name="AutoStart" value="1"><!-- Habilita/desabilita a autoexecu&ccedil;&atilde;o da rádio. O padrão é TRUE -->
  </param><param name="enableErrorDialogs" value="0"><!-- Habilita/desabilita mensagens de erro -->
  </param><param name="uiMode" value="mini"><!-- Modo da interface --> 
  <!-- A linha abaixo reproduz o player em browsers movidos a motor Gecko -->
  <embed type="application/x-mplayer2" pluginspage="http://www.microsoft.com/windows/mediaplayer/download/default.asp" filename="http://127.0.0.1:8000" showstatusbar="1" showpositioncontrols="0" width="264" height="51" enablecontextmenu="0" mute="0"></embed>
</param></object>
```

Podemos ver informações sobre o servidor, como número de ouvintes ao vivo e status da rádio no endereço: http://127.0.0.1:8000/  
Deve-se carregar uma página como a abaixo:

<center>
  <img src="/wp-content/uploads/2006/06/shoutcast5.jpg" alt="Informações da rádio" />
</center>

### Considerações Finais

Esse artigo pode ser readaptado para outros sistemas operacionais. O SHOUTcast funciona no Linux e no MacOS também. Um dia desses eu testo nesses outros OS =)  
Pode-se instalar um firewall, para evitar problemas com hackers. E um no-break, para evitar problemas com São Pedro.

O Windows Media Encoder é outra solução para transmissão. Não a utilizei porque um cliente tinha Windows 98 e a Microsoft não disponibilizava mais nenhuma versão desse software para essa versão de Windows. O Windows Media Encoder só funcionará em Windows 2000 ou superior. Péssima alternativa, portanto.

### Mais do mesmo

[Fórum Baboo](http://www.babooforum.com.br/idealbb/view.asp?topicID=141574)  
[Portalsccnet.com.br](http://www.portalsccnet.com/radio.html)  
[Baboo](http://www.baboo.com.br/absolutenm/templates/content.asp?articleid=4619&zoneid=24)
