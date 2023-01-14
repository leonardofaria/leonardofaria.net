---
id: 1728
title: Excluding folders from indexing in Sublime
publishedAt: 2016-05-07T01:07:12-03:00
type: Post
ogImage: /images/og-images/1728.png
layout: post
guid: https://leonardofaria.net/?p=1728
permalink: /2016/05/07/excluding-folders-from-indexing-in-sublime/
dsq_thread_id:
  - "4910934392"
categories:
  - software
tags:
  - software
---
Sometimes we work in projects with tons of Javascript dependencies. Folders like `node_modules` and `bower_components` are a pain in the neck because every time that we need to find something in the project the content of these folders will be used in the search.

Sublime offers 2 settings to hide these files from the index. First of all, open the User Preferences (Preferences -> Settings – User):

  * `binary_file_patterns`: This option excludes files from the index but keep them in the sidebar.
  * `folder_exclude_patterns`: This option excludes files from the index and sidebar. This is why, for example, you don't see the `.git` folder in a project.

<span className="hidden">more</span>My final setting is:

```js
"binary_file_patterns":
	[
		"*.jpg", "*.jpeg", "*.png", "*.gif", "*.ttf", "*.tga", "*.dds", "*.ico", "*.eot", "*.pdf", "*.swf", "*.jar", "*.zip",
		"node_modules/**",
		"bower_components/**",
		"tmp/**"
	]
```

I also decided to add it the tmp folder, which is used by all kind of frameworks.
