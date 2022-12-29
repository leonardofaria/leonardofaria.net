---
id: 1815
title: Thoughts on building components libraries
date: 2018-02-04T16:24:53-02:00
type: Post
ogImage: /images/og-images/1815.png
layout: post
guid: https://leonardofaria.net/?p=1815
permalink: /2018/02/04/thoughts-building-components-libraries/
dsq_thread_id:
  - "6458404438"
categories:
  - javascript
tags:
  - javascript
---

A few months ago we started using React at [Thinkific](https://thinkific.com). One of the challenges of using React is creating reusable components not only from a look and feel perspective but also shareable in different projects.

I didn't create this concept of elements (or components) library. To be honest, there are podcasts, courses, and examples everywhere about it but how to even start it? When you start creating a project from scratch you face several questions:

  * How to style components? Sass? Stylus? styled-components?
  * How to show the elements?
  * How to build the library? Babel? Webpack?
  * How to publish the library? To NPM or not NPM?
  * How to use integrations and CI in your favour?

Lots of decisions and you may not know all the answers. Startup Life™ doesn't let you do whatever you want – everything has a cost and a trade-off. Why am I talking all this story? Because I wanted to share my thoughts about it and I created a [**repository to document**](https://github.com/leonardofaria/leozera-ui) what we are doing.  
<span className="hidden">more</span>

## Styling

[styled-components](https://www.styled-components.com/) changed the way we style things however many people still use Sass, especially when they come from Rails (our case for instance).

If you have something already done in Sass there is no reason for migrating to styled-components. Also, if you keep everything in Sass you can still export your compiled styling easily – like a bootstrap.css.

## Showing elements

[Storybook](https://storybook.js.org/) is probably the way to go when the topic is showing a component and its properties. My two cents about Storybook:

* They have a [really good Slack](https://now-examples-slackin-nqnzoygycp.now.sh/), which is an endless source of knowledge.
* [Addons](https://storybook.js.org/addons/addon-gallery/) are pretty useful and it is worth spending a time testing them. [Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs), for instance, lets you change props via browser. Quite handy.
* You can host your Storybook using Github Pages. It's pretty straightforward and projects like [gh-pages](https://github.com/tschaub/gh-pages) or [branchsite](https://github.com/enriquecaballero/branchsite) get job done.
* You can also host your Storybook using [Netlify](https://www.netlify.com/). To be honest, this is my favourite approach because you can build the master branch as official documentation and build all additional commits – and get them in [Pull Requests](https://github.com/leonardofaria/leozera-ui/pull/1)!  
![Netlify hook in PR](/wp-content/uploads/2017/12/netlify.png)

## Building the library

There are a few different approaches here. I am using Babel to compile individually the ES6 component and webpack to build everything in one file.

At the moment I write this post [webpack 4](https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2) is beta. The performance improvements are quite stunning.

## Publishing the library

Again, there are different approaches to publish the library in NPM. For now, I have a \`yarn run publish\` command that will bump the version, build the library and publish the built \`dist\` directory.

This approach is quite manual but packages like [np](https://github.com/sindresorhus/np), [npm-bump](https://github.com/mgol/npm-bump) and [pmm](https://github.com/d4rkr00t/pmm) can help here. You can also use `yarn version` – if you are a yarn person.

## Using integrations

I added CircleCI in the repository since I used to use on daily basis. It runs tests created by jest and after it uploads to Codecov the code coverage. Both CircleCI and Codecov are free for open source projects. Of course you can use [Travis CI](https://travis-ci.org/), and [Coveralls](https://coveralls.io/), also free for open source projects.

One project that I just figured out recently is the [Node Security Platform](https://nodesecurity.io/). Its job is monitoring vulnerability threatens in your repository. Github also [offers](https://help.github.com/articles/about-security-alerts-for-vulnerable-dependencies/) the same.

Talking about external dependencies, you may want to consider [Greenkeeper](https://greenkeeper.io/) or [dependencies.io](https://www.dependencies.io/). They both monitor your package.json and create individuals Pull Requests to update packages in your repository. The other two options you have are: `yarn outdated` or [ncu](https://www.npmjs.com/package/npm-check-updates):

[![ncu](/wp-content/uploads/2018/02/ncu.png)](https://www.npmjs.com/package/npm-check-updates)

Last but not least, I like to add a npm script to update the authors file. Here I shoot:

```
git log --format='%aN <%aE>' | sort -u --ignore-case | grep -v 'users.noreply.github.com' > AUTHORS.txt && git commit AUTHORS.txt -m 'Update AUTHORS' || true
```

If you are curious about the `git commit AUTHORS.txt -m 'Update AUTHORS' || true`. Not all the time we will modify the text file so I need the `|| true` to ensure that the script continues to run even after git reports an error since there is no changes to commit.

## Extra resources

I am adding here a few useful links about the topic:

* Podcast: [Top Shelf Style Guides](http://frontendhappyhour.com/episodes/top-shelf-style-guides/): lots of thoughts and links here – this podcast is really good by the way
* Course: [Creating Reusable Components](https://www.pluralsight.com/courses/react-creating-reusable-components)
* (Mini)-Course: [Publish JavaScript packages on NPM](https://egghead.io/courses/publish-javascript-packages-on-npm) – because this mini-course I found [np](https://github.com/sindresorhus/np), quoted before.
* Website: [Style Guide](http://styleguides.io/) – 496 Website Style Guides and counting&#8230;
* Inspiration: [Ant Design](https://ant.design/)
* Inspiration: [AtlasKit](https://atlaskit.atlassian.com/)
* Inspiration: [Belly](https://nikgraf.github.io/belle/)
* Inspiration: [Grommet](http://grommet.io/)
* Inspiration: [Semantic UI](https://react.semantic-ui.com/)
* Inspiration: [UI React Kit](http://reactsymbols.com/)

Thanks for my co-worker [Akio](https://github.com/akiokio) for helping on this (and [showing Netlify on reactjs.org repository](https://github.com/reactjs/reactjs.org/pull/338#issuecomment-346891946)) and my other folks from Thinkific.
