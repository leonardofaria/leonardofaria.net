---
id: 435
title: 'Edge Rails: método render mais esperto'
publishedAt: 2008-12-26T16:02:10-02:00
type: Post
ogImage: /images/og-images/435.png
layout: post
guid: https://leonardofaria.net/?p=435
permalink: /2008/12/26/edge-rails-metodo-render-mais-esperto/
dsq_thread_id:
  - "1031803297"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
Quem já está usando o Rails 2.2 já deve estar vendo um warning: no Rails 2.3, o método render está mais esperto e dispensará a instrução sobre qual tipo de renderização ele está fazendo. Confira: 

```ruby
# currently:
render :file => '/tmp/random_file.erb'
render :template => 'other_controller/action'
render :action => 'show'

# rails 2.3
render '/tmp/random_file.erb'
render 'other_controller/action'
render 'show'
render :show
```

Agora, você não precisa especificar se quer renderizar uma action, template ou file. Isso é bem legal e mostra cada vez mais o minimalismo do framework.
