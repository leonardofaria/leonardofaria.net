---
id: 1106
title: Personalizando o scrollbar com WebKit
date: 2011-01-23T18:52:34-02:00
author: Leonardo Faria
ogImage: /images/og-images/1106.png
layout: post
guid: https://leonardofaria.net/?p=1106
permalink: /2011/01/23/personalizando-o-scrollbar-com-webkit/
dsq_thread_id:
  - "5337469021"
categories:
  - browser
  - css
tags:
  - css
  - browser
---
Personalizar barras de rolagem é [algo que vem lá dos tempos](http://codestacker.com/codes/244-color-scrollbars-for-ie-5-5) do IE 5.5. Naquele tempo, personalizavam-se as cores da barra, criando efeitos na maioria da vezes cafonas. Já [faz algum tempo](http://webkit.org/blog/363/styling-scrollbars/) que o WebKit suporta scrollbars personalizadas. Você pode personalizar atributos como borda e background, usando até mesmo imagens para criar barras de rolagens bacanas. Esse artigo mostra alguns pseudo-elementos e pseudo-classes para personalizar sua barra.  
<!--more-->

### Antes de começar

Antes de começar precisamos alterar algumas propriedades de posicionamento de nossa página, para que a barra do WebKit substitua a barra nativa do browser.  

```css
body {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 10px;
	overflow-y: scroll;
	overflow-x: hidden;
}

html {
	overflow-y: auto;
	background-color: transparent;
}
```

### Os pseudo-elementos e as pseudo-classes

#### Pseudo-elementos

```html
<ul>
<li>-webkit-scrollbar</li>
<li>-webkit-scrollbar-button</li>
<li>-webkit-scrollbar-track</li>
<li>-webkit-scrollbar-track-piece</li>
<li>-webkit-scrollbar-thumb</li>
<li>-webkit-scrollbar-corner</li>
<li>-webkit-resizer</li>
</ul>
```

#### Pseudo-classes

```html
<ul>
<li>:horizontal</li>
<li>:vertical</li>
<li>:decrement</li>
<li>:increment</li>
<li>:start</li>
<li>:end</li>
<li>:double-button</li>
<li>:single-button</li>
<li>:no-button</li>
<li>:corner-present</li>
<li>:window-inactive</li>
<li>:enabled</li>
<li>:disabled</li>
<li>:hover</li>
<li>:active</li>
</ul>
```

### Exemplos

#### Exemplo 1

<center>
  <img src="/wp-content/uploads/2011/01/exemplo1.jpg" />
</center>

```css
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment  {
	display: none;
}

::-webkit-scrollbar-track-piece  {
	background-color: #3b3b3b;
	-webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
	background-color: #666;
	-webkit-border-radius: 6px;
}
```

Veja no primeiro exemplo que nos elementos `-webkit-scrollbar-button:start:decrement` e `-webkit-scrollbar-button:end:increment` foram usadas `display:none`, para que não seja exibido os botões das extremidades da barra.

## Exemplo 2

<center>
  <img src="/wp-content/uploads/2011/01/exemplo2.jpg" />
</center>

```css
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
    display: block;
}

::-webkit-scrollbar-button:end:increment {
    background-image: url("images/scroll_cntrl_dwn.png");
}

::-webkit-scrollbar-button:start:decrement {
    background-image: url("images/scroll_cntrl_up.png");
}

::-webkit-scrollbar-track-piece:vertical:start {
    background-image: url("images/scroll_gutter_top.png"), url("images/scroll_gutter_mid.png");
    background-repeat: no-repeat, repeat-y;
}

::-webkit-scrollbar-track-piece:vertical:end {
    background-image: url("images/scroll_gutter_btm.png"), url("images/scroll_gutter_mid.png");
    background-repeat: no-repeat, repeat-y;
    background-position: bottom left, 0 0;
}

::-webkit-scrollbar-thumb:vertical {
    height: 56px;
    -webkit-border-image: url("images/scroll_thumb.png") 8 0 8 0 stretch stretch;
    border-width: 8 0 8 0;
}
```

No segundo exemplo, foram usados múltiplos backgrounds para criar uma barra de rolagem arrendondada.

### Exemplo 3

<center>
  <img src="/wp-content/uploads/2011/01/exemplo3.jpg" />
</center>

```css
::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}

::-webkit-scrollbar-button:end:increment,
::-webkit-scrollbar-button:end:decrement {
    display: block;
}

::-webkit-scrollbar-button:end:increment {
    background-image: url("images/scroll_cntrl_dwn.png");
}

::-webkit-scrollbar-button:end:decrement {
    background-image: url("images/scroll_cntrl_up.png");
}

::-webkit-scrollbar-track-piece:vertical:start {
    background-image: url("images/scroll_gutter_top.png"), url("images/scroll_gutter_mid.png");
    background-repeat: no-repeat, repeat-y;
}

::-webkit-scrollbar-track-piece:vertical:end {
    background-image: url("images/scroll_gutter_btm.png"), url("images/scroll_gutter_mid.png");
    background-repeat: no-repeat, repeat-y;
    background-position: bottom left, 0 0;
}

::-webkit-scrollbar-thumb:vertical {
    height: 56px;
    -webkit-border-image: url("images/scroll_thumb.png") 8 0 8 0 stretch stretch;
    border-width: 8 0 8 0;
}
```

Nesse exemplo são usados botões na parte inferior da barra, como no Mac OS.

### Exemplo 4

<center>
  <img src="/wp-content/uploads/2011/01/exemplo41.jpg" />
</center>

```css
pre {
	border: 1px solid #ccc;
	border-radius: 3px;
	white-space: nowrap;
	overflow: scroll;
	padding: 5px;
	width: 550px;
}

pre::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	padding: 18px;
	-webkit-border-radius: 1ex;
}

pre::-webkit-scrollbar-thumb {
	background: #ccc -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(240, 240, 240)), to(rgb(210, 210, 210)));
	padding: 8px;
	width: 6px;
	height: 6px;
	-webkit-border-radius: 1ex;
}

pre::-webkit-scrollbar-button:start:decrement,pre::-webkit-scrollbar-button:end:increment {
	display: none;
}

pre::-webkit-scrollbar-thumb:vertical, pre::-webkit-scrollbar-thumb:horizontal {
	height: 3px;
	width: 3px;
	margin: 3px;
}
```

Para terminar, foi aplicado em um elemento `<pre>`. Todos os exemplos acima estão no meu GitHub, no repositório [webkit-examples](https://github.com/leonardofaria/webkit-examples). [Confira outros exemplos no site do WebKit](http://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html).

### Extra: detectando o WebKit

Você pode detectar se o browser do usuário usa WebKit rapidamente com Javascript:  

```javascript
if (/webkit/.test(navigator.userAgent.toLowerCase())) {
  	alert('hello webkit!');
}
```

&#8230; e usar jQuery para carregar uma folha de estilo personalizada:  

```javascript
$('head').append('<link rel="stylesheet" href="safari.css" type="text/css" />');
```
