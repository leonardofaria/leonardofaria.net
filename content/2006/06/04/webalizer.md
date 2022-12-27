---
id: 51
title: Webalizer
date: 2006-06-04T15:29:38-03:00
type: Post
ogImage: /images/og-images/51.png
layout: post
guid: https://leonardofaria.net/2006/06/04/webalizer/
permalink: /2006/06/04/webalizer/
dsq_thread_id:
  - "1000136086"
categories:
  - php
tags:
  - php
---
O Webalizer, para quem não sabe, é um software que mostra as estatísticas de utilização de um site. Seu acesso, na maioria das vezes, é feita pelo cPanel, painel de controle do servidor. Esse acesso só acontece se o usuário estiver logado, o que pode inviabilizar o acesso as estatísticas por pessoas sem a senha.  
Entretanto, há uma forma de exibir esses dados, publicamente.  
<span className="hidden">more</span>


Basta criar um arquivo, por exemplo, stats.php, com o seguinte conteúdo:

```php
<?php
//dv at josheli.com
$user = 'usuario';
$pass = 'senha';
$url = 'www.servidor.com'; // Sem o 'http://'
// Recebendo o arquivo
function getFile($file){
 global $user, $pass, $url;
 return file_get_contents("http://$user:$pass@$url:2082/tmp/$user/webalizer/$file");
}
// Alterando valores dos links
function changeLinks($subject, $type) {
 return preg_replace("/($type=")(?!http)(.*?)"/is","$1$PHP_SELF?$2",$subject);
}
if(!empty($_SERVER['QUERY_STRING'])){
 // Obtendo o arquivo
 $page = getFile($_SERVER['QUERY_STRING']);
 // Se for arquivo de imagem, alterar seu header
 if(strpos($_SERVER['QUERY_STRING'],'.png')!==false){ header("Content-type: image/png"); }
 else{ $page = changeLinks($page, 'src'); }
}
else {
 $page = getFile('index.html');
 $page = changeLinks($page, 'href');
 $page = changeLinks($page, 'src');
}
echo $page;
?>
```
