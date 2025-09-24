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

## Basic example

<style>
:root{--size-demo:200px;}

#grid-centering{
  width:var(--size-demo);
  height:var(--size-demo);
  border:1px solid black;
}
#grid-centering .layer-a{
  width:calc(var(--size-demo)/1.5);
  height:calc(var(--size-demo)/1.5);
  border:1px solid orange;
}
#grid-centering .layer-b{
  width:calc(var(--size-demo)/3);
  height:calc(var(--size-demo)/3);
  border:1px solid green;
}
#grid-centering.grid div.layer-a,
#grid-centering.place-content div.layer-a,
#grid-centering.place-self div.layer-a,
#grid-centering.grid div.layer-b,
#grid-centering.place-content div.layer-b,
#grid-centering.place-self div.layer-b{
  grid-area:1/1;
}

#grid-centering.grid{
  display:grid;
}
#grid-centering.place-content,
#grid-centering.place-self{
  display:grid;
  place-content:center;
}
#grid-centering.place-self div.layer-a,
#grid-centering.place-self div.layer-b{
  place-self:center;
}


</style>

Let's have a look at the 'wireframe' of the that's all folks

Step 1:

Step 2:

Step 3:

Step 4: to tryly center we use `place-self:center` on the elements so that they center in the grid

## 1. Starting point

```html
<main id="grid">
  <div class="layer-a"></div>
  <div class="layer-b"></div>
</main>
```

```css
#grid {
  border: 1px solid black;
  width: 200px;
  height: 200px;
}

.layer-a {
  border: 1px solid orange;
  width: 133px;
  height: 133px;
}

.layer-b {
  border: 1px solid green;
  width: 66px;
  height: 66px;
}
```

Will result in this

  <main id="grid-centering" class="default">
    <div class="layer-a"></div>
    <div class="layer-b"></div> 
  </main>

## 2. Add CSS Grid

```css
#grid {
  ...
  display: grid;
}

.layer-a, .layer-b{
  grid-area:1/1;
}
```

- `display:grid` starts to shift elements into a grid we define.
- `grid-area:1/1` essentially says "put both `layer-` elements into the same grid cell at row 1 column 1, which by default shifts them into the position we see below

  <main id="grid-centering" class="grid">
    <div class="layer-a"></div>
    <div class="layer-b"></div>
  </main>

## 3. Place content

```css
#grid{
  ...
  place-content:center
}
```

- `place-content:center` tells the grid to center align all its content. In this case there is only 1 cell (with two `layer-` elements) so we effectively shift the cell to the center.

  <main id="grid-centering" class="place-content">
    <div class="layer-a"></div>
    <div class="layer-b"></div>
  </main>

## 4. Place self

```css
.layer-a,
.layer-b {
  place-self: center;
}
```

- `place-self:center` gets us the correct visual we want. Each `layer-` centers itself within the one cell of the grid. The orange square doesn't move since its dictates the size of the cell based on its size.. The smaller green square does move towards the center and gives everything an even link

  <main id="grid-centering" class="place-self">
    <div class="layer-a"></div>
    <div class="layer-b"></div>
  </main>

<div style="display:flex;gap:4rem; flex-wrap:wrap">

</div>
~ zan0
```
