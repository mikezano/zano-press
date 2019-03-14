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

How many times have you been tasked with positioning something on a page and end up in this cycle...

![An image](../.vuepress/public/images/posts/family-guy.gif)

Typical, right ? Let's look a little more closely at a similar situation to understand how these things happen.  Let's start with this markup...

```html
<div class="container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>
```

and this css...

```css
.container {
	border: 1px solid black;
	position: relative;
	width: 100px;
}
```

To acheive the following...

<style>
.my-container1{
	position:relative;
	border:1px solid black;
	width:100px;
}
</style>
<div class="my-container1">
	<div class="a1">A</div>
	<div class="b1">B</div>
</div>


Now here's your task.  Move `B` to the far right of the page outside of its containing black rectangle.  Your first attempt might go as follows...

```css
.b {
	position: absolute;
	right: 0;
}
```

You've declare a rule for the `B` element in which you are saying it is absolutely positioned `position: absolute` element that will go to the far right `right: 0` of the page. 

And the result...

<style>
.my-container2{
	position:relative;
	border:1px solid black;
	width:100px;
}
.b2 {
	position: absolute;
	right: 0;
}
</style>
<div class="my-container2">
	<div class="a2">A</div>
	<div class="b2">B</div>
</div>

<br/>
<br/>
Huh?  B should have moved to the far right of the page, ya? Noooope.  A rule of thumb is 