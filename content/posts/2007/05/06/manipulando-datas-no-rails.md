---
id: 244
title: Manipulando datas no Rails
publishedAt: 2007-05-06T18:20:44-03:00
type: Post
ogImage: /images/og-images/244.png
layout: post
guid: https://leonardofaria.net/2007/05/06/manipulando-datas-no-rails/
permalink: /2007/05/06/manipulando-datas-no-rails/
dsq_thread_id:
  - "5338864321"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Em nossas aplicações geralmente trabalhamos com datas. Em nossos bancos de dados, temos sempre um campo do tipo DATETIME. Mas como formatar as datas e evitar tosqueiras como Mon May 18 00:00:00 -0400 2007?

Estou postando duas formas bacanas de formatar datas no Rails.

### 6 de Maio de 2007

Para formatar as datas desse modo, basta usar:

```ruby
<%= mydate.strftime("%d de %B de %Y") %>
```

Mas a saída é em inglês. Para traduzir, basta incluir em seu environment.rb:

```ruby
Date::MONTHNAMES = [nil] + %w(Janeiro Fevereiro Março Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro)  
Date::DAYNAMES = %w(Domingo Segunda-Feira Terça-Feira Quart-Feira Quinta-Feira Sexta-Feira Sábado)  
Date::ABBR_MONTHNAMES = [nil] + %w(Jan Fev Mar Abr Mai Jun Jul Aug Sep Out Nov Dez)  
Date::ABBR_DAYNAMES = %w(Dom Seg Ter Qua Qui Sex Sab)

class Time  
  alias :strftime_nolocale :strftime  
  def strftime(format)  
    format = format.dup  
    format.gsub!(/%a/, Date::ABBR_DAYNAMES[self.wday])  
    format.gsub!(/%A/, Date::DAYNAMES[self.wday])  
    format.gsub!(/%b/, Date::ABBR_MONTHNAMES[self.mon])  
    format.gsub!(/%B/, Date::MONTHNAMES[self.mon])  
    self.strftime_nolocale(format)  
  end  
end

```

O que o algoritmo faz acima é redeclarar as constantes de Data. Logo em seguida o def strftime traduz também o Time, para retornar as mensagens também em português.

### À cinco minutos atrás

Essas datas amigáveis podem ser facilmente formatadas em Rails usando simplesmente:

```ruby
< %= distance_of_time_in_words_to_now(mydate) %>
```

Entretanto, as frases estão em inglês. Para ter as datas em português, crie um arquivo .rb na sua pasta lib e cole o seguinte código.

```ruby
module ActionView
  module Helpers
    module DateHelper

      def distance_of_time_in_words(from_time, to_time = 0, include_seconds = false)
        from_time = from_time.to_time if from_time.respond_to?(:to_time)
        to_time = to_time.to_time if to_time.respond_to?(:to_time)
        distance_in_minutes = (((to_time - from_time).abs)/60).round
        distance_in_seconds = ((to_time - from_time).abs).round

        case distance_in_minutes
          when 0..1
            return (distance_in_minutes == 0) ? 'menos de um minuto' : '1 minuto' unless include_seconds
            case distance_in_seconds
              when 0..4   then 'menos de 5 segundos'
              when 5..9   then 'menos de 10 segundos'
              when 10..19 then 'menos de 20 segundos'
              when 20..39 then 'meio minuto'
              when 40..59 then 'menos de um minuto'
              else             '1 minuto'
            end

          when 2..44           then "#{distance_in_minutes} minutos"
          when 45..89          then '1 hora'
          when 90..1439        then "#{(distance_in_minutes.to_f / 60.0).round} horas"
          when 1440..2879      then '1 dia'
          when 2880..43199     then "#{(distance_in_minutes / 1440).round} dias"
          when 43200..86399    then '1 mês'
          when 86400..525959   then "#{(distance_in_minutes / 43200).round} meses"
          when 525960..1051919 then '1 ano'
          else                      "mais de #{(distance_in_minutes / 525960).round} anos"
        end
      end

    end
  end
end

```

O código é uma função escrita pelo [Carlos Brando](http://www.nomedojogo.com/2007/04/15/datas-amigveis-em-portugus/). Depois da criação do arquivo .rb, chame-o em seu environment.rb:

```ruby
require "nome_do_arquivo_criado_acima"
```
