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

Creating colors that work well together is hard. We can use hex values or RGBa values but would you off the top of your head what they would be ? Imagine if someone asks you, "I need a blue and orange color.We have the options to create colors with hex values like `#000000` which would be black . You can use RGBa values which control the amount of red green and blue mixed into your color, and HSLa.

The problem with hex values is that sure you could tell me a color that represents black, (you've probably had to type out the hex value a million times) but if I asked you to give me a color that was blue and then just a bit lighter/darker or more saturated, could you?

Its easier to create a set of values that work well with each other

Hue - A value from 0 - 360
Saturation - A percent from 0 - 100%. This of this value representing how 'strong' the color is. If you are targeting a blue color 100% would mean you the purest version of blue, and 0% would represent the absence of color leaving you with gray.
Lightness - A value from 0 - 100% representing how much light the color receives. 100% would be like having a flashlight directly on top of th color turning everything white.
Alpha - can be either value from 0 - 1 with any decimal value in between or from 0 -100%
