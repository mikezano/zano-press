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

```css
.container {
	position: relative;
	border: 1px solid gray;
	width: 100px;
	height: 200px;
}
.header {
	position: absolute;
	top: 0;
	z-index: 1;
}
.footer {
	position: absolute;
	bottom: 0;
	z-index: 1;
}
```

```html
<div class="container">
	<div class="header"></div>
	<div class="content"></div>
	<div class="footer"></div>
</div>
```

Nothing wrong with it, but it is quite heavy on the `div` tags. Perhaps we can make use of the newer tags that HTML5 uses.

## Instead of div tags

Since the advent of HTML5 there are several tags in HTML I don't see get used a lot like...

- `<header/>`
- `<section/>`
- `<footer/>`

Using these tags can take your basic layout to a more semantic level like so:

```css
.container {
	display: flex;
	flex-direction: column;
}
header,
footer {
	height: 3rem;
}
header {
	background-color: #ffb3ba;
}
footer {
	background-color: #bae1ff;
}
section {
	flex: auto;
	background-color: #baffc9;
	display: flex;
}
```

```html
<div class="container">
	<header>HEADER</header>
	<section>SECTION</section>
	<footer>FOOTER</footer>
</div>
```

~ zan0
