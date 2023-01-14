---
id: 316
title: Prepare-se para o Rails 2.0
publishedAt: 2007-10-12T14:54:13-03:00
type: Post
ogImage: /images/og-images/316.png

permalink: /2007/10/12/prepare-se-para-o-rails-20/
dsq_thread_id:
  - "1531150042"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
A versão 2.0 do framework Rails está por vir e isso significa algumas mudanças e novidades. Já [existem](http://blog.viget.com/whats-coming-in-rails-20/) [vários](http://mentalized.net/journal/2007/03/13/rails_20_deprecations/) [posts](http://weblog.rubyonrails.org/2007/9/30/rails-2-0-0-preview-release) na [blogosfera](http://www.google.com/search?client=safari&rls=pt-pt&q=rails+2.0&ie=UTF-8&oe=UTF-8) mostrando as particulariedades da nova versão. Vou falar de algumas delas:

**Paginação**: o paginate foi removido. Uma das soluções mais bacanas é usar o plugin [Will Paginate](http://errtheblog.com/post/929), tão simples de usar quanto ao paginador original.

**Configuração do ambiente**: configurar o environment.rb pode ser meio embaraçoso. A configuração agora será dividida, o que facilitará no compartilhamento entre diversas aplicações, por exemplo.

**Query Cache**: o David Hansson fez uma interessante [apresentação](http://s3.amazonaws.com/ppt-download/a-peak-at-rails-20-3461.pdf) sobre o Rails 2.0 na RailsConf desse ano, e deve vir algo interessante no gerenciamento de cache de consultas a banco de dados.

**Autenticação HTTP**: também mostrado na apresentação da RailsConf desse ano e previsto para a próxima versão.

**Performance**: implementado uma forma simples de cache para javascript e folhas de estilo.

```html
<%= javascript_include_tag :all, :cache => true %>
<%= stylesheet_link_tag :all, :cache => true %>
```

A [versão **1.2.4**](http://weblog.rubyonrails.com/2007/10/5/rails-1-2-4-maintenance-release) do framework já inclui alertas de tudo que sairá na versão 2.0. O [Davis Cabral](http://blog.impactmedia.com.br/) publicou [**um script**](http://blog.impactmedia.com.br/articles/2007/10/4/rails-2-0-suas-apps-so-compatveis) que verifica se sua aplicação já está preparada para as mudanças
