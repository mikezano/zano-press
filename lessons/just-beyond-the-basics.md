---
image: /example-image.jpg
title: Just beyond the basics
description: This is the example description for our first post.
date: 19.03.01
tag: '#lesson'
---

# Just beyond the basics

It seems like people stop right after they figure out how to style an element and never take a deep dive because they don't care or didn't know

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
