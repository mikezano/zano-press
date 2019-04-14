---
title: CSS variables and their scopes
description: A reminder on css variables and how they work
date: 19.04.13
tag: '#lessons'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

CSS variables have widespread browser support these days and need occasional reminders to developers about how they work  ;).   First, they can look like this...

```css
:root{
    --button-width: 100px;
}
```

`:root` is a pseudo element representing the root element of your document (in this case `<html>`). By declaring variables here you are essentially placing them in the global scope available to any CSS. In this case the variable `--button-width` is declared with a value of `100px`.  You can declare as many variables as you like and they can contain values that are numeric , percentages, string, colors and more.  Your first thought in looking at this might be , *two starting dashes* ? Yuck 🤢. The internet has [pointed this out](https://softwareengineering.stackexchange.com/questions/311794/what-is-the-reason-that-css-variables-are-defined-using-two-hyphen-characters) but don't expect any changes.

## So how do you use it?

Like this:

```css
#my-button{
    border:1px solid black;
    background-color: orange;
    text-align:center;
    width: var(--button-width);
}
```

We 'call' a variable with the `var()` function and pass in the variable we want to use. And if we had this html...

```html
<button id="my-button">CSS Variables!</button>
```

You'd get this...
 
<style>
:root{
    --button-width:100px;
}

#my-button1{
    border:1px solid black;
    background-color: orange;
    width: var(--button-width);
    text-align:center;
}
</style>
<button id="my-button1">CSS Variables!</button>


## Scope declaration

What if another declaration of the `--button-width` variable happened inside `#my-button` style declaration ?

```css
#my-button{
    --button-width: 200px;
    border:1px solid black;
    background-color: orange;
    text-align:center;
    width: var(--button-width);
}
```

Would this result in a button of `200px` width as defined in this scope or `100px` width as defined in the `:root` ?  Answer:  `200px`. Locally scoped variables have precedent :)

<style>
#my-button2{
    --button-width: 200px;
    border:1px solid black;
    background-color: orange;
    text-align:center;
    width: var(--button-width);
}
</style>
<div id="my-button2">CSS Variables!</div>

# Why use variables in my CSS ?

For the same reason you would in any other programming language: reduce repetition, modularize styling, make things neat for the next developer. For example, how many times have you re-declared that same blue color for your buttons all over your html/css (maybe even inline-ing) and decided you wanted to change it, but dreaded all the places you would have to update it?  Variables would help you out there ;)

~ zan0