---
id: 1180
title: Validações personalizadas no Rails 3
publishedAt: 2011-06-05T22:55:12-03:00
type: Post
ogImage: /images/og-images/1180.png

permalink: /2011/06/05/validacoes-personalizadas-no-rails-3/
dsq_thread_id:
  - "1008236005"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
O método [validates](http://api.rubyonrails.org/classes/ActiveModel/Validations/ClassMethods.html#method-i-validates) do Rails 3 [agrupou os antigos métodos](http://lindsaar.net/2010/1/31/validates_rails_3_awesome_is_true) de validação do Rails 2. Na versão 3, usamos o método validates acompanhado do atributo a ser validado e de suas respectivas regras de validação. Trabalhando em um novo projeto necessito validar CPFs e CNPJs, e consequentemente, precisei criar validações adicionais. Esse post mostra como realizei isso.

Inicialmente, criei na pasta `lib/` o arquivo `my_validations.rb`, com o seguinte conteúdo:

```ruby
class MyValidations < ActiveModel::Validator
  def validate(record)
    record.errors[:cpf] << "CPF (#{record.cpf}) é inválido" unless Cpf.new(record.cpf).valido?
    record.errors[:cnpj] << "CNPJ (#{record.cnpj}) é inválido" unless Cnpj.new(record.cnpj).valido?
  end
end
```

Veja que na primeira linha desse arquivo eu indico o encoding usado, para evitar problemas com os acentos. Utilizo o <a href="https://github.com/tapajos/brazilian-rails">brazilian-rails</a> para confirmar se os documentos informados são ou não válidos. No meu model, eu invoco o método <a href="http://api.rubyonrails.org/classes/ActiveModel/Validations/ClassMethods.html#method-i-validates_with">validates_with</a>, indicando a classe recém-criada.

```ruby
validates_with MyValidations
```

Esse foi um exemplo de como resolvi meu problema. Existem [outros](http://thelucid.com/2010/01/08/sexy-validation-in-edge-rails-rails-3/) [posts](http://omgbloglol.com/post/392895742/improved-validations-in-rails-3) sobre o assunto por aí, boa sorte!
