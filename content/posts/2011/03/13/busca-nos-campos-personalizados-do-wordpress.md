---
id: 1132
title: Busca nos campos personalizados do WordPress
publishedAt: 2011-03-13T12:33:57-03:00
type: Post
ogImage: /images/og-images/1132.png

permalink: /2011/03/13/busca-nos-campos-personalizados-do-wordpress/
dsq_thread_id:
  - "5339201892"
categories:
  - php
  - wordpress
tags:
  - php
  - wordpress
---
Os campos personalizados é um recurso usado no WordPress para que o autor de um post possa armazenar dados a sua escolha. Você pode usar esse recurso de várias formas: mostrar imagens personalizadas, falar o que você está ouvindo durante a escrita do post, adicionar informação pessoal e [muito mais](http://performancing.com/jazz_up_your_site__28_ways_to_use_wordpress_custom_fields/). Em um blog sobre livros, você pode usar tal recurso para criar os campos &#8220;Autor&#8221;, &#8220;Editora&#8221;, &#8220;Ano&#8221; e por aí vai.

Estou trabalhando em um projeto que utiliza os campos personalizados na área de Imprensa, onde cada post aponta em que tipo de imprensa determinada informação foi postada: Rádio, TV, Internet, Jornal. Como dito acima, criar o campo personalizado é simples. Difícil é filtrar os posts de acordo com o valor do campo.

### A solução

Descobri um plugin chamado [Search Custom Fields](http://guff.szub.net/2006/04/21/search-custom-fields/). Numa explicação rápida, ele adiciona os Campos Personalizados na query de busca de posts.

Antes:

```html
<a href="/?s=minhabusca">minha busca</a>
```

Depois:

```html
<a href="?meucampopersonalizado=Veículo&s=meuvalordocampopersonalizado">minha busca pelo campo personalizado</a>
```

Na [documentação do plugin](http://guff.szub.net/2006/04/21/search-custom-fields/), o autor mostra como turbinar o campo de busca do WordPress. Ao invés disso, escrevi uma pequena função para listar os valores de um atributo personalizado:

```php
<?php
function list_custom_fields($metakey, $output) {
	// based on http://sixrevisions.com/wordpress/custom-fields-search/
	global $wpdb;
	$items = $wpdb->get_col($wpdb->prepare("SELECT DISTINCT meta_value FROM $wpdb->postmeta WHERE meta_key = %s ORDER BY meta_value ASC", $metakey) );
	if ($items) {
		if ($output == "dropdown") { // display values in a select
			echo "<form action=\"/\" method=\"get\"><input type=\"hidden\" name=\"key\" value=\"$metakey\" /><select name=\"s\" onchange=\"this.form.submit();\"><option></option>";
			foreach ($items as $item) {
			  echo "<option value=\"" . $item . "\">" . $item . "</option>";
			}
			echo "</select></form>";
		} else if ($output == "list") { // display values in a list
			echo "<ul>";
			foreach ($items as $item) {
			  echo "<li><a href=\"/?s=$item&key=$metakey\">$item</a></li>";
			}
			echo "</ul>";
		}
	}
}
```

Coloque a função acima no arquivo functions.php do seu tema e chame-a, de duas formas, em seu sidebar, por exemplo:

```php
<?php if(function_exists('list_custom_fields')) list_custom_fields("Veículo", "dropdown"); ?>
```

&#8230;para mostrar os valores do campo personalizado &#8220;Veículo&#8221; em select do HTML ou&#8230;

```php
<?php if(function_exists('list_custom_fields')) list_custom_fields("Veículo", "list"); ?>
```

&#8230;para mostrar os valores do campo personalizado &#8220;Veículo&#8221; em uma lista.
