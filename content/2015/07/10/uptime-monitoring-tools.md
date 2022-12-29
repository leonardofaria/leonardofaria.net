---
id: 1526
title: Uptime monitoring tools
date: 2015-07-10T08:26:05-03:00
type: Post
ogImage: /images/og-images/1526.png
layout: post
guid: https://leonardofaria.net/?p=1526
permalink: /2015/07/10/uptime-monitoring-tools/
dsq_thread_id:
  - "3921279040"
---
Sometimes people cann't believe in their infrastructure. This can be easily understood because maintaining complex software integrates several pieces of information. Moreover, people sometimes hire bad IT solutions and as a result, <s>shit</s> accidents happen.

I have been using some tools to report me web server down time. Here we go:

* [monitor.us](http://www.monitor.us/): it is a powerful tool that provides several features. I am currently using it to monitor a specific term in a specific page. It's a free feature and it can check a website from 2 different countries
* [Pingdom](https://www.pingdom.com/): it looks like a full solution to analyse performance issues and downtime
* [Pingoou](http://pingoou.com.br/): this a Brazilian option. It offers up to 3 URLs in the free account and notifications via SMS, Campfire, Hipchat and email in the paid accounts
* [SiteUptime](http://www.siteuptime.com/): 1 monitor for free each 30 minutes. Actually is not the best deal
* [UptimeRobot](http://www.uptimerobot.com/): it monitors up to 50 websites for free

## Building it own tool

You can alternatively build your own monitoring tool to check if a website is up or down. The concept is pretty simple: you can use your favorite language to create a script that loads a page and then you are able to check a specific string in the document. In the following example I used Ruby and Mechanize gem to request a status page.

```ruby
gem 'mechanize', '2.7.2'
require 'mechanize'
require 'pony'

def sendmail(to, subject, body)
	Pony.mail({
	  :to => to,
	  :via => :smtp,
	  :subject => subject,
	  :body => body,
	  :charset => 'UTF-8',
	  :via_options => {
		:address => 'smtp.sendgrid.net',
			:port => '587',
			:domain => 'heroku.com',
			:user_name => ENV['SENDGRID_USERNAME'],
			:password => ENV['SENDGRID_PASSWORD'],
			:authentication => :plain,
			:enable_starttls_auto => true
	  }
	})
end

mechanize = Mechanize.new{|a| a.ssl_version, a.verify_mode = 'SSLv3', OpenSSL::SSL::VERIFY_NONE}
page = mechanize.get('https://www.yourwebsite.com/mytesturl')

content = ""

if page.body.include?('refused')
	content = 'Error: Connection Refused'
end

if content
	puts content
	sendmail("email@domain.com", "Monitor", content)
end
```

In this case, I use Heroku to run this script. The emails are delivered by SendGrid, via Pony gem. There are no costs in the process.

_This post is also [published in coderwall](https://coderwall.com/p/9nqnwg/uptime-monitoring-tools)_.
