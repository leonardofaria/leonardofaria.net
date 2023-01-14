---
id: 892
title: Internacionalização em labels
publishedAt: 2009-11-22T19:49:16-02:00
type: Post
ogImage: /images/og-images/892.png
layout: post
guid: https://leonardofaria.net/?p=892
permalink: /2009/11/22/internacionalizacao-em-labels/
dsq_thread_id:
  - "1000137222"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Desenvolvendo uma aplicação onde apliquei os recurso de internacionalização do Rails, percebi que o framework [não traduz os valores dos labels](https://rails.lighthouseapp.com/projects/8994/tickets/745-form-label-should-use-i18n) para a tradução do atributo.

Para corrigir isso, existem duas formas: um plugin chamado [i18n_label](http://github.com/iain/i18n_label) ou <s>uma gambiarra</s> um recurso técnico avançado adaptado a condições tecnológicas precárias em um determinado momento:

```ruby
module ActionView
  module Helpers
    class InstanceTag
      def to_label_tag_with_i18n(text = nil, options = {})
        text ||= object.class.human_attribute_name(method_name) if object.class.respond_to?(:human_attribute_name)

        to_label_tag_without_i18n(text, options)
      end

      alias_method_chain :to_label_tag, :i18n
    end
  end
end
```

Cole o código acima em um arquivo da pasta `lib`, por exemplo e o inclua com `require` no `environment.rb`.
