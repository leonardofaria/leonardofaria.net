---
id: 1249
title: eCPF no Mac
date: 2011-10-07T22:59:30-03:00
author: Leonardo Faria
ogImage: /images/og-images/1249.png
layout: post
guid: https://leonardofaria.net/?p=1249
permalink: /2011/10/07/ecpf-no-mac/
dsq_thread_id:
  - "1001398643"
categories:
  - macintosh
tags:
  - mac
---
No meu trabalho preciso usar meu cartão eCPF para acessar um determinado sistema que estamos desenvolvendo. Tenho um cartão eCPF, emitido pelo Banco do Brasil e um leitor de cartões OmniKey 3021 e foi uma grande dor de cabeça configurá-lo no Mac. Não era para ser um problema, uma vez que você precisa apenas de um driver e um módulo para o Firefox.

### Driver

O driver do leitor OmniKey pode ser [obtido](http://loja.certificadodigital.com.br/Serasa/Softwares%20e%20Drivers/D102) pelo site da [Serasa Experian](http://loja.certificadodigital.com.br/SERASA/Home). Além do driver do meu dispositivo, essa página apresenta drivers de outros devices.

Nessa mesma página, copie o Software do Cartão – Safesign. Esse software reconhece o seu cartão e apresenta os dados do certificado, a partir do app tokenadmin.

Observação: tudo nesse site está bem documentado, por isso esse post está resumido :)

### Firefox

Para que o Firefox leia seu certificado, será necessário a instalação da biblioteca libcmP11.dylib. [Faça o download dessa biblioteca](http://suporte.digitalsign.pt/faq.php?cid=15&answer=20) e copie-a para a pasta /Library/cssi. Em seguida abra as preferências do Firefox e escolha: Advanced > Encryption > Security Devices. Clique no botão Load e na tela que se abre informe o caminho do arquivo (/Library/cssi/libcmP11.dylib). Não tem erro, com o cartão plugado na porta USB do Mac, o Firefox conseguirá autenticar utilizando-se o certificado digital. Para testar, você pode usar o [eCAC](https://cav.receita.fazenda.gov.br/eCAC/publico/login.aspx), da Receita Federal.

Nota: o [ManéBlog](http://maneblog.mgate.com.br/) escreveu um [post sobre o assunto](http://maneblog.mgate.com.br/2010/03/26/como-finalmente-usar-certificados-digitais-e-cpf-por-exemplo-no-mac/), que me ajudou no processo.
