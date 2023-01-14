---
id: 726
title: 'Rails Summit: resumo do primeiro dia'
publishedAt: 2009-10-13T12:46:10-03:00
type: Post
ogImage: /images/og-images/726.png
layout: post
guid: https://leonardofaria.net/?p=726
permalink: /2009/10/13/rails-summit-resumo-do-primeiro-dia/
dsq_thread_id:
  - "1000137294"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Esse é um rascunho do que foi abordado no primeiro dia do Rails Summit. 

## [Chad Fowler](http://twitter.com/chadfowler/): Insurgência Ruby on Rails

  * Stop doing things you know are wrong!
  * A primeira Rubyconf aconteceu em 2001 com 34 pessoas.
  * Nenhum dos participantes ganhava $ com Ruby.
  * 5 dos 34 participantes escreveram o Agile Manifesto.
  * &#8220;The survival rate for startups is way less than 50%. So if you're running a startup, you had betted be doing something old. If not, you're in Trouble&#8221;
  * Implante uma nova tecnologia gradativamente.
  * Don't do (.Net | Java | C++ | C | Perl l PHP) in Ruby: a razão de trocar de tecnologia é fazer as coisas diferentes!
  * Linguagens de computador são como namoradas: a nova é melhor porque você é melhor.

## [Gregg Pollack](http://twitter.com/greggpollack): Na Vanguarda da Performance em Rails

