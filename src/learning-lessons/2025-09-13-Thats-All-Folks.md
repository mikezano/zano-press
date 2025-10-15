---
title: Merry Melodies Outro
description: How to place things for centering
date: 2025.08.17
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

If you've ever watched old Bugs Bunnies cartoons the below might bring back some core memories 🐰

<ThatsAllFolks />

In a previous post I was going over how you can center items in a more modern way and I wanted to expand on that to show how that can be used to create the classic Merry Melodies Outro 😀

## Html Setup

```html
<main id="container">
  <div class="layer radial-circles"></div>
  <div class="layer blue-circle"></div>
  <svg class="layer" viewBox="0 0 100 100">
    <path
      id="circlePath"
      display="none"
      d="M 50 60
             m -40, 0
             a 40,10 0 1,1 80,0"
    />
    <text>
      <textPath href="#circlePath" startOffset="10%">
        That's All Folks!
      </textPath>
    </text>
  </svg>
</main>
```

- `.container` will hold everything together. We will use CSS grid to help align everything in a centered way
- `.radial-circles` - the red rings
- `.blue-circle` the centered circle where sometimes you'd see someone like Porky Pig pop out of.
- `<svg />` - this element is the key to having our curved text written in.

Let's slowly layer in the pieces in the order of `.radial-circles`, `.blue-circle` , `svg`

## Red Ring Curtains

The red rings form the base of this object with a simple gradient of hard stops making it the transition between the rings

<style>
  .red-ring-only .blue-circle, .red-ring-only svg{display:none}
</style>
<ThatsAllFolks class="red-ring-only"/>

```css
& .radial-circles {
  width: inherit;
  height: inherit;
  --inner-red: hsla(0, 80%, 45%);
  --outer-red: hsla(0, 80%, 25%);

  background: radial-gradient(
      circle at center,
      transparent 40%,
      var(--inner-red) 40%,
      var(--outer-red) 50%,
      var(--inner-red) 50%,
      var(--outer-red) 60%,
      var(--inner-red) 60%,
      var(--outer-red) 70%,
      var(--inner-red) 70%,
      var(--outer-red) 80%,
      var(--inner-red) 80%,
      var(--outer-red) 90%,
      var(--outer-red) 100%
    ), var(--outer-red);
}
```

What yu see happening is an alternating between the two shades of red every 10% which causes the solid change.

## Blue Circle background

We add a circle on top of the red rings to give this the effect of seeing through the red rings and into the blue distance

```css
& .blue-circle {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: hsla(220, 60%, 25%, 1);
}
```

<style>
  .no-text svg{display:none}
</style>
<ThatsAllFolks class="no-text"/>

## Place center

There's a property in `grid`-landia that lets you center things with `place-content: center`. Let's use that here.

```css
#container {
  display: grid;
  place-content: center;

  & .layer {
    grid-area: 1/1;
    place-self: center;
  }
}
```

- `display:grid` we are turning on the grid.
- `place-content: center` - makes is so that in any grid cell the content wil be centered.

<style>
  .basic svg{ display:none }
  .basic .layer{ place-self: }
</style>
<ThatsAllFolks class="basic" />

~ zan0

```

```
