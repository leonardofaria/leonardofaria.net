---
id: 342
title: Um resumo do Minas on Rails
date: 2007-12-02T14:56:00-02:00
type: Post
ogImage: /images/og-images/342.png
layout: post
guid: https://leonardofaria.net/2007/12/02/um-resumo-do-minas-on-rails/
permalink: /2007/12/02/um-resumo-do-minas-on-rails/
dsq_thread_id:
  - "5342049188"
categories:
  - rubyonrails
  - event
tags:
  - rubyonrails
  - event
---
Ontem aconteceu o Minas on Rails. O evento surgiu da idéia do [Ronaldo Ferraz](http://logbr.reflectivesurface.com/) e da organização do pessoal da [Dito](http://www.dito.com.br) – André, [Milk-it](http://www.milk-it.net/) – Carlos, Michel e cia, [Idéia Digital](http://www.ideiadigital.ppg.br/) – Rafael Apocalypse, entre outros. Eu, dei meus pitacos sobre a organização do evento na lista [rails-mg](http://groups.google.com.br/group/rails-mg?hl=pt-BR). O evento começou com uma alfineta engraçadíssima ao Cake PHP, o Ronaldo ficou [blogando ao vivo](http://logbr.reflectivesurface.com/2007/12/01/minas-on-rails-o-trem-esta-rolando/) e o Open Talk final foi descontraído e bacana.

### As palestras

A primeira palestra que abriu o dia foi o André Fonseca e seu **case [Baú de Arquivos](http://www.baudearquivos.com)**. O Baú de Arquivos, que começou como trabalho de faculdade, poderia ser classificado como um disco virtual 2.0, com tags e compartilhamento de usuários. A palestra foi interessante porque mostrou os recursos que Rails possui para ganho de produtividade – convenções, scaffold e plugins. Para quem não conhecia o framework, serviu como um aperitivo.

Depois do André foi a vez do [Eustáquio &#8216;TaQ' Rangel](http://www.eustaquiorangel.com/) falar. Cara super-simpático que eu já conseguia de blog, listas e Twitter, o TaQ falou sobre **Ruby, passado, presente e futuro**. Ele falou da simplicidade, do hype, das abrobrinhas que falam da linguagem (como o da Info [v]Exame – abaixo) e do avanço de desempenho da versão 1.9 do Ruby que vem no Natal desse ano. De um modo geral, ela está 4 vezes mais rápida do que a versão current (1.8.6).

> &#8220;O Rails tem o ponto fraco de exigir o aprendizado da linguagem Ruby, que tem uma estrutura um pouco diferente dos dialetos de programação mais tradicionais&#8221;.

A terceira palestra foi do Eduardo Rocha, que também só conhecia virtualmente. Ele falou da **implementação do [O Curioso](http://www.ocurioso.com)**, site que monitora scraps do orkut. É impressionante os números dele: 400 mil usuários e uma tabela scraps de 160GB! Provavelmente, seu site deve ser um dos maiores cases parrudos de Rails no Brasil.

O Diógenes Araújo falou sobre **JRuby**, projeto livre apoiado pela Sun. Veja como é interessante essa integração entre Ruby e Java: você pode, por exemplo, escrever Java dentro do Ruby e distribuir aplicações Rails integradas como .war.

Depois do almoço, Rafael Apocalype falou sobre **Design para Web usando MVC**. Apocalypse mostrou a vantagem em se utilizar esse padrão, impedindo brigas entre designers e programadores por um arquivo; além de mostrar a óbvia organização que nos é proporcionado.

Ronaldo Ferraz – outro que só conhecia virtualmente – fez a sexta palestra do dia e falou sobre **DSL – linguagem especificas de domínio**. DSL é uma forma do Ruby simular outra linguagem e podem ter usos bem específicos. O código abaixo, por exemplo, pode ser uma DSL:

```ruby
receita "Bola de Fubá" do
  ingrediente "Farinha", "1 kilo"
  ingrediente "Açúcar", "200 gramas"
  ingrediente "Ovos", "2 unidades"
  preparo "Misture todos ingrediantes"
  preparo "Leve ao forno"
  preparo "Sirva"
  tempo "2 horas"
  porcoes 3
end
```

Michel Filipe falou sobre **TDD (Test-Driven Development) no Rails**. Os testes automatizados servem para prever possíveis erros em nossas aplicações e são uma ótima recomendação para quem desenvolve. O Rails possui recursos facilitadores para o TDD, como a pasta &#8216;test' de nossa aplicação. P.S.: o [Nando Vieira](http://www.simplesideias.com.br/) também já [falou sobre TDD](http://www.treinatom.com.br/betaEventos/TestDriverDevelopmentNoRailsNandoVieira.rar) no [Treina TOM](http://www.treinatom.com.br/betaEventos).

A penúltima palestra foi sobre **XP** e foi uma das melhores falas que já vi. O [Vinícius Teles](http://www.improveit.com.br/vinicius) apresentou seu case **Projeto Lucidus**, que é o desenvolvimento de vários sistemas para um grupo carioca de empresas de adminstração. Essas empresas possuem uma série de softwares em Clipper e a equipe de Teles está migrando tudo para Rails. Foi uma aula de Extreme Programming: falou das reuniões semanais com o cliente, da programação em par e da disciplina do desenvolvimento.

Carlos Júnior falou sobre **REST on Rails**. REST é uma técnica de engenharia de software para sistemas distribuídos e possui 4 operações definidas para o desenvolvimento: Post, Get, Put e Delete. Na [Wikipedia](http://pt.wikipedia.org/) tem uma explicação [detalhada sobre o assunto](http://pt.wikipedia.org/wiki/REST).

P.S.: ganhei um ano de hospedagem grátis no Evento, promoção da empresa de hosting [IW2](http://www.iw2servers.com.br/), uma das patrocinadoras do evento. Vou sortear aqui no blog. Daqui a pouco faço um post com as regras.

[Algumas fotos estão no meu Flickr.](http://flickr.com/photos/leonardofaria/sets/72157603362887798/)
