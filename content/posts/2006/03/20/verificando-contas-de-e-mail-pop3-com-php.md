---
id: 26
title: Verificando contas de e-mail POP3 com PHP
publishedAt: 2006-03-20T21:57:54-03:00
type: Post
ogImage: /images/og-images/26.png

permalink: /2006/03/20/verificando-contas-de-e-mail-pop3-com-php/
dsq_thread_id:
  - "5340574550"
categories:
  - php
tags:
  - php
---
Escrevi uma funçãozinha que verifica a existência de emails (e informações adicionais como: assunto, remetente e data) de contas POP3, em PHP. O código está abaixo.

Na próxima semana, postarei uma revisão desse código. A próxima versão implementará uso de CSS e Javascript, para uma interface mais interativa.

<span className="hidden">more</span>

```php
<?php
/*
Leonardo Faria Coelho (http://www.leonardofaria.net) em 16/03/2006
Baseado no código de Thiago Zilli Sarmento (thiago@3dzs.com) em 01/09/2003
Esse script verifica a existência de e-mails em contas POP3
*/

function checa($server,$user,$pass,$port,$name) {
	$conn = @imap_open("{$server:$port/pop3}INBOX",$user,$pass) or die("Falha na conexão!"); // Conexão com o server
	$headers = @imap_headers($conn) or die("Não existe e-mails!"); // Chamando o Headers

	$numEmails = sizeof($headers); // Verifica quantidade de e-mails em sua caixa postal
	echo "Você tem <b>$numEmails</b> mensagens em sua caixa de correio.<br / />"; // Mostra conteúdo

	for ($i=1; $i< $numEmails+1; $i++){ // Loop para gerar informações das mensagens
		$mailHeader = @imap_headerinfo($conn, $i);
		$from = $mailHeader->fromaddress;
		$subject = strip_tags($mailHeader->subject);
		$date = $mailHeader->date;

		echo "E-mail de: $from // Subject: $subject - ($date)<br />";
	}
	imap_close($conn);  // Termina conexão com o servidor
}

checa("pop3.bol.com.br","usuário","senha","porta (geralmente 110)","Nome da caixa");
?>
```
