---
id: 660
title: sitemap.xml no Rails
date: 2009-06-07T14:30:52-03:00
author: Leonardo Faria
ogImage: /images/og-images/660.png
layout: post
guid: https://leonardofaria.net/?p=660
permalink: /2009/06/07/sitemapxml-no-rails/
dsq_thread_id:
  - "1000137532"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Usado para SEO, [Sitemaps](http://www.sitemaps.org/) servem para informar aos sites de busca como indexar as páginas de um site. Indexadores descobrem páginas com base em links no site e outros sites e o que os Sitemaps fazem é complementar esses dados, para permitir que os indexadores com suporte para Sitemaps peguem todos os URLs no Sitemap e aprendam sobre esses URLs usando os metadados associados.

Existem [sites](http://www.xml-sitemaps.com/) para gerar o arquivo, mas fazer isso no Rails não é complicado e faremos isso em 4 passos. A dica vem do [Tony](http://tonycode.com/wiki/index.php?title=Ruby_on_Rails_Sitemap_Generator) no livro [Advanced Rails Recipes](http://www.pragprog.com/titles/fr_arr/advanced-rails-recipes).

<!--more-->

### 1. Controller

Crie um controller chamado sitemap:

```shell
script/generate controller sitemap
```

### 2. Busca das URLs

Crie o método para listar todas as entradas do seu banco:

```ruby
class SitemapController < ApplicationController
  def sitemap
    @entries = Model.find(:all, :order => "updated_at DESC", :limit => 50000)
    headers["Content-Type"] = "text/xml"
    # set last modified header to the date of the latest entry.
    headers["Last-Modified"] = @entries[0].updated_at.httpdate    
  end
end
```

As entradas do arquivo sitemap.xml são limitadas em seu [protocolo](http://www.sitemaps.org/pt_BR/protocol.php) em 50000 registros. Você pode se quiser, gerar esse arquivo com as URLs de várias entidades, como o [Ilya Grigorik](http://www.igvita.com/) faz em [seu artigo](http://www.igvita.com/2006/11/24/google-yahoo-sitemaps-in-rails/).

### 3. View

Crie o arquivo sitemap.rxml

```ruby
xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  @entries.each do |entry|
    xml.url do
      xml.loc url_for(:controller => 'controller', :action => 'show', :id => entry.id, :only_path => false)
      xml.lastmod entry.updated_at.to_date
    end
  end
end
```

### 4. Atualização do arquivo de rotas

Crie a rota para que você tenha o arquivo www.seusite.com.br/sitemap.xml

```ruby
map.connect 'sitemap.xml', :controller => "sitemap", :action => "sitemap"
```

### Conclusão

Com o arquivo pronto, é só indicá-lo no [Google Webmaster](http://www.google.com/webmasters/sitemaps/) e no [Yahoo Site Explorer](http://siteexplorer.search.yahoo.com/). Caso queira conhecer mais sobre sitemaps, visite [essa página](http://www.google.com/support/webmasters/bin/answer.py?answer=40318&hl=pt_BR) do Google.
