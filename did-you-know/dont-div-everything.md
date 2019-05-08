---
title: Don't DIV everything
description: Make your HTML more semantic with better tags
date: 19.04.28
tag: '#didyouknow'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

Are you writing your basic html layouts with markup/css similar to this?

```html
<div class="container">
	<div class="header">HEADER</div>
	<div class="content">CONTENT</div>
	<div class="footer">FOOTER</div>
</div>
```

```css
.container {
	position: absolute;
	top: 0;
	left: 50%;
	bottom: 0;
	width: 800px;
	margin-left: -400px;
}
.header {
	position: absolute;
	top: 0;
}
.footer {
	position: absolute;
	bottom: 0;
}
```

[Full example on CodePen](https://codepen.io/_zan0/pen/oOOOZq)

Nothing technically wrong with it , but it is quite heavy on the `div` tags and absolutely positioned elements can be a nightmare if you're not careful. Perhaps we can make use of semantic tags from HTML5 with a little more modern CSS.

## Instead of div tags...

Since the advent of HTML5 there are several tags in HTML I don't see get used a lot like...

- `<header/>`
- `<section/>`
- `<footer/>`

Using these tags can take your basic layout to a more semantic level like so:

```html
<div class="container">
	<header>HEADER</header>
	<section>SECTION</section>
	<footer>FOOTER</footer>
</div>
```

...and for the CSS using the `flex` value in your `display` property along with other flex mechanics can get you out of absolute positioning.

```css
.container {
	display: flex;
	flex-direction: column;
}
header {
	background-color: #ffb3ba;
}
section {
	flex: auto;
}
footer {
	background-color: #bae1ff;
}
```

[Full example on CodePen](https://codepen.io/_zan0/pen/ROOOpe)

## Why do it?

The end result may remain the same but with a semantic approach you are providing web crawlers, screen readers, document processors, etc with an easier way of analyzing your content. You as a developer will have a better idea of what each part of the page is intended for making it easier to contribute.

~ zan0
