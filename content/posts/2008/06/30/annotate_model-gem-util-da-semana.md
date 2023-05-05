---
id: 394
title: annotate_model, gem útil da semana
publishedAt: 2008-06-30T02:27:05-03:00
type: Post
ogImage: /images/og-images/394.png

permalink: /2008/06/30/annotate_model-gem-util-da-semana/
dsq_thread_id:
  - "1000137500"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Trabalhar com Rails é certeza de encontrar ótimo material para trabalhar/documentar sua aplicação. Tenho uma lista de plugins/gems úteis para o desenvolvimento, o que daria um enorme post. Seguindo os conceitos do Getting Real, rapidinho vou postando (é muito material).

O primeiro da lista é o <A href="https://github.com/ctran/annotate_models/">annotate_model</A>, um gem que gera para cada model as informações da estrutura da tabela daquela entidade. Por exemplo:

```ruby
# == Schema Information  
# Schema version: 20080628203259  
#  
# Table name: comments  
#  
# id :integer(11) not null, primary key  
# name :string(255)  
# email :string(255)  
# body :text  
# code_id :integer(11)  
# created_at :datetime  
# updated_at :datetime  
#

class Comment < ActiveRecord::Base
  # ...
end
```
 Uma forma de se conhecer os atributos de uma entidade é, a partir do script/console, digitar: `Model.new.attributes`, entretanto com o gem, o conhecimento dessas informações fica bem mais fácil. Após instalada (sudo gem install annotate-models), bastar executar o comando annotate na pasta do seu aplicativo. Simples, rápido e quebra um galhão.
