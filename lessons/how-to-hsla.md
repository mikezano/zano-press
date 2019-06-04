---
title: How to HSLAa
description: A better way of creating colors
date: 19.06.02
tag: '#lessons'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

Creating colors that work well together is hard. We can use hex values or RGBa values like `#000` (hex) or `(0,0,0,1)` (RGBa) to get a black color and `#FFFFFF` or `(255,255,255,1)` to create white. Beyond that, changing any part of these values will most likely leave you guessing as to what kind of color you've created. Enter HSLa... the more programmatic approach to creating colors.

## Hue, Saturation, Light, Alpha (HSLa)

Creating a color with HSLa consists of three parts as described in the table below:

| HSLa       | Description                                                                                                                                                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hue        | A value from 0 - 360 which comes from the following color wheel range. ![An image](../.vuepress/public/images/posts/hsla-hue.png) At 0 you have red. At 120 you have green and at 240 you have blue                                                                    |
| Saturation | A percentage value from 0 - 100%. Represents how 'strong' the color would be, a value of `0` would leave you with no color (gray) and `100%` would be a strong version of the color.                                                                                   |
| Light      | A percentage value from 0 - 100%. A value of 0 would represent no light at all, meaning you would get black. 100% would mean too much light and results in a white. Think of this value as what would happen if you move a flashlight towards and away from your color |
| Alpha      | A value between 0 and 1 or percentage from 0% - 100%                                                                                                                                                                                                                   |

Putting it all together this is how you might create the color black:

```css
color: hsla(0, 0%, 0%, 1);
```

...and the color white

```css
color: hsla(0, 0%, 100%, 1);
```

Here we see we the first value we chose was `0` which would represent. Our saturation value is 0% which would remove all color and leave us with gray. The light value is at 0% though and with no light, you get darkness, a.k.a black.

Imagine if someone asks you, "I need a blue and orange color that work well together. You could more easily do that by finding your blue color first by selecing a value. Now for the saturation and light value you are no longer 'guessing' but 'adjusting' it to you liking. When you create the orange color, they only thing you will need to technically change is the hue value since you've already established a saturation and light value that work together, neat!

## But I already know hex values and RGBa..

Ok, can you make
Yes, but if I have you two random colors, could you then modify the value to lighten the color ?

```css
color: hsla(20, 50%, 50%, 1);
```

Its supported in all the major browsers.
