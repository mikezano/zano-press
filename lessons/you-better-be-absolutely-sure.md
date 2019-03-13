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

How many times have you been tasked with putting something on the page and end up in this cycle

![An image](../.vuepress/public/images/posts/family-guy.gif)

Let's say you have this setup

```html
<div class="container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>
```

with this css..

```css
.container{
	border:1px solid black;
}
```
<style>
.my-container{
	position:relative;
	border:1px solid black;
	width:100px;
}
</style>
<div class="my-container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>
Now heere's your task.  Move B to the far right of the page

Your first attempt might go as follows

```css
.b {
	position: absolute;
	right: 0;
}
```
<style>
.b {
	position: absolute;
	right: 0;
}
</style>
<div class="my-container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>

Huh?  B should have moved to the far right of the page, ya?