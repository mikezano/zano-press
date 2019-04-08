---
title: Data attributes as selectors
description: More ways than one to select that disabled element ;)
date: 19.04.07
tag: '#didyouknow'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

You may have seen some html/css written as such...

```html
<a href="https://google.com">Google</a>
```

```css
a[href^='https'] {
  font-size: 1rem;
  color: orange;
}
```

<style>
a[href^="https"] {
  font-size: 1rem;
  color: orange;
}
</style>

<a href="https://google.com">Google</a>

Do know what the selector is saying? It says... find any `a` tag that has a `href` attribute that starts with `^=` the value `https`. Neat!

Its a lesser-known piece of functionality that attributes and their values can be used as selectors in CSS but perhaps thats because its [performance is not that great](https://jsperf.com/attribute-vs-class-selectors). I wouldn't recommend using attribute selectors all over your code but here's a more practical example of using them, detecting broken links.

## Broken link detection

Imagine that you are dynamically binding the `href` attribute but are getting nulls, resulting in empty values. How would you know? Create an attribute selector that looks for exactly that. :D

```css
a[href=''] {
  border: 1px solid red;
}
```

By just adding this line of CSS you know will have a visual indication of a red box around broken anchor tags on your page.

## Also...

We saw that you can do a 'starts with' type of selector in the `a[href^='https']` example and you'll be happy to know the other variants of 'ends with' `$=` and 'contains' `*=` exist too. A more complete list can be found [here](https://www.w3schools.com/CSS/css_attribute_selectors.asp). Try them out see what other uses you can come up with.

Fun fact: If you're a Vue.js user you'll notice that attribute selectors are applied to components that use a 'scoped' block of CSS as a way of distinguishing markup you create specific to your component.

~ zan0
