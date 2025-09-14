---
title: Centering in 2025
description: How to place things for centering
date: 2025.08.17
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

<ConcentricSquares />

Centering elements comes in a variety ways , each with its postivies and negatives, but there's definitely ways that one could consider outdated. In 2025 you probably want to avoid hard-coding pixel values which immediately become incorrect with responsiveness considerations. Lets look at two properties that would help in a situation as described below to create concentric squares on top of each other.

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
