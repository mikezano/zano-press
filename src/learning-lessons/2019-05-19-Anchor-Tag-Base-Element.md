---
title: The <base /> element
description: A neat way to control anchor tags
date: 2019.05.19
tag: "#didyouknow"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

A recent [tweet](https://twitter.com/sarah_edo/status/1126845853103038464?s=20) from the twitter-verse revealved an existent, but relatively unkown piece of functionality for anchor tags in the form of a `base` element. Let's look at the following:

```html
<base target="_blank" />
<a href="http://google.com">Google</a>
<a href="http://bing.com">Bing</a>
```

What's that `base` element doing ? It works as a 'base' to the behavior of all anchor tags. In this case with the `target` attribute set to `_blank`, ALL anchor tags will open in a new tab 🤯! Inspect the elements below to see the absence of a `target` attribute, but clicking them will still open the content in a new tab:

<base target="_blank" />
<a href="http://google.com">Google</a> |
<a href="http://bing.com">Bing</a>

You can also make all your links in a page point to a different URL and do something like this:

```html
<base href="http://www.pets.com/" />
<a href="#dogs">Dogs</a>
<a href="#cats">Bing</a>
```

The first anchor element will point to `http://www.pets.com/#dogs` and the second would point to `http://www.pets.com/#cats`. :)

~ zano
