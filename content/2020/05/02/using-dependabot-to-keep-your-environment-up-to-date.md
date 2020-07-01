---
id: 2202
title: Using Dependabot to keep your environment up to date
date: 2020-05-02T11:41:56-03:00
author: Leonardo Faria
ogImage: /images/og-images/2202.png
layout: post
permalink: /2020/05/02/using-dependabot-to-keep-your-environment-up-to-date
categories:
  - javascript
  - devops
  - git
tags:
  - javascript
  - devops
  - git
---

Adding dependencies in a project is seen as a good way to not reinvent the wheel but at the same time it can be concerning in many different aspects:
- Versioning: sometimes dependencies can require specific versions of other dependencies and this can cause hiccups in your app;
- Bundling: you need to be careful here to not bring extra code that will bloat your bundles;
- Updating: JavaScript moves fast and if you don't update packages regularly, you'll play Jenga in the future.

There are different tools to cover the update part like [Dependencies.io](https://dependencies.io), [Snyk](https://snyk.io/) and [Dependabot](https://dependabot.com/). Since I have been using Dependabot for a while, I decided to write about my experience.

Dependabot is a tool acquired by GitHub one year ago that checks dependencies files from different languages (Ruby, JavaScript, Python, PHP, Elixir, to name a few) and finds new versions of libraries you are using in your project. Here is the setup:

![Dependabot screenshot](/wp-content/uploads/2020/05/dependabot.jpg)

Daily updates can be overwhelming and I think that weekly updates have a better cost/benefit. Also, I assign myself the Pull Requests so I can get notifications as soon they are opened.

## How to use Dependabot effectively

Dependabot includes in each PR release notes, changelogs, commits links and vulnerability details whenever available. This is useful because you can take a look at the information and decide to proceed or not.

However, as pragmatic programmers, we want to ensure things won't break. The PR details are important but more than that, we want a simulation of all (or almost all) deliverables that the project has.

![CI Integration](/wp-content/uploads/2020/05/semaphore.jpg)

This screenshot shows what happens every time a PR is opened in the components library codebase of my work.

- **Tests (Jest / Bundle)**: the Jest task will test the React components while the Bundle task will simulate the bundling commands we run when we want to update the package in the NPM registry;
- **Linters (Stylesheets / JavaScript)**: the stylesheet files follow a custom sass-lint setup and the JS code follows a series of ESLint rules. If a PR introduces a new version of a linter with new rules we will be able to capture that;
- **Cypress (Screenshot Testing / Accessibility Testing)**: if a new package introduces changes that may reflect in the look and feel of components, Cypress will capture the difference, screenshot it and store in S3. Since Cypress needs a live version of the documentation website, we also get the Gatsby build process covered.

With all these steps, it is very unlikely an external package will break our master branch. Kudos to my co-worker Grant Lee that also works in this project.
