---
id: 2208
title: Using Flexbox and text ellipsis together
date: 2020-07-18
author: Leonardo Faria
ogImage: /images/og-images/2208.png
permalink: /2020/07/18/using-flexbox-and-text-ellipsis-together/
categories:
  - css
tags:
  - css
---

Another day I was asked to build a table containing a list of files uploaded by the users. Imagine a table similar to the list of files in Finder:

![Finder](/wp-content/uploads/2020/07/finder.jpg)

The second item of the table is `mobile-phone-screenshot-long-fine-name.png`, however the column is not big enough to show the complete filename. Instead, we see `mobile-phone-sc...g-fine-name.png`. In this project, we decided to cut part of the end of the filename and keeping the extension, as shown above: 

![Finder](/wp-content/uploads/2020/07/filename.gif)

### HTML markup:

```html
<div class="filename">
  <span class="filename__base">this-file-has-a-really-really-really-long-filename.</span>
  <span class="filename__extension">pdf</span>
</div>
```

### CSS: 

```css
.filename {
  display: flex;
  min-width: 0;
}

.filename__base {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.filename__extension {
  flex-shrink: 0;
}
```

The ellipsis effect can be done by combining `text-overflow`, `white-space` and `overflow` properties, however, we still need to figure out the relation between the filename base and its parent, which also contains the file extension. 

The trick is using the property `min-width`, as covered in this pen by [AJ Foster](https://codepen.io/aj-foster/pen/emBYPW) and [CSS Tricks](https://css-tricks.com/flexbox-truncated-text/). From the [Flexbox spec](https://drafts.csswg.org/css-flexbox/#min-size-auto):

> Note: The auto keyword, representing an automatic minimum size, is the new initial value of the min-width and min-height properties. The keyword was previously defined in this specification, but is now defined in the CSS Sizing module.
>
> ...
>
> In general, the content-based minimum size of a **flex item is the smaller of its content size** suggestion and its specified size suggestion. 

By using `min-width: 0`, we are changing the minimum size of the flexbox container, which will resize the child elements of the container that don't use the `flex-shrink` attribute. Since the filename base element has the `text-overflow`, `white-space` and `overflow` properties, the ellipsis will be rendered properly.

The full example is available in [this Codepen](https://codepen.io/leonardofaria/pen/rNxZJad):

<div class="full-width">
  <iframe src="https://codepen.io/leonardofaria/pen/rNxZJad" class="w-full h-screen"></iframe>
</div>
