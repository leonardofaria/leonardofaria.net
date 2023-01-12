---
id: 221
title: Por que vale a pena trabalhar com Rails
date: 2007-04-13T22:36:09-03:00
type: Post
ogImage: /images/og-images/221.png
layout: post
guid: https://leonardofaria.net/2007/04/13/por-que-vale-a-pena-trabalhar-com-rails/
permalink: /2007/04/13/por-que-vale-a-pena-trabalhar-com-rails/
dsq_thread_id:
  - "1000136375"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
<img src='/wp-content/uploads/2007/04/rails.gif' align='right' /> Resolvi escrever esse post após um amigo me perguntar se compensava aprender/trabalhar com Ruby e com Rails, já que é demasiadamente recente e sem apoio de grandes empresas, como acontece com o PHP e Python.

Minha curiosidade de trabalhar com Rails veio após todo o hype envolvido no framework e particularmente, depois que conheci o [Orkurioso](http://www.orkurioso.com) (serviço todo hypado para monitorar scraps do [orkut](http://www.orkut.com)) e vi o [screencast](http://media.rubyonrails.org/video/rails_take2_with_sound.mov) (51MB, .mov) do [David Heinemeier](http://www.loudthinking.com/about.html), junto a todas as aplicações da [37signals](http://www.37signals.com/).

<span className="hidden">more</span>

O screencast é realmente algo bem fantástico. Para quem não viu, é a montagem de um blog em 15 minutos, ou 58 linhas. O screencast mostra as várias caracteristicas do framework, com o modelo de [MVC](http://pt.wikipedia.org/wiki/MVC) de desenvolvimento, a fácil configuração de banco de dados (aliás, que configuração?) e a &#8216;humanização' da linguagem, que não se parece com aquelas monstruosidades da sintaxes de outras linguagens.

Em um rápido resumo, MVC é um padrão de arquitetura de aplicações que visa separar a lógica da aplicação (Model), da interface do usuário (View) e do fluxo da aplicação (Controller). Isso garante uma maior organização da aplicação e uma maior facilidade em manutenção do código. A configuração de banco de dados no Rails é simples. Primeiro, porque se basea em um único arquivo e por convenção, as entidades possuem o mesmo nome da sua tabela, mas no singular. Desse modo, se você tem uma tabela articles, deverá ter uma classe Article. A humanização da linguagem também merece destaque. Característica do Ruby, a humanização garante códigos mais legíveis. Exemplo: &#8220;The quick brown fox&#8221;.length retorna o tamanho de uma string. &#8220;The quick brown fox&#8221;.upcase retorna THE QUICK BROWN FOX. Simples assim.  
<img src='/wp-content/uploads/2007/04/rails.png' alt='Rails' class='white' align='right' />  
Essas são apenas algumas das vantagens do RoR. Algo que também me chamou muito a atenção foram os plugins, que seja para fazer de sistema de login a envio de arquivo estão lá. Plugins, conceitos como DRY (não se repita), arquitetura MVC só garantem o ganho de produtividade. Tenho re-descobrido o prazer de programar e é essa paixão, de [software](http://rubyonbr.org/articles/2006/12/06/rails-sucesso-pela-arrogncia/) de [opinião](http://www.loudthinking.com/arc/000516.html), que o Rails desperta nos desenvolvedores.

### Caindo na Real

Algo que não posso de esquecer de citar e que tem tudo a ver com desenvolvimento é o [Getting Real](http://gettingreal.37signals.com), livro da 37signals que aborda a criação de aplicações web. Getting Real significa um meio rápido, menor, que reflete menos software, menos funcionalidades, menos tudo que não é essencial. O livro mostra porque é interessante permanecer pequeno e ser ágil, além de mostrar as experiências reais de uma empresa de sucesso. Getting Real tem sua [versão em português](http://gettingreal.37signals.com/GR_por.php) e é leitura obrigatória para quem projeta aplicações.
