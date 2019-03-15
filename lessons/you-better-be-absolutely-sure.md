---
title: You better be absolutely sure 
description: Placing things on the right spot of the page is hard!
date: 19.03.05
tag: "#lesson"
---

# {{$page.frontmatter.title}}
<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />

How many times have you been tasked with positioning an element on a page and end up in this cycle...

![An image](../.vuepress/public/images/posts/family-guy.gif)

🤦‍♂️, right ? Let's recreate this face palming scenario and try to understand what might be happening in these situations. Let's start with this markup...

```html
<div class="container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>
```

...and this CSS...

```css
.container {
	border: 1px solid black;
	position: relative;
	width: 100px;
}
```

Which will result in the following...

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

You've declare a rule for the `B` element in which you are saying it's now an absolutely positioned `position: absolute` element that will go to the far right `right: 0` of the page. 

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

# Huh?
`B` should have moved to the far right of the page, right ? _Noooope._  You see, absolutely positioned elements are constrained to the confines of its closest positioned (meaning it uses the `position` property) element.  In this case the `.container` rule has a `position: relative;` statement in it meaning that B will only move about the confines of the black rectangle. Side note: The black rectangle no longer appears around the `B` element as well because its no longer in the normal document flow of the markup with its `position: absolute;` property.


# ... now what ?
If you want the `B` element to move to the far right of the page you need the element to exist outside of the `.container` in a place where an ancestor elements are not using the `position` property in any style definitions. **OR**, in this very simple example, take away the `position` property from the `.container` style (which was only there for demonstration purposes) to end up with this...

```css
.container {
	border: 1px solid black;
	width: 100px;
}
.b {
	position: absolute;
	right: 0;
}
```
With the html markup we started with you would then see...

<style>
.my-container3{

	border:1px solid black;
	width:100px;
}
.b3 {
	position: absolute;
	right: 100px;
}
</style>
<div class="my-container3">
	<div class="a3">A</div>
	<div class="b3">B</div>
</div>

<p>The element is now at the far right! <span style=" display: inline-block;transform:rotateY(180deg);">👀</span></p>

# ... and the moral

There are better solutiosn like flex layouts to help you control positioning which each proabaly have their own +/-  Hopefully this article helps better explain the reason you may have been stuck doing a similar thing. Be aware of what elements define the `position` property in their styles to know how anything you position will behave

~Zano