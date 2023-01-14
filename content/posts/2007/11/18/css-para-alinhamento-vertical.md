---
id: 340
title: CSS para alinhamento vertical
publishedAt: 2007-11-18T14:24:32-02:00
type: Post
ogImage: /images/og-images/340.png

permalink: /2007/11/18/css-para-alinhamento-vertical/
dsq_thread_id:
  - "1000136244"
categories:
  - css
tags:
  - css
---
O [Bruno Fernandes](http://www.brunofernandes.com.br/) e eu estávamos no MSN ontem discutindo uma forma de fazer alinhamento vertical, para uma imagem da qual não se sabe a altura.

Pensamos em uma [POG](http://desciclo.pedia.ws/wiki/POG) de usar imagemagick no ruby para dar um resize na imagem e fixar a altura no tamanho da div. Mas não foi preciso nada disso. Via CSS:

```css
.product1 {display: table; height: 120px; width:120px; #position: relative; overflow: hidden; background-color:#fff;}
.product2 {position: absolute; top: 50%; left: 50%; display: table-cell; vertical-align: middle; text-align:center;}
.product3 {position: relative; top: -50%; left: -50%;}
```

&nbsp;&nbsp;

```html
<div class="product1">
    <div class="product2">
        <div class="product3">
            <img src="imagem.jpg"/>
        </div>
    </div>
</div>
```

[Fonte](http://www.jakpsatweb.cz/css/css-vertical-center-solution.html)
