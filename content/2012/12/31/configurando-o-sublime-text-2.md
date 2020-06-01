---
id: 1327
title: Configurando o Sublime Text 2
date: 2012-12-31T11:30:47-02:00
author: Leonardo Faria
ogImage: /images/og-images/1327.png
layout: post
guid: https://leonardofaria.net/?p=1327
permalink: /2012/12/31/configurando-o-sublime-text-2/
dsq_thread_id:
  - "5345235310"
categories:
  - desenvolvimento
tags:
  - editor
---
Tempos atrás tinha instalado o Sublime, mas não o usei efetivamente. O [Nando Vieira](http://simplesideias.com.br/) fez um [ótimo post detalhado](http://simplesideias.com.br/configurando-o-sublime-text-2) sobre o editor, e após isso, resolvi dar uma olhada mais a fundo. O Sublime é altamente configurável e abaixo cito algumas modificações que fiz.

## Plugins

O Sublime possui um gerenciador de plugins que extendem as funcionalidades do editor. O post que citei do Nando mostra como instalá-los. Esses são os plugins que andei testando:

  * [Git](https://github.com/kemayo/sublime-text-2-git/): integra funcionalidades do Git a seu projeto;
  * [SidebarGit](https://github.com/SublimeText/SideBarGit): integrar comandos do Git a sidebar do projeto;<img src="/wp-content/uploads/2012/12/tree.jpg" class="foto right" align="right" />
  * [MacTerminal](https://github.com/afterdesign/MacTerminal): integra o iTerm 2 ao Sublime;
  * [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter/): destaca blocos de código. Útil quando você pega código alheiro e se perde tentando entender onde começam e terminam funções e métodos;
  * [Sublime Lint](https://github.com/lunixbochs/sublimelint): valida a sintaxe inline de códigos JavaScript, Ruby e PHP. Nunca fui fã desses recursos, mas resolvi instalar para experimentar;

## Tema

No Textmate eu usava o esquema de cor All Hallow's Eve. Esse e todos os outros esquemas de cores podem ser usados no Sublime. Para isso você precisará do tema Soda. Criei um [fork](https://github.com/leonardofaria/soda-theme) do [tema original](http://buymeasoda.github.com/soda-theme/) para colocar ícones nas pastas, baseado em um [hack que encontrei](http://sublimetext.userecho.com/topic/19274-theming-of-the-sidebar/). Para instalar o tema, clona o repositório:

```shell
cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages
git clone https://github.com/leonardofaria/soda-theme.git "Theme - Soda"
```

Para ativá-lo, abra o arquivo de preferências do Sublime (Sublime Text 2 > Preferences > Settings – User ou `command + ,`) e adicione:

```js
{
  "theme": "Soda Light.sublime-theme",
  "color_scheme": "Packages/Color Scheme - User/All Hallow's Eve Custom.tmTheme"
}
```

Os temas do Textmate podem ser encontrados [nesse repositório](https://github.com/jwhitmire/tm-themes) do Github. O tema Soda permite a customização das abas, tornando-as semelhantes as abas do Google Chrome.

<center>
  <img src="/wp-content/uploads/2012/12/multiple-tab-styles.png" />
</center>

Para usar o estilo clássico de abas, acrescente no seu arquivo de preferências:

```js
"soda_classic_tabs": true
```

## Ícone

Eu particulamente não gosto do ícone padrão do Sublime. No Dribbble, vi alguns designers fazendo releituras do icone original. Uma [busca no site](http://dribbble.com/search?q=sublime) retorna dezenas de boas opções.

<center>
  <br /> <a href="http://dribbble.com/shots/872166-Sublime-Text-2-Replacement-Icon"><img src="/wp-content/uploads/2012/12/icon1.png" /></a><a href="http://dribbble.com/shots/382465-Sublime-Text-2-update-Replacement-Icon"><img src="/wp-content/uploads/2012/12/icon2.png" /></a><a href="http://dribbble.com/shots/468176-Sublime-Text-2-icon-you-can-actually-see-when-switching-apps"><img src="/wp-content/uploads/2012/12/icon3.png" /></a><a href="http://dribbble.com/shots/382409-Sublime-Text-2-Icon"><img src="/wp-content/uploads/2012/12/icon4.png" /></a><br />
</center>


Escolhido o ícone, basta [copiá-lo do site](http://dribbble.com/shots/468176-Sublime-Text-2-icon-you-can-actually-see-when-switching-apps) e substituí-lo no Sublime. Vá na pasta Aplicativos do seu Mac OS, clique com o botão direito no ícone do Sublime e escolha &#8220;Mostrar Conteúdo do Pacote&#8221;. Em seguida, localize a pasta Contents > Resources. O arquivo a ser substituído é o &#8220;Sublime Text 2.icns&#8221;.
