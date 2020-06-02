---
id: 61
title: Por que webstandards?
date: 2006-06-15T21:56:11-03:00
author: Leonardo Faria
ogImage: /images/og-images/61.png
layout: post
guid: https://leonardofaria.net/2006/06/15/por-que-webstandards/
permalink: /2006/06/15/por-que-webstandards/
categories:
  - css
  - webstandards
tags:
  - css
  - webstandards
---
O artigo que vem a seguir foi escrito por mim em fevereiro do ano passado, para o projeto ReclamaSite (que nasceu morto). Naquela época, web2.0 não era [capa de revista](http://info.abril.com.br/) e muita gente ainda tinha desconfiança das vantagens do Tableless.  
<!--more-->

# Por que webstandards?

Com toda a guerra de navegadores na última década, Netscape e Microsoft criaram uma série de recursos proprietários, que só funcionavam em seus respectivos aplicativos. Esses recursos excluiam os usuários do produto concorrente, colocando-os entre a cruz e a espada, digo, entre um browser e outro.

Os padrões web tentam acabar com essa festa de scrollbars coloridas (aliás, um recurso usado no Internet Explorer) e cia. Através de uma série de &#8216;regras', escrevemos um documento válido, e são essas regras que nos garantem um site de qualidade. 

**Mas o que eu ganho trabalhando com os padrões web?**

Entre as vantagens do desenvolvimento web compatível com padrões web, podemos enumerar, páginas mais rápidas, compatíveis com dispositivos móveis, com redesigns mais eficientes e rápidos, e custos menores com hospedagem, além de uma mehor colocação nos rankings de sites de busca.

As páginas são mais rápidas graças principalmente à formatação com folhas de estilo. As folhas de estilo acabam com todos aqueles `<font face="arial" size="2">` do seu documento. Além de sumir com todas essas tags, as folhas de estilo podem ser vinculadas à vários arquivos HTML simultaneamente, mantendo a consistência visual entre todos os seus sites. Isso sem contar em outra vantagem: as folhas de estilo ficam no cache do navegador, permitindo um menor tráfego de transferência. Um menor tráfego de transferência gera um menor custo com hospedagem.  
A compatibilidade com diversos dispositivos é outra vantagem da adesão dos padrões web + CSS. Podemos definir folhas de estilos distintas: uma para ser exibida na hora da impressão, outra para ser exibida na tela, outra para PDA.  
Os redesigns são mais eficientes, justamente por não ter que editar dezenas de arquivos. Edite somente os arquivos de folha de estilo!  
Além disso, há melhores resultados nas ferramentas de busca, usando um código válido: as engines de busca não ignoram aquelas tabelas que compõem o layout do site. As search engines se baseiam no conteúdo. Com o webstandart, a relação código/conteúdo aumenta bastante. Há até [um site](http://www.holovaty.com/tools/getcontentsize/) que mede essa relação . Falando em tabelas, é importante resaltar que, elas só surgiram para formatar dados tabelados. Em algum momento jurássico da história da WWW, alguém as utilizou para modelar layouts e alinhar imagens fatiadas. Aí, a tendência pegou, ficou fortalecida pelos editores WYSIWYG (como o Macromedia Dreamweaver) e hoje a maioria dos sites a utilizam. 

**Algumas referências**

Deixo algumas sugestões de links úteis sobre o assunto. Aliás, eu não escrevi esse artigo unicamente da minha imaginação. 

[Zeldman](http://www.zeldman.com): autor do livro Designing with webstandarts, um dos gurus dessa área  
[A List Apart](http://www.alistapart.com): um site com muita informação útil para desenvolvedores  
[Tableless](http://www.tableless.com.br): &#8216;Versão brasileira' da A List Apart. Possui uma série de tutoriais sobre o assunto, além de ter um fórum muito bom  
[Bruno Torres](http://www.brunotorres.net): desenvolvedor carioca e entusiasta do software livre (assim como eu)  
[arqHP](http://groups.google.com/group/arqhp): não é um site, mas sim uma lista de discussão. Aliás, é talvez a mais importante lista de discussão do país quando o assunto é desenvolvimento web.

Leonardo Faria Coelho (colaboraram Bruno Torres e Irapuan Martinez)
