---
id: 1692
title: Serving raw files directly from Github
publishedAt: 2016-08-06T20:49:30-03:00
type: Post
ogImage: /images/og-images/1692.png

permalink: /2016/08/06/serving-raw-files-directly-from-github/
dsq_thread_id:
  - "5045995388"
categories:
  - git
tags:
  - git
---
We usually create HTML files in our Github repositories, but how to show this data in the browser? [RawGit](http://rawgit.com) is a solution to serve files with the correct content types.

Example: The WordPress `readme.html` file can be shown in the following URL:

```
https://rawgit.com/WordPress/WordPress/master/readme.html
```

You only need to follow the formula:

```
https://rawgit.com/USER/REPOSITORY/BRANCH/file.html
```

The advantage of using RawGit over Github Pages is that RawGit works with all branches, while Github Pages requires a gh-pages branch. Last not the least, the <A href="https://github.com/rgrove/rawgit">source code</A> of this solution is also available in Github.