Gregg Pollack, o cara dos screencasts do [RailsEnvy](http://www.RailsEnvy.com/), falou sobre performance. Primeiramente ele trouxe em 60 segundos algumas coisinhas para otimizar apps.

  * Usar Yslow
  * Cache: Page Caching, Action Caching, Fragment Caching, Object Caching
  * Avoid Cache expiration
  * Use memcached
  * Use background process
  * Client-side caching: etags & last-modified
  * Don't pre-optimize: 99% of the time you'll need 0%
  * Don't abuse your database

<span className="hidden">more</span>

Trouxe também um monte de plugins interessantes. Alguns deles:

  * Bullet: verifica queries e dá dicas de otimização
  * Rails_index: mostra onde falta índice nas tabelas
  * Scrooge: otimiza queries

A apresentação dele tem o mesmo estilo dos seus screencasts. [Links da apresentação](http://blog.envylabs.com/summit/).

## [Carlos Brando](http://twitter.com/carlosbrando): Yet Another Ruby Framework – Como o Rails funciona por dentro

Carlos Brando trouxe sua experiência sobre aplicações sociais.

  * OpenSocial: xml + js (eu já sabia)
  * Rails não foi feito para construir coisas para o OpenSocial

Carlos prometeu falar mais do funcionamento do Rails em seu blog. [Slides de sua apresentação](http://www.nomedojogo.com/2009/10/13/os-slides-da-minha-apresentacao-no-rails-summit-latin-america-2009/).

## [Ilya Grigorik](http://twitter.com/Igrigorik): Ruby em tempo real para Web em tempo real

Essa palestra foi concomitante a palestra do Carlos e não assisti. [Slides da apresentação](http://www.slideshare.net/igrigorik/realtime-ruby-for-the-realtime-web).

## [José Valim](http://twitter.com/josevalim): Geradores de código com Thor

José Valim falou dos novos generators do Rails 3. A necessidade de reescrevê-lo deu-se ao fato do código duplicado existe caso você alterasse algumas coisas padrões (tests, erb). O resultado disso tudo é o Thor.

Thor = Rake + Sake + Rubigen + Rails template

[Slides da apresentação](http://blog.plataformatec.com.br/2009/10/thor-e-devise-no-rails-summit-latin-america-2009/)

## [David Chelimsky](http://twitter.com/dchelimsky): RSpec e Cucumber: Além do Básico

David é líder do projeto RSpec. Sua palestra, naturalmente sobre o assunto, apresentou algumas técnicas do TDD.

## [Fabio Akita](http://www.twitter.com/akitaonrails): Agile, além do Caos

A palestra do Akita trouxe pensamentos aleatórios sobre agilidade. Entre várias falas, Akita quebrou o paradigma do &#8220;time que está ganhando não se mexe&#8221;. Isso é uma falácia porque com o tempo há deterionamento do time.  
Foi uma palestra altamente conceitual, uma verdadeira viagem envolvendo psicologia. Algumas mensagens dos seus slides: 

  * Não interessa os comos. Me interessa os porques.
  * Sucesso não vem de um plano. Vem da adaptabilidade ao ambiente.
  * Quebre as regras!
  * Agilidade é importante. Mas não é o último passo
  
  <p>
    <a href="http://vimeo.com/7099091">Além do Caos – Pensamentos Aleatórios sobre Agilidade</a> from <a href="http://vimeo.com/locaweb">Locaweb</a> on <a href="http://vimeo.com">Vimeo</a>.
  </p>
    
  <h2>
    <a href="http://twitter.com/mattetti">Matt Aimonetti</a>: O futuro do Ruby & Rails
  </h2>
  
  <p>
    A última palestra do dia foi do francês Matt Aimonetti. Matt é um dos programadores que estão trabalhando no Rails 3. Algumas mudanças:
  </p>
  
  <ul>
    <li>
      HTML 5 e Javascript não-obstrusivo: uma única interface para você utilizar a biblioteca que quiser (Prototype, jQuery, YUI)
    </li>
    <li>
      Active Record continua padrão, mas existirá no Rails uma API comum para que você possa usar qualquer ORM (Active Record, Data Mapper)
    </li>
    <li>
      Otimização Interna: Rails 3 está entre 2 e 3x mais rápido do que a versão anterior em benchmark do Matt, entretanto outros benchmarks mostram resultados ainda melhores.
    </li>
    <li>
      <a href="http://www.slideshare.net/mattetti/future-of-ruby-and-rails-2223913">Slides da apresentação do Matt</a>
    </li>
  </ul>
  
  <h2>
    Desconferência & Hora extra
  </h2>
  
  <p>
    <a href="http://twitter.com/danicuki"><img src="/wp-content/uploads/2009/10/summit4.jpg" alt="melô do teste automatizado" title="melô do teste automatizado" align="right" /></a>
  </p>
  
  <ul>
    <li>
      IMPORTANTE: A <a href="http://github.com/railssummit/morena_opensource/">morena opensource</a> está de novo no evento e há <a href="http://github.com/railssummit/morena_opensource/tree/master/RailsSummit2009/">fotos novinhas dela</a> no Github
    </li>
    <li>
      O pessoal do Guru SP apareceu e falou de seus projetos, como o Coding Dojo.
    </li>
    <li>
      A desconferência teve a participação do pessoal do Rio Grande do Norte que organizou o Oxente Rails. Eles falaram sobre &#8216;como não fazer um evento'.
    </li>
    <li>
      O pessoal do Rio também falou da sua experiência em organizar eventos e pessoas. Segundo eles, o foco está nas pessoas. Eles parecem ser um grupo bem organizado, onde até as esposas se reúnem!
    </li>
    <li>
      O <a href="http://twitter.com/rafaelp">Rafael Lima</a> apresentou sobre aplicações e empreendimento. Entre várias coisas interessante, ele disse que o desenvolvedor esquece de que ele também precisa conhecer de negócios para manter sua aplicação no ar.
    </li>
    <li>
      O <a href="http://blog.areacriacoes.com.br/">Daniel Lopes</a> apresentou seu problema quanto as finanças de sua empresa e sua solução: uma aplicação de gerenciamento financeiro que está para vir.
    </li>
    <li>
      O <a href="http://twitter.com/lfcipriani">@lfcipriani</a> apresentou seu case de aplicação: <a href="http://www.maratonadebasquete.com.br/marathons/1">Maratona de Basquete</a>. Trata-se de uma maratona de basquete cujo placar eletrônico é uma aplicação com um mega esquema de arquitetura envolvendo Rails, jQuery, XMPP, bots Ruby e tudo mais. <a href="http://prezi.com/-9hz7py6rkkc/">Sua apresentação</a>
    </li>
    <li>
      O Alexandre Gomes falou <a href="http://bluesoft.wordpress.com/2009/10/15/manifesto-2-0-por-alexandre-gomes-no-rails-summit-2009/">sobre o manifesto 2.0</a> que representa uma nova escola de pensamento de Tecnologia da Informação que vem transformando a industria de desenvolvilmento de software.
    </li>
    <li>
      O George apresentou o <a href="http://github.com/plataformatec/devise">Devise</a>, plugin para autenticação
    </li>
    <li>
      Por último, o <a href="http://twitter.com/danicuki">Daniel Cukier</a> cantou duas músicas: Melô dos Testes e o <a href="http://agileandart.blogspot.com/2009/10/samba-do-akita.html">Samba do Akita</a>. *excelente*
    </li>
    <li>
      Além disso, rolou um #horaextra no <a href="http://www.barbrahmasp.com/aeroclube/">Bar Brahma do Clube de Aviação</a>, com umas 100 pessoas. Hora de tomar um chopp gelado e encontrar pessoas do mundo online.
    </li>
  </ul>
  
  <h2>
    Etc.
  </h2>
  
  <ul>
    <li>
      No evento rolou o lançamento de um produto, o <a href="http://trendti.me/">trendi.me</a>. Trata-se de um app para coberturas de eventos e o Rails Summit foi o <a href="http://trendti.me/events/railssummit">primeiro evento monitorado</a>.
    </li>
    <li>
      Também teve o <a href="http://live.blogblogs.com.br/railssummit2009/">live stream</a> do pessoal do <a href="http://www.blogblogs.com.br">BlogBlogs</a>
    </li>
  </ul>
