---
title: Centering in 2025
description: How to place things for centering
date: 2025.08.17
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

<ThatsAllFolks />

Centering elements comes in a variety ways , each with its postivies and negatives, but there's definitely ways that one could consider outdated. In 2025 you probably want to avoid hard-coding pixel values which immediately become incorrect with responsiveness considerations. Lets look at two properties that help in recreating this classic looney tunes looking outro with which involves several centering layers with `place-content: center` and `place-self: center`

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

- `.container` is holding everything together. We will use CSS grid to help align everything in a centered way
- `.radial-circles` - represents the red rings
- `.blue-circle` represents centered circle where sometimes you'd see someone like Porky Pig pop out of.
- `<svg />` - this element is the key to having our curved text written in.

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

<main id="grid">
  <div class="layer-a"></div>
  <div class="layer-b"></div> 
</main>

<style>
:root{--size-demo:200px;}

#grid{
  display:grid;
  width:var(--size-demo);
  height:var(--size-demo);
  border:1px solid black;
}
#grid .layer-a{
  width:calc(var(--size-demo)/2);
  height:calc(var(--size-demo)/2);
  border:1px solid orange;
}
#grid .layer-b{
  width:calc(var(--size-demo)/3);
  height:calc(var(--size-demo)/3);
  border:1px solid green;
}

#grid div.layer-a,#grid div.layer-b{
  background-color:transparent;
  grid-area:1/1;
  place-self:center;
}
</style>

~ zan0
