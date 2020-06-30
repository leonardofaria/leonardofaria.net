---
id: 1164
title: Coletânea de dicas sobre WordPress
date: 2011-04-24T15:58:32-03:00
author: Leonardo Faria
ogImage: /images/og-images/1164.png
layout: post
guid: https://leonardofaria.net/?p=1164
permalink: /2011/04/24/coletanea-de-dicas-sobre-wordpress/
dsq_thread_id:
  - "1018419045"
categories:
  - php
  - wordpress
tags:
  - php
  - wordpress
---
Resolvi escrever uma série de posts com diversas dicas para o WordPress.

### Temas

Vai escrever um template do zero? Recomendo começar pelo [HTML5 Boilerplate](http://html5boilerplate.com/). Trata-se de um template com diversas otimizações e resets para garantir a compatibilidade máxima entre browsers.

Também é interessante uma leitura sobre o [desenvolvimento de temas](http://codex.wordpress.org/Theme_Development), principalmente sobre a [hierarquia dos templates](http://codex.wordpress.org/Template_Hierarchy) e a função [get_template](http://codex.wordpress.org/Function_Reference/get_template_part). Venho utilizando essa função para não repetir código nos arquivos `archive.php`, `page.php`, `search.php` e `single.php`.

### Rascunhos de posts

O WordPress salva automaticamente seus posts, o que pode aumentar o tamanho de seu banco de dados. Para desabilitar esse recurso, você pode editar o arquivo `/wp-config.php`:  
<!--more-->

```php
<?php  
define('WP_POST_REVISIONS', false);
?>
```

Para apagar os rascunhos já escritos, você pode usar o plugin [**Better Delete Revision**](http://www.1e2.it/tag/better-delete-revision), ou executar a seguinte query:

```sql
DELETE a,b,c
FROM wp_posts a
LEFT JOIN wp_term_relationships b ON (a.ID = b.object_id)
LEFT JOIN wp_postmeta c ON (a.ID = c.post_id)
WHERE a.post_type = 'revision'
```

### RSS

Você pode ler RSS usando a função `wp_rss` do próprio WordPress. Exemplo:

```php
<?php
	include_once(ABSPATH.WPINC.'/rss.php');
	wp_rss('http://mysite.com/feed', 5);
?
```

Outra forma é através do plugin [**RSS Import**](http://wordpress.org/extend/plugins/rss-import/). Com ele você pode ler um feed usando o shortcode `[RSSImport]`. Exemplo:

```
[RSSImport display="10", feedurl="http://mysite.com/feed"]
```

O uso via shortcode é importante para que um usuário de seu blog possa ler um feed dentro de um post, sem executar diretamente PHP, como no uso da função `wp_rss`.

### Plugins relevantes

* [**Browser Sniff**](http://brunopedrassani.com/wordpress/plugins/browser-sniff): detecta o browser/os do usuário que comenta em seu blog;
* [**Head Meta Description**](http://guff.szub.net/head-meta-description/): insere a tag `<meta>` com o resumo ou conteúdo de seu post ou página;
* [**IP to Nation**](http://planetozh.com/blog/2004/08/ip-to-nation-plugin/): localiza o país do usuário que comenta em seu blog através do IP;
* [**NextGEN Gallery**](http://alexrabe.de/wordpress-plugins/nextgen-gallery/): sistema de galerias de fotos para o WordPress. Você cria as galerias e faz o embed em suas páginas ou posts. E há ainda uma [integração com o Monoslideshow](http://nextgen-gallery.com/slideshow/nextgen-monoslideshow/);
* [**PHP Executation**](http://wordpress.org/extend/plugins/php-execution-plugin/): permite a execução de PHP dentro dos seus posts;
* [**Smart 404**](http://atastypixel.com/blog/wordpress/plugins/smart-404/): provê sugestões de páginas e posts quando uma página não é localizada;
* [**WordPress Database Backup**](http://austinmatzko.com/wordpress-plugins/wp-db-backup/): permite fazer um backup do seu banco de dados, dando a opção de download direto, envio por email ou cópia no próprio servidor. É um plugin útil caso você não tenha acesso ao MySQL do seu servidor;
* [**Yet Another Related Posts Plugin**](http://mitcho.com/code/yarpp/): apresenta posts relacionados ao exibido, inclusive no feed do seu blog
* [**Yoast Breadcrumbs**](http://yoast.com/wordpress/breadcrumbs/): cria migalhas de pão para serem usadas em seu template.
