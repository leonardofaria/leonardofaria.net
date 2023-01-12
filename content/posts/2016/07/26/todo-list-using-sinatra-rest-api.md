---
id: 1746
title: Todo list using a Sinatra REST API
date: 2016-07-26T19:01:16-03:00
type: Post
ogImage: /images/og-images/1746.png
layout: post
guid: https://leonardofaria.net/?p=1746
permalink: /2016/07/26/todo-list-using-sinatra-rest-api/
dsq_thread_id:
  - "5338692151"
categories:
  - rubyonrails
tags:
  - rubyonrails
---
I am attending to a [post-degree program](http://langara.ca/programs-and-courses/programs/web-and-mobile-app/index.html) and one of its courses is Server-Side Scripting. The professor gave us a project which students should create a project and my colleague and I created a [Sinatra REST API](http://sinatra-todo-api.herokuapp.com) for a [todo list application](http://leonardofaria.github.io/todo).

![Todo](/wp-content/uploads/2016/07/todo.gif) <span className="hidden">more</span>

The back end is a decent example of how to use Sinatra and Active Record to create simple APIs. In the [repository's readme](https://github.com/leonardofaria/todo-api#todo-api), I show how to install it and use it. In this post, I detail what I coded:

## Managing dependencies and configuring the database

First, I need to specify the dependencies for this project. Here are the gems:

```ruby
ruby '2.2.2'

source 'https://rubygems.org'

gem 'sinatra'
gem 'sinatra-cross_origin'
gem 'json'
gem 'activerecord'
gem 'pg'
gem 'sinatra-activerecord'
gem 'rake'

group :development do
  gem 'shotgun'
end
```

In this project, I use [shotgun](https://github.com/rtomayko/shotgun) to update my Sinatra app without restarting the server every time that I change my `app.rb`. The gem [sinatra-cross_origin](https://github.com/britg/sinatra-cross_origin) is needed to allow me perform requests externally. In addition, I use activerecord as ORM and [sinatra-activerecord](https://github.com/janko-m/sinatra-activerecord) to extends Sinatra with extension methods and Rake tasks.

The file `environment.rb` specifies the database credentials:

```ruby
configure :production, :development do
  set :show_exceptions, true

  db = URI.parse(ENV['DATABASE_URL'] || 'postgres://127.0.0.1/todo')

  ActiveRecord::Base.establish_connection(
    adapter:  db.scheme == 'postgres' ? 'postgresql' : db.scheme,
    host:     db.host,
    username: db.user,
    password: db.password,
    database: db.path[1..-1],
    encoding: 'utf8'
  )

  ActiveRecord::Base.class_eval do
    def self.reset_autoincrement(options={})
      options[:to] ||= 1
      case self.connection.adapter_name
        when 'MySQL'
          self.connection.execute "ALTER TABLE #{self.table_name} AUTO_INCREMENT=#{options[:to]}"
        when 'PostgreSQL'
          self.connection.execute "ALTER SEQUENCE #{self.table_name}_id_seq RESTART WITH #{options[:to]};"
        when 'SQLite'
          self.connection.execute "UPDATE sqlite_sequence SET seq=#{options[:to]} WHERE name='#{self.table_name}';"
        else
      end
    end
  end
end
```

I created a `reset_autoincrement` method that will be used in my seeds file. I will talk about it soon. I also created a cors.rb file that enables Cross Domain Resource Sharing (CORS).

```ruby
configure do
  set :allow_origin, :any
  set :allow_methods, [:get, :post, :options, :delete, :put]

  enable :cross_origin
end

options "*" do
  response.headers["Allow"] = "HEAD,GET,PUT,POST,OPTIONS,DELETE"
  response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
end
```

Last not the least, I need to create a `Rakefile` that will be used on my rake tasks:

```ruby
require 'sinatra/activerecord/rake'

namespace :db do
  task :load_config do
    require "./app"
  end
end
```

## Defining models

<center>
  <img src="/wp-content/uploads/2016/07/diagram.png" alt="Diagram" width="250" height="149" class="aligncenter size-full wp-image-1770" />
</center>

As you can see in ERD above, my todo list has two entities: `List` and `Task`.

```ruby
class Task < ActiveRecord::Base
  belongs_to :list

  validates :name, presence: true
  validates :list_id, presence: true
end

class List < ActiveRecord::Base
  has_many :tasks, dependent: :destroy

  validates :name, presence: true
  validates :color, presence: true, format: /\A#?(?:[A-F0-9]{3}){1,2}\z/i
end
```

I used the [`validates`](http://guides.rubyonrails.org/active_record_validations.html) method to ensure some valid data. The attribute color, for example, must be a hexadecimal color. The next step is creating the migrations:

```
$ rake db:create_migration NAME=lists
```

This command creates a file inside `db/migrate`. This is my migration file:

```ruby
class Lists < ActiveRecord::Migration
  def up
    create_table :lists do |t|
      t.string :name
      t.string :color
    end
  end

  def down
    drop_table :lists
  end
end
```

The same applies to Task:

`$ rake db:create_migration NAME=tasks`

```ruby
class Tasks < ActiveRecord::Migration
  def up
    create_table :tasks do |t|
      t.string :name
      t.references :list, foreign_key: true
    end
  end

  def down
    drop_table :tasks
  end
end
```

After defining the table schema, it's time to create the tables on the database:

`$ rake db:migrate`

## Creating the API routes

Here is the initial version of my `app.rb`:

```ruby
require 'sinatra'
require 'sinatra/cross_origin'
require 'sinatra/activerecord'
require './config/environments'
require './config/cors'
require './models/list'
require './models/task'
require 'json'

before do
  content_type :json
end

get '/lists' do
  List.all.to_json(include: :tasks)
end

get '/lists/:id' do
  List.where(id: params['id']).first.to_json(include: :tasks)
end

post '/lists' do
  list = List.new(params)

  if list.save
    list.to_json(include: :tasks)
  else
    halt 422, list.errors.full_messages.to_json
  end
end

put '/lists/:id' do
  list = List.where(id: params['id']).first

  if list
    list.name = params['name'] if params.has_key?('name')
    list.color = params['color'] if params.has_key?('color')

    if list.save
      list.to_json
    else
      halt 422, list.errors.full_messages.to_json
    end
  end
end

delete '/lists/:id' do
  list = List.where(id: params['id'])

  if list.destroy_all
    {success: "ok"}.to_json
  else
    halt 500
  end
end
```

The routes for Task entity are very similar:

```ruby
get '/tasks' do
  Task.all.to_json
end

get '/tasks/:id' do
  Task.where(id: params['id']).first.to_json
end

post '/tasks' do
  task = Task.new(params)

  if task.save
    task.to_json
  else
    halt 422, task.errors.full_messages.to_json
  end
end

put '/tasks/:id' do
  task = Task.where(id: params['id']).first

  if task
    task.name = params['name'] if params.has_key?('name')

    if task.save
      task.to_json
    else
      halt 422, task.errors.full_messages.to_json
    end
  end
end

delete '/tasks/:id' do
  task = Task.where(id: params['id'])

  if task.destroy_all
    {success: "ok"}.to_json
  else
    halt 500
  end
end
```

I added two extra routes to this application. One will render a `index.html` file, which I describe the project. The another one will populate the database with my initial data:

```ruby
get '/' do
  content_type :html
  send_file './public/index.html'
end

get '/refresh' do
  # Clean the database and create the initial data
  load './db/seeds.rb'
end
```

Time to create the `config.ru` file, responsable for start the application:

```ruby
require './app'
run Sinatra::Application
```

Everything is done, let's go:

`$ shotgun`

Hopefully, shotgun should return something like:

```
== Shotgun/WEBrick on http://127.0.0.1:9393/
[2016-08-03 19:51:50] INFO  WEBrick 1.3.1
[2016-08-03 19:51:50] INFO  ruby 2.2.2 (2015-04-13) [x86_64-darwin14]
[2016-08-03 19:51:50] INFO  WEBrick::HTTPServer#start: pid=13348 port=9393
```

After that, you will be able to do requests as I did:

<img src="/wp-content/uploads/2016/07/httpie.png" class="aligncenter" />

## Seeding initial data

The file `db/seeds.rb` populates the database with initial data:

```ruby
Task.delete_all
List.delete_all
Task.reset_autoincrement
List.reset_autoincrement

puts 'Creating sample lists'
colors = ['54b2a1', '95d5cf', '809bbe', '98d2f3', '80bf86', 'a3d49f']
['Todo', 'Movies', 'Supermarket'].each_with_index do |list, index|
  List.find_or_create_by(name: list, color: colors[index])
end

puts 'Creating sample tasks'
['Nathan\'s Assignment', 'Go to Meetup'].each do |task|
  Task.find_or_create_by(name: task, list: List.where(name: 'Todo').first)
end

['The Godfather', 'Star Wars'].each do |task|
  Task.find_or_create_by(name: task, list: List.where(name: 'Movies').first)
end

['Milk', 'Bread', 'Butter'].each do |task|
  Task.find_or_create_by(name: task, list: List.where(name: 'Supermarket').first)
end
```

## Deployment – Heroku

In order to deploy the app on Heroku, create a `Procfile`:

`web: bundle exec ruby app.rb -p $PORT`

Another option is clicking on the &#8220;Deploy to Heroku&#8221; button on the repository page. Heroku will look for the `app.json` file and setup all that you need. If you area curious about this file:

```js
{
  "name": "todo-api",
  "description": "A simple Sinatra REST API",
  "keywords": ["sinatra", "api", "activerecord", "reminders"],
  "repository": "https://github.com/leonardofaria/todo-api",
  "addons": [
    "heroku-postgresql:hobby-dev"
  ],
  "env": {
    "RACK_ENV": "production"
  },
  "scripts": {
    "postdeploy": "bundle exec rake db:migrate && bundle exec rake db:seed"
  }
}
```

This is not the focus of this post, then read the Heroku documentation [[1](https://devcenter.heroku.com/articles/heroku-button), [2](https://devcenter.heroku.com/articles/app-json-schema)] if you are interested on this. Pretty interesting.

## Final thoughts

I am not sure if I described everything but I hope that you got the main idea. You can take a look in the [source code](https://github.com/leonardofaria/todo-api) on Github, fork it or star it.

A [web app](http://leonardofaria.github.io/todo) (gif above) was also created to show how to use the API. The web app is also [available in Github](http://github.com/leonardofaria/todo).

## Other references

Part of my work was inspired in the following articles:

* [Create a lightweight REST service using Sinatra](https://www.xplatform.rocks/2014/04/28/create-a-lightweight-rest-service-using-sinatra/)
* [Deploying REST APIs to Docker Using Ruby and Sinatra](http://blog.cloud66.com/deploying-rest-apis-to-docker-using-ruby-and-sinatra/)
* [Uno! Use Sinatra to Implement a REST API](https://www.sitepoint.com/uno-use-sinatra-implement-rest-api/)
* [sinatra-activerecord-heroku](https://github.com/hatboysam/sinatra-activerecord-heroku)
