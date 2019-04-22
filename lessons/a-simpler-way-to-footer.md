---
title: A simpler way to footer
description: Getting things to stay at the bottom of your page.
date: 19.04.21
tag: '#lessons'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

Its used to be the case that you would do something similar to the following to get things to stick to the bottom of your webpage...

```css
.content {
	height: 100%;
	margin-bottom: -50px;
}
.footer {
	position: absolute; /*or fixed;*/
	bottom: 0;
	height: 50px;
}
```

Imagine you have a `.content` div that extends the viewport height. You would add the `margin-bottom` value to make room for the footer. Then we absolutely position our `.footer` so its free to be anywhere on the page, and place it at the bottom and give it a `50px` height. See an example [here](https://codepen.io/_zan0/pen/JVBjqK) It's not a bad technique but using something like the `-50px`

# The Vh unit

Have you heard of `vh` (vertical height) units? It's a representation of the total visible height of your display. A value of `100vh` would represent the full height of your display, `200vh` would represent twice the full height of your display and something like `0vh` would be no height.

If we give our `content` div a height of `100vh` our `footer` element would be placed right after it, but juuuuust off the screen... almost there.

# Math in your CSS

Have you heard of `calc()` . These days you can do math natively in your CSS to figure out things that were once hard. In this case if we use `100vh` we are placing our `footer` offscreen, wouldn't it be nice if we could just shave off the necessary height to place the `footer` just within visible range? We can :) . Look:

```css
.content {
	height: calc(100vh - 70px);
}
```

See the clever math there? We are saying that the height of our content should stretch across the viewport, but shave off `70px` to make enough room for `footer`.

# Benefits

Document flow is preserved
