---
image: /example-image.jpg
title: You better be absolutely sure 
description: Placing things on the right spot of the page is hard!
date: 19.03.05
tag: "#lesson"
---

# {{$page.frontmatter.title}}
<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />

How many times have you been tasked with putting something on the page

Let's say you have this setup

```html
<div class="container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>


```