---
id: 348
title: Ruby on Rails na caveira!
date: 2007-12-19T01:47:38-02:00
author: Leonardo Faria
ogImage: /images/og-images/348.png
layout: post
guid: https://leonardofaria.net/2007/12/19/ruby-on-rails-na-caveira/
permalink: /2007/12/19/ruby-on-rails-na-caveira/
dsq_thread_id:
  - "1009567270"
categories:
  - rubyonrails
tags:
  - rails
---
Nos últimos dias, tenho lido muita coisa sobre RoR. Infelizmente, queria blogar sobre cada um desses assuntos, mas o tempo anda muito corrido. Fiz esse mega-post com alguns links de assuntos interessantes para aprendizagem.

### Introdução

  1. [Ruby on Rails – The basics](http://www.fearoffish.co.uk/assets/2006/12/27/fof_training_handout.pdf) – um pequeno pdf de caráter beeeem introdutório.
  2. [Ruby on Rails Handbook](http://railshandbook.com/) – uma lista com inúmeros materiais sobre o framework.
  3. [Log Visualizer](http://railslogvislzr.rubyforge.org/) – apesar do nome Tabajara, essa aplicação gera gráficos e outras firulas dos seus arquivos de log.
  4. [Curso online de Ruby](http://rubylearning.com/satishtalim/tutorial.html) – via [Caio Salim](http://twitter.com/caiosalim) no Twitter (por isso que eu gosto desse Twitter).

### Documentação

  1. [ReservedWords](http://wiki.rubyonrails.com/rails/pages/ReservedWords) – para evitar criar um model chamado Ruby.
  2. [RailsBrain.com](http://www.railsbrain.com/) – documentação de várias versões do Rails.
  3. [Mechanize](http://mechanize.rubyforge.org/mechanize/) – o Mechanize é um crawler, ou seja, lê páginas web. O Eduardo o utiliza por exemplo no [O Curioso](http://www.ocurioso.com) para manipular os scraps do orkut. Depois de conhecer a documentação, vale ver esse exemplo de manipular coisas do [MySpace](http://jystewart.net/process/2007/04/avoiding-myspace-or-automating-myspace-updates-with-wwwmechanize/).
  4. [Rails Security Guide](http://www.quarkruby.com/2007/9/20/ruby-on-rails-security-guide) – esse é um link OBRIGATÓRIO que o Fabio Akita sugeriu. O nome do link já sugere seu assunto.

### Helpers e cia

  1. [Validação de senhas comuns](http://www.eribium.org/wp-content/uploads/2007/01/common_passwords.txt) – para evitar coisas do tipo &#8220;123&#8221;.
  2. [BBCodeizer](http://agtools.rubyforge.org/bbcodeizer/) – traduz BBCode para HTML.
  3. [Flash Helper](http://blog.lipsiasoft.org/articles/2007/05/30/flash-helper) – helper para inserir Flash de uma [forma bacana](http://blog.deconcept.com/swfobject) (leia-se: de um jeito que todos os navegadores – inclusive o Ignorant Explorer – entendam).
  4. [Live search](http://snippets.dzone.com/posts/show/1691) – um snippet meio tosco de como fazer um live search.
  5. [Consulta valor de SEDEX](http://forum.rubyonbr.org/forums/14/topics/2510) – outro snippet que pode ser útil.
  6. [How to protect a form from accidentally losing data](http://blog.wolfman.com/articles/2006/11/14/how-to-protect-a-form-from-accidentally-losing-data) – algo bem interessante. Sabe quando você está escrevendo uma mensagem no Gmail e vai para outra página e ele te perguntar se você vai descartar a mensagem escrita? Então, um snippet que faz esse alerta.
  7. [Definição de fuso horário](http://simplesideias.com.br/definindo-o-fuso-horario-no-rails/) – via Nando Vieira.
  8. [Google API on Rails](http://textsnippets.com/posts/show/43) – usando a API da busca do Google no Rails.
  9. [In-place editing](http://blog.codahale.com/2006/01/14/a-rails-howto-simplify-in-place-editing-with-scriptaculous/) – sabe aquele recurso que tem pra todo lado e ninguém sabe como funciona? Aqui explica.
 10. [Ajax on Rails](http://www.onlamp.com/pub/a/onlamp/2005/06/09/rails_ajax.html) – tutorial simples de implementação de requisições não sincronizadas, vulgo Ajax, no Rails.

### Plugins

  1. [Brainbuster](http://code.google.com/p/robsanheim/wiki/BrainBuster) – um captcha inteligente.
  2. [acts\_as\_paranoid](http://blog.riopro.com.br/2007/12/05/marcando-um-registro-como-excluido-ao-inves-de-excluir-acts_as_paranoid/) – esse plugin é importante principalmente em sistemas sujeitos a auditoria. Ao deletar um registro, ele não o remove do banco de dados e apenas o marca como &#8220;excluído&#8221;.
  3. [Flux Validator](http://agilewebdevelopment.com/plugins/flux_validator) – um plugin de validação com Ajax mas, lembre-se: é importante haver a validação no model por uma questão de segurança, uma vez que a entrada dos dados pode ser facilmente manipulada fora desses recursos em javascript.
  4. [Transparent Message](http://transparent-message.xilinus.com/) – dá uma saída interessante para os flash[:notice/:error].

### Tutoriais

  1. [Ruby – A Programmer's Best Friend](http://www.bestechvideos.com/category/development/ruby/) – site cheio de screencasts.
  2. [sd.rb](http://podcast.sdruby.com/) – podcast da turma de San Diego que usa RoR.

### REST

Com a invenção do Rails 2.0, o assunto REST veio a tona com uma propulsão jamais vista.

  1. [REST na Wikipedia](http://pt.wikipedia.org/wiki/REST) – o start do assunto.
  2. [A Brief Introduction to REST](http://www.infoq.com/articles/rest-introduction) – para não dizer que não falei de rest
  3. [RESTful Development](http://www.scribd.com/doc/47562/restful-development) – material sobre REST no Rails.

P.S.: esse título é uma alusão tosca ao filme Tropa de Elite. Falando nisso, o hype acabou!
