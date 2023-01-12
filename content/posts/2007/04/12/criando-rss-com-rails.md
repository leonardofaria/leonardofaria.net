---
id: 230
title: Criando RSS com Rails
date: 2007-04-12T22:27:15-03:00
type: Post
ogImage: /images/og-images/230.png
layout: post
guid: https://leonardofaria.net/2007/04/12/criando-rss-com-rails/
permalink: /2007/04/12/criando-rss-com-rails/
dsq_thread_id:
  - "1000136958"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
**Nota**: antes do artigo vale lembrar do [curso online de Ruby on Rails + Flex](http://www.egenial.com.br/curso/) do [Carlos](http://www.egenial.com.br). Ele já fez [alguns experimentos](http://blog.egenial.com.br/?p=42) com esses dois ambientes e rolou um resultado bacana. Vamos ao artigo então :P

Não sou o maior especialista em padrões de distribuição de conteúdo. Existe gente melhor para isso, mas em um projeto meu, precisei da criação de feeds. O primeiro passo é mapear o arquivos routes.rb (config/routes.rb) do seu projeto.

<span className="hidden">more</span>

```ruby
map.resources :articles, :collections => {:rss => :get}
```

Esse mapeamento vai permitir que você tenha o seguinte endereço: www.meusite.com/articles/rss. Feito isso, abra seu controller (products_controller.rb) e adicione o método RSS, que buscará os últimos registros do banco.

```ruby
def rss
  @articles = Article.find(:all, :limit => 10, :order => 'created_at DESC')
  render :layout => false
end
```

Observe o &#8220;render :layout => false&#8221;. Ele evita que o layout seja carregado, que não será necessário no seu feed. Feito isso, é necessário a criação da view. Na pasta view, crie o arquivo rss.rxhml.

```ruby
xml.instruct! :xml, :version=>"1.0"
xml.rss(:version=>"2.0"){
  xml.channel{
    xml.title("Meu site")
    xml.link("http://www.meusite.com/")
    xml.description("Esse é meu site!")
    xml.language('en-uk')
      for article in @articles
        xml.item do
          xml.title(article.title)
          xml.description(article.body)     
          xml.author("contato@meusite.com")               
          xml.pubDate(article.created_at.strftime("%a, %d %b %Y %H:%M:%S %z"))
          xml.link(article_url(article))
          xml.guid(article_url(article))
        end
      end
  }
}
```

Esse é um modelo básico. Algumas aulinhas sobre o padrão podem garantir mais diversão. Algo a mais que você pode fazer é disponibilizar o endereço do feed na tag
