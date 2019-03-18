---
image: /example-image.jpg
title: Just beyond the basics
description: Take your knowledge just a bit further than just adding classes to existing elements!
date: 19.03.01
tag: '#lessons'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" type="tag"/>

It been my experience that most people's understanding of CSS will take them only as far as being able to find the location of an existing and add properties until a desired look is acheived. In many cases this can be fine but I wanted to show a few examples where more creative steps can be taken.

The basic structure of CSS is to contain 3 parts

1. Selector
2. Property
3. Value

example

```css
h1 {
  font-size: 10px;
}
```

In plain english this rule would say "Select all the h1 elements on the page and set the font-size property to a value of 10px

Easy? OK, lets make it harder

```css
h1 {
  font-size: 10px;
  border-bottom: 1px solid blue;
}
h1:hover {
  border-bottom: 1px solid black;
}
```

What is the `:hover` called? Do you know? Its a **_pseudo selector_** with :`hover` being the most common one you've heard of but what about `:first-child`, `:checked`, `:active`, etc. There are a [ton of pseudo selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) and generally, these are state based selectors that can help you acheive things that can be avoided in code. Lets look at another category [reference link](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements)

Why would I do it? Makes your CSS a bit more readable
