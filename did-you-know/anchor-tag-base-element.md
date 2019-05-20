---
title: The anchor tag base element
description: A neat way to control anchor tags
date: 19.05.19
tag: '#didyouknow'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

A recent tweet in the twitter-verse revealved an existent but relatively unkown piece of functionality for anchor tags called the `base` element. Lets look at the following

```html
<base target="_blank" />
<a href="http://google.com">Google</a>
<a href="http://bing.com">Bing</a>
```

What's that `base` element doing ? Believe it or not, this element will serve as a 'base' to the behavior of all anchor tags. In this case notice that we define the `target` attribute to have `_blank` as its value. This means that ALL anchor tags will not open in a different tag. MIND BLOWN!
