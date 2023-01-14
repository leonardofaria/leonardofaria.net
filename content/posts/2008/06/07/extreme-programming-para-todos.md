---
id: 390
title: Extreme Programming para todos
publishedAt: 2008-06-07T20:21:15-03:00
type: Post
ogImage: /images/og-images/390.png
layout: post
guid: https://leonardofaria.net/?p=390
permalink: /2008/06/07/extreme-programming-para-todos/
dsq_thread_id:
  - "1022115991"
categories:
  - academic
tags:
  - academic
---
Esse é outro post [acadêmico](http://www.leonardofaria.net/tag/academico) e novamente um artigo para a disciplina de Engenharia de Software. O artigo está abaixo e dessa vez há também [slides](/wp-content/uploads/2008/06/XP.pdf) (PDF, 2 MB) da apresentação feita na [Faculdade Pitágoras](http://www.faculdadepitagoras.com.br/).

Naturalmente, essa não é a maior referência sobre XP, apenas uma boa introdução sobre o tema. Especialistas mesmo são o [Vinícius Teles](http://www.improveit.com.br/vinicius) e o time da [Improve It](http://www.improveit.com.br), que possuem um [ótimo conteúdo](http://www.improveit.com.br/xp) sobre o assunto. Vamos lá:

### Introdução

Extreme Programming é uma metodologia de desenvolvimento de software que visa a criação de sistemas de melhor qualidade, produzidos em menos tempo e com menores custos. Criada por Kent Beck no fim da década de 90, o desenvolvimento ágil é atingido através de alguns valores e práticas que muito divergem dos conceitos tradicionais.

<span className="hidden">more</span>

### Valores

O XP, como também é chamado o Extreme Programming, estabelece alguns valores para que a empresa de desenvolvimento não se perca em seu projeto e para que o cliente tenha um acompanhamento real do que está pedindo (e pagando). Entre os valores estão: comunicação, coragem, feedback e simplicidade.

**Comunicação**

A comunicação é um importante fator no processo de criação e é privilegiada no Extreme Programming, como premissa para garantir o sucesso do desenvolvimento. No XP, cliente e equipe de desenvolvimento ficam cara-a-cara, o que evita mal entendidos e especulações. Essa comunicação é muito positiva para ambos, pois, além de possibilitar o enriquecimento das relações pessoais, faz com o que o cliente faça parte de todo um processo de criação, além de dar a ele um entendimento e domínio cada vez maior do que está querendo. 

**Coragem**

Outro mandamento do XP é a coragem, no que diz respeito a quebra de paradigmas tradicionais no desenvolvimento. Isso significa que menos é mais: menos documentação, menos modelagem e menos testes manuais. Além disso, é possibilitar o cliente a definir prioridades e manter o sistema sempre simples.

**Feedback**

Um dos alicerces mais importantes do Extreme Programming é o Feedback imediato. No feedback, o cliente tem a oportunidade de corrigir falhas que surgem no desenvolvimento e aprender em etapas o funcionamento do seu software – o que é bem mais sútil que o modelo tradicional de desenvolvimento. Além disso, dá ao desenvolvedor a oportunidade de apontar problemas e alternativas do que está sendo solicitado em tempo real.

**Simplicidade**

O conceito de simplicidade do XP possui certa relação com o Just in Time, sistema de produção criado pela Toyota na década de 50. Assim como no Toyotismo, o XP prega a simplicidade como máxima. Isso significa escrever somente o necessário para que um requisito funcione e evitar suposições para o futuro.

### Práticas

Valores podem ser simples palavras caso não se tenha uma postura condizente com o que se prega. O Extreme Programming têm interessantes práticas. As principais são:

**Desenvolvimento Orientado a Testes**

Cria os testes unitários (unit tests) e depois cria o código para que os testes funcionem. Esta abordagem é complexa no início, pois vai contra o processo de desenvolvimento de muitos anos. Entretanto, os testes unitários são essenciais para que a qualidade do projeto seja mantida.

**Integração Contínua**

Nunca espera para integrar à versão atual do sistema uma nova funcionalidade. Integrar de forma contínua permite saber o real status do desenvolvimento.

**Jogo de Planejamento**

O desenvolvimento é feito em iterações semanais. A cada começo de semana, desenvolvedores e cliente se reúnem para priorizar as funcionalidades. Ao longo da semana, o projeto é desenvolvido para que, ao final de cada semana, o cliente receba as novas funcionalidades, teste-as e caso aprove, sejam colocada em produção.

**Pequenas Versões**

A liberação de pequenas versões funcionais auxilia o processo de aceitação e absorção do software por parte do cliente.

**Programação em pares**<img src="/wp-content/uploads/2008/06/xp1.jpg" title="Programação em par" width="300" align="right" class="photo white" />

A programação em pares é um dos principais diferenciais do XP. Dois profissionais trabalhando juntos produzem códigos mais limpos, funcionais, revisados e sujeito a menos falhas. 

**Projeto Simples**

A simplicidade de um projeto está em fazer apenas o que o cliente solicita, não se preocupando em atender a requisitos não pedidos. Por exemplo: caso o cliente tenha pedido que na primeira versão apenas o usuário &#8220;teste&#8221; possa entrar no sistema com a senha &#8220;123&#8221; e assim ter acesso a todo o sistema, você vai fazer o código exato para que esta funcionalidade seja implementada, sem se preocupar com sistemas de autenticação e restrições de acesso.

**Refatoração**

A refatoração é um processo continuamente feito. Significa melhorara a clareza do cógido, dividindo-o em módulos coesos e de maior aproveitamento, baseando-se no conceito DRY (don't repeat yourself – não se repita).

**Reuniões em pé**

Reuniões em pé para não se perder o foco nos assuntos, produzindo reuniões rápidas, apenas abordando tarefas realizadas e tarefas a realizar pela equipe.

**Ritmo Sustentável**

Ritmo Sustentável significa trabalhar com qualidade, buscando ter ritmo de trabalho saudável (40 horas/semana, 8 horas/dia), sem horas extras. Horas extras, ao contrário do que parece, pode não trazer a produtividade esperada. Outra prática que se verifica neste processo é a prática de trabalho energizado, onde se busca trabalho motivado sempre. Para isto o ambiente de trabalho e a motivação da equipe devem estar sempre em harmonia.

**Time Coeso**

A equipe de desenvolvimento é formada pelo cliente e pela equipe de desenvolvimento. Isso significa que o cliente deve ter disponibilidade e boa vontade para um trabalho satisfatório.

### Equipe

Uma equipe de Extreme Programming possui desenvolvedores que desempenham diferentes papéis. São eles:

**Gerente de Projeto**

Principal responsável pelo relacionamento com o cliente, além de ser responsável também por filtrar assuntos e requisitos desnecessários.

**Coach**

Responsável pelas questões técnicas do projeto. Recomenda-se que o coach seja a pessoa com maior conhecimento do processo de desenvolvimento, dos valores e práticas do XP, para que possa verificar o desenvolvimento e apontar eventuais erros da equipe.

**Analista de Teste**

Responsável em garantir a qualidade do sistema através dos testes escritos. Ele deve ajudar o cliente a escrever os casos de testes e no final de cada iteração verificar se o software atende todos os casos de testes. Em muitos casos, o Analista em Teste também escreve a documentação.

**Redator Técnico**

Responsável por escrever a documentação mínima necessária do projeto, tirando dos desenvolvedores essa tarefa.

**Desenvolvedor**

Responsável em analisar, projetar e codificar o sistema. No XP não existe diferença entre analista, projetista e programador uma vez que em vários momentos do projeto o desenvolvedor estará exercendo alguma destas atividades.

### Conclusão

Existem várias formas de se conduzir um processo de desenvolvimento de software. O sucesso da aplicação independe do processo de desenvolvimento escolhido, desde que essa seja seguido corretamente com o comprometimento do cliente e da equipe de desenvolvedores. O Extreme Programming está entre as melhores metodologias por acreditar em um fator fundamental: a comunicação entre todos os participantes.
