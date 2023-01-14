---
id: 368
title: Obtendo o número de leitores do seu Feedburner
publishedAt: 2008-05-02T05:50:54-03:00
type: Post
ogImage: /images/og-images/368.png

permalink: /2008/05/02/obtendo-o-numero-de-leitores-do-seu-feedburner/
dsq_thread_id:
  - "1000137309"
categories:
  - php
tags:
  - php
---
Post rápido da madrugada: eu e toda blogosfera (sic) que utiliza o Feedburner para gerenciar feeds de blogs e whatever pode não gostar dessa imagenzinha:

<center>
  <img src="https://feeds.feedburner.com/~fc/leonardofaria" />
</center>

Esse azul-calcinha geralmente não combina muito com os layouts de nossos sites. Eu sei que existe forma de mudar de azul-calcinha para rosa-bebê, mas isso não melhora grandes coisas. A solução em duas linhas está no PHP:

```php
<?php
$xml = simplexml_load_file("http://api.feedburner.com/awareness/1.0/GetFeedData?uri=SEUFEED");
$subs = $xml->feed->entry['circulation'];
?>
```

O método [simplexml\_load\_file](http://br2.php.net/simplexml_load_file) é um parser rápido e esperto do PHP 5. No código acima, $subs retorna o número de leitores. Simples assim.
