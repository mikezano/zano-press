---
title: You better be absolutely sure
description: Placing things on the right spot of the page is hard!
date: 2019.03.05
tag: "#learning-lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

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

Now here's your task. Move `B` to the far right of the page outside of its containing black rectangle. Your first attempt might go as follows...

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

`B` should have moved to the far right of the page, right ? _Noooope._ You see, absolutely positioned elements are constrained to the confines of its closest ancestor element with a `position` property declared. In this case the `.container` rule has a `position: relative;` statement in it meaning that `B` will only move about within the limits of the black rectangle. Side note: The black rectangle no longer appears around the `B` element as well because its no longer considered to be part of the normal document flow as a result of its `position: absolute;` property.

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

# ... and finally

The solution presented here hopefully sheds some light on explaining the reason you may have been stuck trying the same thing in a different scenario. The better solution here is to use features like [flex layouts](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [grid layouts](https://css-tricks.com/snippets/css/complete-guide-grid/) to help you control positioning of elements. If you don't or can't use those layouts then always be aware of what elements in the html define a `position` property in their styles and you'll have a better idea of what positioning your element will result in.

~Zano

<Tweet />
