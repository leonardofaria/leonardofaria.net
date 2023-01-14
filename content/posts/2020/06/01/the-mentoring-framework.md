---
id: 2204
title: The Mentoring Framework
publishedAt: 2020-06-01
type: Post
ogImage: /images/og-images/2204.png
permalink: /2020/06/01/the-mentoring-framework
categories:
  - career
tags:
  - career
---

Last October I created a Mentoring Framework at work. The goal was creating a project from scratch using Ruby on Rails and in this journey, learning more about Ruby, Frontend, Project Management and Git, Databases and DevOps. 

This Mentoring Framework is similar to what bootcamps do but the difference here is I am sharing a list of suggested features / things to learn and the person can focus in what is important for them. 

**In a nutshell: Goals → Project → Execution → Knowledge (and profit)**

The document is divided into 4 main sections: [Before start](#before-start), [Project ideas](#project-ideas), [Execution](#execution), [Examples](#examples) and [Resources](#resources).

## Before start

What are your main goals? For the following list, pick: "basic understanding", "intermediate understanding", "advanced understanding". This will help to identify where you are going to invest more time and energy.

- Learn Ruby / Ruby on Rails
- Learn Frontend
- Learn Project Management and Git
- Learn Databases
- Learn DevOps

## Project ideas

Once you know your main goals, you need a project. Check the following two ideas:

### Book store

Imagine you want to sell books online. What kind of features does a bookstore have?

- List books per title
- List books per authors
- List books per categories
- Search books
- Buy books
- List your orders

### Pet adoption website

Imagine you want to create a website for an organisation that takes care of animals (in British Columbia we have SPCA). What kind of features does a pet adoption website have?

- List pets per type (dog, cat and others)
- List pets per size (or breed, or age)
- List pets per location
- Search pet per name
- Request an adoption
- List your adoption requests

## Execution

Once you know your main goals and you have an idea, it is time to work. Check the list of tasks you will be doing:

### Learn Ruby on Rails

- Use scaffolds to create your entities (basic understanding) or create your own controllers, models and views (intermediate)
- Add authentication with Devise (basic understanding) or create your own (intermediate). Or use Devise with Oauth authentication (Facebook, Google, etc - intermediate)
- Add friendly URLs with a gem (basic) or create your own solution (intermediate)
- Add search (intermediate)
- Add tests for all your code
- Create seeds for your data so you don't need to create manually data
- Send email to users (intermediate)
- Create different user roles (intermediate) 
- Add pagination (basic)
- Add localization (intermediate)
- Add a tag system (intermediate)
- Add images (intermediate)

### Learn Frontend

- Use Tailwind CSS (basic) or your own CSS/SASS (intermediate) to create a beautiful layout
- Use Turbolinks (advanced / optional)
- Add basic animations - ex.: when adding a book in the cart show some animation (advanced/optional)
- Add Google Maps in your app (intermediate)
- Add Google Places in your users
- Add a carousel with photos
- Add Pagination with Ajax or endless pagination (advanced)

### Learn Project Management and Git

- Use Github Project to organize your features
- Use feature branches in Git, create PR for all your features

### Learn Databases

- Write plain SQL to find relevant information. A few examples:
  - Find best-sellers authors in the book store
  - Find the number of orders or pet requests per city
  - Find which day has more sales
- Add charts in your app to expose the data

### Learn DevOps

- Deploy the website to Heroku (easy/intermediate) or AWS (advanced)
- Setup CI in Heroku (easy/intermediate) 
- Add Airbrake to monitor errors in your app (easy)
- Buy a domain, set up Cloudflare (advanced/optional)

## Examples

![Website screenshots](/wp-content/uploads/2020/06/the-mentoring-framework.png)

- [SPCA](https://adopt.spca.bc.ca)
- [Petfinder](https://www.petfinder.com/)

## Resources

- Courses: [Ruby on Rails 5 Essential Training](https://www.linkedin.com/learning/ruby-on-rails-5-essential-training) and [Ruby on Rails 6 Essential Training](https://www.linkedin.com/learning/ruby-on-rails-6-essential-training) - The first course is longer than the second.
- Screencasts: [RubyTapas](https://rubytapas.com), [GoRails](https://gorails.com)