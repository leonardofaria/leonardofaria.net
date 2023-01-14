---
id: 1643
title: My Sublime Text settings
publishedAt: 2015-10-04T17:14:16-03:00
type: Post
ogImage: /images/og-images/1643.png

permalink: /2015/10/04/my-sublime-text-settings/
dsq_thread_id:
  - "5341862479"
categories:
  - mac
  - software
tags:
  - mac
  - software
---
Almost [3 years ago I wrote](https://leonardofaria.net/2012/12/31/configurando-o-sublime-text-2/) (in Portuguese) a post about my Sublime Text settings. Now, I updated my tips in an English post.

### 1. Free video course

If you know nothing about Sublime, please watch [these free videos](https://code.tutsplus.com/courses/perfect-workflow-in-sublime-text-2) from tut+.

### 2. Package Control

First of all, you should install Package Control to manage plugins. Actually, you can install packages just copying the package files to correct folder, however, Package Control is easier than copy & paste. Open Sublime Text console (View > Show Console or `` ctrl + ` ``) and paste the following line:  
<span className="hidden">more</span>

```
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

### 3. Packages

* **[AutoFileName](https://github.com/BoundInCode/AutoFileName)**: it's a plugin that autocompletes filenames. It saves your time when you are assigned to insert 45 images in one page ;)
* **[Bracket Highligher](https://github.com/facelessuser/BracketHighlighter/)**: matches a variety of brackets such as: `[]`, `()`, `{}`.
* **[ColorHighlighter](https://github.com/Monnoroch/ColorHighlighter)**: previews color values by underlaying the selected hex codes in different styles, coloring text or gutter icons.
* **[ColorSchemeSelector](https://github.com/jugyo/SublimeColorSchemeSelector)**: select theme quickly via the Quick Panel.  
![colorschemeselector](/wp-content/uploads/2015/10/colorschemeselector.gif)
* **[DashDoc](https://github.com/farcaller/DashDoc)** (Mac only): [Dash](https://kapeli.com/dash) is an awesome programming documentation browser for Mac and it offers 150+ offline documentation sets. I can press `alt + ctrl + h` in a Sublime editor and DashDoc immediately opens Dash to show the appropriate documentation based on the cursor position. The image below shows hot DashDoc works (image via [Matt Bricson](https://mattbrictson.com/sublime-text-3-recommendations)):  
![](/wp-content/uploads/2015/10/dash.gif)
* <img src="/wp-content/uploads/2015/10/gitgutter.png" class="right size-full wp-image-1645" /> **[GitGutter](https://github.com/jisaacks/GitGutter)**: this plugin shows an icon in the gutter area indicating whether a line has been inserted, modified or deleted.
* **[SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)**: is a linting framework. A linter is a small program that checks code for stylistic or programming errors. You must install this package before install specific linters for specific languages. For example, if you use PHP, you should install [SublimeLinter-php](https://packagecontrol.io/packages/SublimeLinter-php) package. Ruby developers can use [SublimeLinter-ruby](https://packagecontrol.io/packages/SublimeLinter-ruby) and [SublimeLinter-rubocop](https://packagecontrol.io/packages/SublimeLinter-rubocop)
* **[JSHint](https://packagecontrol.io/packages/JSHint)**: is a JavaScript Linter, which will look over your code and verify it has proper styling, proper syntax, and is free of common errors related to these. You must have jslint installed in your computer (`npm install -g jshint`).
* **[JSHint Gutter](https://packagecontrol.io/packages/JSHint%20Gutter)**: you can use this package to get more explicit warning as to where the javascript error occurred.

### 4. Settings

Many Sublime settings, such as editor's font and colour scheme are stored in a file called `Preferences.sublime-settings`. You can open this in Mac pressing `command + ,`. This is my settings' file:

```js
{
	"auto_completecommiton_tab": true,
	"bold_folder_labels": true,
	"color_scheme": "Packages/User/SublimeLinter/Monokai (SL).tmTheme",
	"font_face": "Meslo LG S Regular for Powerline",
	"font_size": 17.0,
	"highlight_line": true,
	"highlight_modified_tabs": true,
	"open_files_in_new_window": false,
	"rulers":
	[
		80
	],
	"show_full_path": true,
	"tab_size": 2,
	"terminal": "iterm",
	"theme": "El Capitan.sublime-theme",
	"trim_trailing_white_space_on_save": true,
	"word_wrap": true
}
```

### 5. Theme

My current theme is [El Capitan](https://github.com/iccir/El-Capitan-Theme). I use the Monokai colour scheme. There are several colours schemes avaliable in [Colorsublime](http://colorsublime.com/).

[![](/wp-content/uploads/2015/10/elcapitan-1024x637.png)](https://github.com/iccir/El-Capitan-Theme)

### 6. Icon (Mac version only)

There are [several alternative Sublime icons](https://dribbble.com/search?q=sublime+icon) on dribbble. To replace the default icon, just select Sublime Text in a Finder window, press `command + I`, and drag the file to the little app icon in the top left.  


<center>
  <a href="https://dribbble.com/shots/1827862-Yosemite-Sublime-Text-Icon"><img src="/wp-content/uploads/2015/10/icon6.png" width="200" /></a> <a href="https://dribbble.com/shots/1582459-Sublime-Text-Icon-for-Yosemite"><img src="/wp-content/uploads/2015/10/icon5.png" width="200" /></a> <a href="http://dribbble.com/shots/872166-Sublime-Text-2-Replacement-Icon"><img src="/wp-content/uploads/2012/12/icon1.png" /></a> <a href="http://dribbble.com/shots/382465-Sublime-Text-2-update-Replacement-Icon"><img src="/wp-content/uploads/2012/12/icon2.png" /></a> <a href="http://dribbble.com/shots/468176-Sublime-Text-2-icon-you-can-actually-see-when-switching-apps"><img src="/wp-content/uploads/2012/12/icon3.png" /></a> <a href="http://dribbble.com/shots/382409-Sublime-Text-2-Icon"><img src="/wp-content/uploads/2012/12/icon4.png" /></a><br />
</center>
