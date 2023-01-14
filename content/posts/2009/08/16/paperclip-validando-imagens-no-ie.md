---
id: 691
title: Paperclip validando imagens no IE
publishedAt: 2009-08-16T21:47:57-03:00
type: Post
ogImage: /images/og-images/691.png

permalink: /2009/08/16/paperclip-validando-imagens-no-ie/
dsq_thread_id:
  - "1060851220"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
No **[autosimulado](http://www.autosimulado.com.br)**, tive um problema onde o IE (sempre ele) não validava o mime-type de uma imagem. Mesmo tentando enviar uma imagem JPG – imagem permitida – o IEca não aceitava o arquivo. A solução:

```ruby
validates_attachment_content_type :image,
  :content_type => [
    'image/jpeg',
    'image/pjpeg', # for progressive jpeg (IE mine-type for regular jpeg)

    'image/png',
    'image/x-png', # IE mine-type for PNG

    'image/gif'
]
```

O (pseudo)browser da turma do tio Ballmer e cia não compreende o mime-type `image/jpeg` e sim o `image/pjpeg`.
