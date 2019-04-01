---
title: Hover effect using border
description: Make use of the ::before element for border effects
date: 19.04.01
tag: '#lessons'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

Here's a technique I like to use for creating more visually creative hover effects...


<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:900');

table{
	background-color:white;
}
#hover-me-1{
	position:relative;
	display:inline;
	font-family: 'Titillium Web', sans-serif;
	color: orange;
	font-size: 2rem;
}
#hover-me-1::before{
	content: '';
	position:absolute;
	top:0;
	border-bottom:4px solid orange;
	width:0;
	height:100%;
}
#hover-me-1:hover::before{
	transition: width .5s linear;
	width:100%;
}
</style>
<div id="hover-me-1">Hover Over Me</div>

How is it done ? With borders and pseudo elements actually, lets walk through it. :)

## The Steps

### 1. The html/css

Let's start with:

```html
<div id="hover-border">Hover Over Me</div>
```

```css
#hover-border{
	position:relative;
	display:inline;
}
```

A breakdown of what we are doing with these properties/values ...

| `#hover-border` | What it means|
|-------------------|-|
| `position:relative;`| This will control where the upcoming `::before` element will place itself  (We'll see this in a sec).|
|`display: inline;`|Is used so that the size of the element will only be as large as the content itself.|


### 2. The ::before element

Every html element has two not-so-secret elements (`::before` and `::after`) to help add static content around your element.  In this case we will set up the `::before` element with the following...

```css
#hover-border::before{
  position:absolute;
  content: '';
  width:0;
  height:100%;
  border-bottom:4px solid orange;
}
```
What is each property here helping acheive?

| `#hover-border::before` | What it means|
|-------------------|-|
| `position:absolute;`| Allows the `::before` element to 'float' within the confines of the `#hover-border`.  If `#hover-border` didnt define a `position: relative;` value this element could potentially move anywhere on the page.|
|`content: '';`|Required for any pseudo-element to indicate what the static content will be otherwise the element will not show.  We fake the content here with an empty string.|
|`width: 0;`| Start off by 'hiding' the element and later modifying the `width` value to display the element. |
|`height:100%;`| This will size the element to be the same as `#hover-border`. |
|`border-bottom:4px solid orange;`| This is our border lying in wait until a width value > 0 is added. Soon! |

 


### 3.  The hover effect

Now we need to add the logic of what the `::before` element will do when its parent `#hover-border` is hovered over...

```css
#hover-me:hover::before{
	transition: width .5s linear;
	width:100%;
}
```

| `#hover-me:hover::before` | What it means|
|-------------------|-|
| `transition: width .5s linear;`| When you hover over the `#hover-me` element add a `transition` property that will animate any change to the `width` of the `::before` element and make it last for `.5s` with `linear` movement. Phew!|
|`width:100%;`|And since the width value is set to 100%, we will see it grow from 0 to 100%, and as a consequence reveal the border ! |

### 4. All together


```css
#hover-me{
	position:relative;
	display:inline;
	font-family: 'Titillium Web', sans-serif;
	color: orange;
	font-size: 2rem;
}
#hover-me::before{
	content: '';
	position:absolute;
	width:0;
	height:100%;
	border-bottom:4px solid orange;	
}
#hover-me:hover::before{
	transition: width .5s linear;
	width:100%;
}
```

```html
<div id="hover-me">Hover Over Me</div>
```

<style>
#hover-me-1{
	position:relative;
	display:inline;
	font-family: 'Titillium Web', sans-serif;
	color: orange;
	font-size: 2rem;
}
#hover-me::before{
	content: '';
	position:absolute;
	top:0;
	border-bottom:4px solid orange;
	width:0;
	height:100%;
}
#hover-me:hover::before{
	transition: width .5s linear;
	width:100%;
}
</style>
<div id="hover-me-1">Hover Over Me</div>

~ Zano