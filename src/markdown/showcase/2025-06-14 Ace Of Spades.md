---
title: "3D Ace"
description: Transformations in 3D
date: 2025.06.14
tag: "#showcase"
---

# 3D Aces

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

How about some dual sided elements that make use of `backface-visibilty` to help acheive some realistic 3D effects ? Let's dive into how this ace of spaces gets generated ♠️

<div style="padding:1rem 0 3rem 0;">
<AceOfSpades />
</div>

# HTML Setup

Nothing we need to do semantically here, it does happen to be a bunch of `<divs/>` can help us get a good structure. Its the naming of the `class` values that helps us make sense of things here

```html
<div class="card-container">
  <div class="card">
    <div class="front">
      <div class="index">A</div>
      <div class="face">♠</div>
      <div class="index flipped">A</div>
    </div>
    <div class="back"></div>
  </div>
</div>
```

🔑 points:

- The `.card-container` will set up a `perspetive` to this card so that 3D transformations will have depth later on
- `&spades;` Is code that generates our spade
  -zan0
