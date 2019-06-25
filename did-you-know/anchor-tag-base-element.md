---
title: The <base /> element
description: A neat way to control anchor tags
date: 19.05.19
tag: '#didyouknow'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

A recent [tweet](https://twitter.com/sarah_edo/status/1126845853103038464?s=20) from the twitter-verse revealved an existent, but relatively unkown piece of functionality for anchor tags in the form of a `base` element. Let's look at the following:

```html
<base target="_blank" />
<a href="http://google.com">Google</a>
<a href="http://bing.com">Bing</a>
```

What's that `base` element doing ? Believe it or not, this element will serve as a 'base' to the behavior of all anchor tags. In this case the `target` attribute is set to have `_blank` as its value. This means that ALL anchor tags will now open in a different tab. 🤯!

You could make all your links in a page point to a different URL and do something like this:

```html
<base href="http://www.pets.com/" />
<a href="#dogs">Dogs</a>
<a href="#cats">Bing</a>
```

The first anchor element ultimately points to `http://www.pets.com/#dogs` and the second would point to `http://www.pets.com/#cats`.

~ zano
