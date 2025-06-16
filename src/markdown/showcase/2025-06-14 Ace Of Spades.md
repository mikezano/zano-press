---
title: "3D Ace"
description: Transformations in 3D
date: 2025.06.14
tag: "#showcase"
---

# 3D Aces

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

How about some dual sided elements that make use of `backface-visibilty` to help acheive some realistic 3D effects ? Let's dive into how this ace of spades gets generated ♠️

<div style="padding-top:1rem;">
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

- The actual element that rotates in this setup is the `.card` element with the `.card-container` element helping to set up a perspective that makes the `.card` element rotation look visibly correct in 3D space. More details in the next section.

## Container holds it all together

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair...");

.card-container {
  font-family: "Playfair", serif;
  perspective: 1000px;
  .../* additional font related styles */;
}
```

- Playfair is a [google font](https://fonts.google.com/specimen/Playfair) that looks very "card-like", so we import that for use.
- `perspective` is key here because it makes sure the 3D transformations happen at a good distance away from your eyes. For example, if we set it to `100px` it will look like the 3D movement gets too close to your eyes ("screen") and things 'stretch'

<style>
.perspective{
    overflow:hidden;
}
.perspective .card-container{
    perspective:100px;
}

</style>
<div class="perspective" style="padding-top:1rem;">
<AceOfSpades />
</div>

## Keeping everything centered

We use modern centering techniques with CSS grid on several elements to make sure everything looks like one solid object

```css
.card,
.face {
  display: grid;
  place-content: center;
}
```

## Card element

```css
.card {
  width: 10rem;
  height: 14rem;
  position: relative;
  transform-style: preserve-3d;
  animation: flip 5s linear infinite;
  .../* we nest more rules in here */;
}
```

🔑 points:

- `width` and `height` here give a size to give the card a good looking size.
- `position:relative` will help later when we work with the `.front` and `.back` elements of the card.
- `transform-style: preserve-3d` is probably the **most** important part of this whole setup. It 'preserves' any 3D transformations done to child elements. Without it 3D transformations on `.front` and `.back` elements wouldn't actually look correct or work entirely.
- The `animation` here is simply going to be a 360 degree turn that runs infinitely.

## Front and Back

_Note_: We use CSS nesting (did you know you can already [nest](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting) native CSS ?) with the `&` symbol which represents the `.card` element in which the `.front` and `.back` elements exist in.

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

- Because our `.card` is using `display:grid` setting `grid-area: 1/1` on both the `.front` and `.back` keeps these items inside the same cell on top of each other. We are going to flip the `.back` element though so you don't see both `.front` and `.back` at the same time.
- To acheive this effect of hiding the back side of the card we use `backface-visibility: hidden`. Anytime during the rotation when the backside of something is displayed you'll see "nothing".
- `border-radius` gives us nice rounded corners to the card.

To demonstrate the `backface-visibility` on the left we have the `.front` element value as `visible` to that when it rotates around you it 'backwards' like a mirror-image. On the right the value is `hidden` to demonstrate how the whole element 'dissapears'. We hide the whole `.back` element so it doesn't interfere with the example.

<style>
    .backface.first .front{
        backface-visibility: visible;
    }
    .backface.second .front{
        backface-visibility:hidden;
    }
    .backface .back{display:none;}
</style>
<div style="display:flex; gap:1rem;">
    <div class="backface first" style="padding-top:1rem;">
        <AceOfSpades />
    </div>
    <div class="backface second" style="padding-top:1rem;">
        <AceOfSpades />
    </div>
</div>

## Front of the card (face)

For the face of the card we still need a separate css grid to hold the top-left and bottom-right 'A♠️' text and the large ♠️ in the center. Let's do that with CSS grid

```css
& .front {
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  transform: rotateZ(36deg);
  background-color: white;
  color: black;
}

& .index.flipped {
  transform: rotate(180deg);
}
```

- `grid-tempalate-rows` portions the card with enough space for the face values and the center spade ♠️
- `transform` tips the card over to the side enough that it will eventually looks like its spinning on its corner
- We give it a solid `background-color` to that nothing else bleeds through
- The 'A♠️' is represented by the `.index` element and here we see we add one more class `.flipped` to express that the bottom right one needs to flip 180deg to turn upside down and in the correct corner.

Without the `rotateZ` transformation this is what our card looks like.

<style>
.front-only .card{animation:none;}
.front-only .front{
   animation:none;
   transform:rotateZ(0deg);
}
</style>
<div class="front-only" style="padding-top:1rem;">
<AceOfSpades />
</div>

## Set up the back

While the back looks more complex, it actually a lot easier to setup since it only one element

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

- `transform` has Z rotatation so that like the `.front` element it tilts over onto its corner. The Y rotation makes it so that we only see front face first and during the `.card` animation it then flips this backside toward the viewer.
- `border` is just a bit darker shade of red to distinguish it from the background pattern generated.
- `background` and `background-size` set up a pattern very similar to what happens in the [Animated Checkered Background](../showcase/2025-05-12%20Animated%20Checkered%20Background.md) post but with some modifications to match what some card decks use.

<style>
.back-only .card{animation:none; transform:rotateY(180deg);}

</style>
<div class="back-only" style="padding-top:1rem;">
<AceOfSpades />
</div>

## All together

And now we enable all the pieces together and get this neat effect that could be applied to many more 'cards' :D

<div style="padding:1rem 0">
<AceOfSpades />
</div>

-zan0
