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

Its used to be the case that you would do something like this to create a sticky footer on your webpage...

```css
.content {
	height: 100%;
	margin-bottom: -50px;
}
.footer {
	position: absolute;
	bottom: 0;
	height: 50px;
}
```

This takes a `.content` element that stretches across the viewport height and adds a negative `margin-bottom` value to make room for the footer. We place the `.footer` at the bottom by absolutely positioning it and giving it a `50px` height. See an example [here](https://codepen.io/_zan0/pen/JVBjqK). It's not a bad technique but using something like the `margin-bottom: -50px` seems hacky, and absolutely positioned elements can be a slippery slope.

# The vh unit

Have you heard of `vh` (vertical height) unit? It's a representation of the height of your viewport. A value of `100vh` would represent the full height of your display, `200vh` would represent twice the full height of your display and something like `0vh` would be no height.

If we give a `.content` div a height of `100vh` with a `footer` element placed right after it, the `footer` element would appear but juuuuust off the screen... almost there.

# Math in your CSS

Have you heard of `calc()` ? These days you can do math natively in your CSS and cook up some neat vodoo. In this case if we use `100vh` on the `.container` wouldn't it be nice if we could just shave off the necessary height mathematically to place the `footer` within visible range? We can :) . Look...

```css
.content {
	height: calc(100vh - 50px);
}
footer {
	height: 50px;
}
```

See the clever math there? This says that the height of our `.content` should stretch across the viewport, but shave off `50px` to make enough room for the `footer`. (Note: I replaced the `.footer` element with the actual HTML element `footer`. See the vodoo [here](https://codepen.io/_zan0/pen/EJpxzV)

# Benefits

With this technique document flow is nicely preserved and you have a solution that avoids absolute positioning. You could even take it further and make that `50px` a variable that you modify as needed, just sayin' ;) .

~ zan0
