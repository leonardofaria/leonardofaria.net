---
id: 846
title: O que é Ruby on Rails?
date: 2009-11-09T21:10:15-02:00
author: Leonardo Faria
ogImage: /images/og-images/846.png
layout: post
guid: https://leonardofaria.net/?p=846
permalink: /2009/11/09/o-que-e-ruby-on-rails/
dsq_thread_id:
  - "1000136331"
categories:
  - academic
  - rubyonrails
tags:
  - academic
  - rubyonrails
---
A essa altura do campeonato todo mundo já deve saber o que vem a ser o framework Ruby on Rails. Minha monografia e meu trabalho de conclusão de curso da Faculdade foram sobre o [**autosimulado**](http://www.autosimulado.com.br). Na monografia fiz uma introdução sobre as características do framework, reproduzido abaixo:

## Ruby on Rails

O framework Ruby on Rails foi extraído de um sistema para gerenciamento de projetos chamado Basecamp. A primeira versão do framework foi oficialmente lançada em 25 de Julho de 2004 e seu desenvolvimento conta com colaboradores em todo o mundo liderados pelo programador dinamarquês David Heinemeier Hansson.

### MVC

Um padrão de projeto descreve e provê uma solução para um problema freqüente, sendo genérico e reusável. São criados a partir de problemas de problemas comuns enfrentados no desenvolvimento de projetos de software.  
A criação de componentes reutilizáveis é uma das técnicas mais exploradas em Engenharia de Software. O uso de componentes diminui o tempo de desenvolvimento e a taxa de erros de codificação. Um padrão pode ser entendido como a abstração de detalhes sobre a implementação de um software.

<center>
  <img src="/wp-content/uploads/2009/11/imagem20.jpg" alt="MVC" title="MVC" />
</center>


<!--more-->


O padrão de projeto MVC divide o desenvolvimento de um aplicativo em três camadas: View (Visão), Controller (Controle) e Model (Modelo). A separação das camadas permite o aumento da flexibilidade e reuso do código. Sem essa separação, as funcionalidades podem ficar mescladas, o que acarreta um maior esforço para eventuais manutenções, pois as responsabilidades podem ser difundidas entre as camadas.  

A camada Modelo representa o estado da aplicação. É responsável por fazer a interação da aplicação com a fonte de dados, muito freqüentemente um banco de dados. Quando existe a necessidade de se guardar o estado da aplicação, é através dessa camada que as informações manipuladas pelo sistema podem ser armazenadas na base de dados. É na camada Modelo que são incorporadas as regras de negócio de um aplicativo.  

A camada Controle é responsável por receber os dados do usuário e definir o fluxo da aplicação, invocando alterações dos dados da camada Modelo.  

A camada Visão é responsável por apresentar a aplicação ao usuário. Nas aplicações Web, essa camada é construída com HTML, CSS e Javascript.

### Recursos e características

DRY – Don’t Repeat Yourself, em português, Não Se Repita é um conceito intrínseco do Ruby on Rails. Não é preciso copiar trechos de código por todo aplicativo. Para reaproveitamento de código, o desenvolvedor conta com os métodos helpers e com as partials, arquivos que podem ser incluídos no seu aplicativo reduzindo redundâncias.  

Helpers são uma importante funcionalidade do framework. Um helper é um módulo que contém funções para auxiliar a camada View do aplicativo, retirando lógicas complexas do código da apresentação. Ruby on Rails conta com helpers para diversas funções, incluindo formatação de datas, moedas, números, formulários HTML, Javascript, entre outros. Alguns exemplos da aplicação de helpers:

```ruby
distance_of_time_in_words(Time.now, Time.now + 33, false)
   1 minute

human_size(123_456)
   120.6 KB

number_to_currency(234.56, :unit => "R$ ", :precision => 2)
   R$ 235.56

number_to_percentage(33.66666)
   33.667%

number_to_phone(2125551212, :area_code => true, :delimiter => " ")
   (212) 555 1212

truncate(@text, 9)
    Hello wor...

pluralize(1, "person") and pluralize(2, "person")
   1 person and 2 people
```

Além dos helpers, existem ainda os plugins, pequenas bibliotecas que adicionam novas funcionalidades ao framework sem que haja necessidade da alteração do seu núcleo e que permitem ser reaproveitados em diferentes projetos.  
O framework Ruby on Rails possui suporte aos mais comuns banco de dados do mercado, como IBM DB2, Microsoft SQL Server, Oracle OCL8, PostgreSQL, MySQL e SQLite. Para definir qual banco utilizar, é necessário apenas especificar os dados de conexão em um único arquivo.  

Outra característica interessante são os perfis de execução do aplicativo: desenvolvimento, produção e teste. No perfil desenvolvimento, o programador encontra mensagens de log detalhadas para cada requisição no aplicativo. Além disso, erros são apresentados com mensagens claras das inconsistências. O modo teste é utilizado para testes funcionais do aplicativo e produção é o modo utilizado para quando o aplicativo estiver pronto e estável. Para cada um desses perfis é possível utilizar um banco de dados diferente, evitando conflitos entre dados de testes, desenvolvimento e produção.  

Além disso, o framework já foi criado com suporte integrado a duas bibliotecas Javascript bastante conhecidas: Prototype, que manipula as interações dos objetos do documento, e Script.aculo.us, responsável por criação de efeitos visuais com Javascript.

<center>
  <img src="/wp-content/uploads/2009/11/imagem21.jpg" alt="Ciclo de requisições" title="Ciclo de requisições" />
</center>

A figura acima exemplifica o ciclo de requisições no Ruby on Rails. Ao fazer uma requisição de uma página, o navegador faz uma chamada ao servidor – normalmente Apache – que é encaminhada para o dispatcher. O dispatcher é o responsável por transformar a URL do browser em uma URL que é entendida pelo framework. Em seguida, o Action Controller é invocado para decidir o que fazer com a requisição. Caso seja necessária alguma interação com o banco de dados, o Active Record entra em ação. Também é possível que o Action Mailer seja invocado, caso seja necessário enviar algum email e a resposta da requisição é processada pelo Action View.  

Ruby on Rails é composto por 5 módulos independentes:

* O módulo Active Record conecta objetos de negócio com tabelas do banco de dados para criar um modelo de domínio onde lógica e dados se encontram presentes em conjunto. Trata-se portanto de uma implementação de um padrão de mapeamento objeto-relacional (ORM), baseado em convenções. Por exemplo, para uma classe Book espera-se a existência de uma tabela Books. Cada linha dessa tabela corresponde a um objeto da classe Book. Atributos da classe representarão as colunas da tabela Books, com os mesmos nomes, por padrão.
* O módulo Action Pack compreende o Action Controller e o Action View. O Action Controller coordena a interação entre o usuário, as visões e o modelo. Ele é responsável por rotear URLs para ações internas dos controllers, gerenciando URLs de fácil leitura para as pessoas; por responder o usuário exibindo uma view ou um arquivo qualquer e por gerenciar cookies e sessões. Já o Action View é responsável por compor toda a funcionalidade necessária para renderizar views, mais comumente gerando código HTML e XML para o usuário.
* O módulo Action Support agrupa várias classes úteis e extensões de bibliotecas padrão, que foram consideradas relevantes para aplicações com Ruby on Rails.
* O módulo Action Mailer é um framework poderoso para serviços de entrega e recebimento de emails.
* O módulo Action WebServices provê uma maneira de criar APIs inter-operáveis com Rails. Na versão 2.0 do framework esse módulo foi retirado, devido a implementação do modelo Rest no Rails.

### Estrutura de um aplicativo Ruby on Rails

<center>
  <img src="/wp-content/uploads/2009/11/imagem24.jpg" />
</center>

A estrutura de um projeto Rails compreende a criação dos diretórios especificados na acima.

* A pasta “app” possui subdiretórios que armazenam controllers, helpers, models e views.
* A pasta “config” abriga diversos arquivos de configuração, incluindo o responsável por determinar qual o banco de dados será utilizado.
* A pasta “db” possui as migrations. Migrations são um recurso do Rails onde o desenvolvedor escreve arquivos Ruby em uma DSL exclusiva para manipular o banco de dados. Desse modo, é possível criar tabelas, campos e modificar a estrutura de banco de dados sem precisar escrever uma linha de SQL ou utilizar outro aplicativo.
* A pasta “lib” é usada para que o desenvolvedor salve nesse local suas bibliotecas externas do projeto.
* A pasta “log” é utilizada para salvar os logs gerados em tempo de execução do aplicativo. As ações executadas no aplicativos são salvas nos arquivos de log dessa pasta.
* A pasta “public” é usada para armazenar as imagens, folhas de estilo e documentos Javascript do aplicativo.
* A pasta “script” possui scripts usados para auxiliar o desenvolvedor. Com esses scripts, o programador pode gerar novos controllers e models pela linha de comando. Além disso, essa pasta possui um programa server, que é um servidor web para desenvolvimento.
* A pasta “test” possui arquivos para realização de testes unitários, funcionais e de integração.
* A pasta “vendor” é usada para armazenar os plugins do projeto e em alguns casos, armazenar o próprio framework.
