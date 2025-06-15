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

## HTML Setup

Nothing we need to do semantically here, it does happen to be a bunch of `<divs/>` but the `class` values will help us make sense of what's what.

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

- Might seem extra, but we do need the `.card-container` element to set up a perspective to help the `.card` element rotate and look visibly correct in 3D space. More details in the next section.

## Container holds it all together

```css
.card-container {
  font-family: "Playfair", serif;
  width: 10rem;
  height: 14rem;
  perspective: 1000px;
  ...;
```

- `Playfair is a google font that looks very "card-like", so lets go with that.
- `perspective` is key here because it makes sure the 3D transformations are not "flat".

## Keeping everything centered

We use modern centering techniques on several elements to make sure everything looks like one solid object

```css
.card,
.face {
  display: grid;
  place-content: center;
}
```

## Front of the card

For the front of the card was want to make sure the 'A♠️' shows up in the upper-left and lower-right along with the big centered ♠️

```css
.card {
  width: inherit;
  height: inherit
  position: relative;
  transform-style: preserve-3d;
  animation: flip 5s linear infinite;
  ...;
}
```

🔑 points:

- `position:relative` is going to help place the elements inside of it

## Front and Back

Note: We use CSS nesting (did you know you can already nest native CSS ?) with the '&' symbol which represents the `.card` element the `.front` and `.back` are in.

```css
& .front,
& .back {
  grid-area: 1 / 1;
  width: inherit;
  height: inherit;
  backface-visibility: hidden;

  border-radius: 0.5rem;
  box-shadow: 1rem 1rem 2rem hsla(0, 0%, 0%, 0.2);
}
```

- Because our `.card` is using `display:grid` the `grid-area: 1/1` set on both the `.front` and `.back` (which are children of `.card`) keep these items inside the same cell on top of each other. We are going to flip the `.back` element though so you don't see both `.front` and `.back` at the same time.
- To acheive this effect of hiding the back side of the card we use `backface-visibilit: hidden`. Anytime during the rotate the item rotates you'll see "nothing". Example below:

## Set up the face

For the face of the card we still need a separate css grid to hold the top-left and bottom-right 'A♠️' text and the large ♠️ in the center.

```css
& .front {
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  transform: rotateZ(36deg);
  background-color: white;
  color: black;
}
```

- `grid-tempalate-rows` portions the card with enough space for the face values and the center spade ♠️

## Set up the back

```css
& .back {
  transform: rotateZ(36deg) rotateY(180deg);
  border: 0.2rem solid darkred;

  background: linear-gradient(
      45deg,
      red 25.5%,
      transparent 25%,
      transparent 75%,
      red 75%
    ), linear-gradient(
      -45deg,
      red 25.5%,
      transparent 25%,
      transparent 75%,
      red 75%
    ), white;

  background-size: 2rem 2rem;
}
```

-zan0
