---
id: 1244
title: Geração de PDFs indolor no Rails 3
publishedAt: 2011-08-31T00:50:10-03:00
type: Post
ogImage: /images/og-images/1244.png

permalink: /2011/08/31/geracao-de-pdfs-indolor-no-rails-3/
dsq_thread_id:
  - "5338248113"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Em um trabalho recente, precisei gerar relatórios em PDF. Considerei algumas soluções e optei por uma que não me fizesse perder os cabelos e reescrever código: <A href="https://github.com/mileszs/wicked_pdf">wicked_pdf</A>.

wicked_pdf usa [wkhtmltopdf](http://code.google.com/p/wkhtmltopdf/), um incrível utilitário que converte HTML para PDF, usando Webkit e QT. Você não precisa compilá-lo, basta apenas copiar o binário certo do site do projeto.

### Uso

Após instalar a gem em seu sistema, você pode gerar os PDFs sem escovar bits: adicione o formato pdf entre as possibilidades de respostas de uma action, como abaixo:

```ruby
def report
  @order = Order.find(params[:id])

  respond_to do |format|
    format.html
    format.pdf do
      render :pdf => "order-#{params[:id]}"
    end
  end  
end
```

Se quiser, você pode usar a mesma view do formato html:

```ruby
render :pdf => "order-#{params[:id]}", :template => "/orders/report.html.erb"
```

O readme da gem apresenta as informações pertinentes para seu uso e não é meu objetivo reproduzi-lo aqui, apenas chamo a atenção para um detalhe: em hosts compartilhados, você precisará definir o path correto do wkhtmltopdf. Para isso, você pode criar um initializer com o seguinte conteúdo:

```ruby
WickedPdf.config = { :exe_path => '/home/meuusario/wkhtmltopdf' }
```

PS. você pode usar o wkhtmltopdf no PHP com o <A href="https://github.com/knplabs/snappy">Snappy</A>. Não testei, mas pode ser uma boa opção.
