---
title: Centering in 2025
description: How to place things for centering
date: 2025.08.17
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

In 2025, how do you go from A --> B with just a few lines of CSS ?

<div style="display:flex;flex-wrap:wrap;gap:1rem; width:500px;">
  <ConcentricSquares class="base"  />
  <ConcentricSquares />
  <p style="width:200px;margin:0">A</p>
  <p style="width:200px;margin:0">B</p>
</div>

Hopefully you're not hard-coding pixels values which for one, may not be a responsive solution, but instead are reaching towards css `flex` and `grid` functionality. Here's a quick 4 steps recepie on how to create the concentric squares displayed in B above.

<style>
#concentric-squares.base{
  display:block;
  place-content:initial;

  & .content-a, & .content-b{
    grid-area:auto;
    place-self:initial;
  }
}

#concentric-squares.grid{
  display:grid;
  place-content:initial;

  & .content-a, & .content-b{
    grid-area:1/1;
    place-self:initial;
  }
}
#concentric-squares.place-content{
  display:grid;
  place-content:center;

  & .content-a, & .content-b{
    grid-area:1/1;
    place-self:initial;
  }
}
#concentric-squares.place-self{
  display:grid;
  place-content:initial;

  & .content-a, & .content-b{
    grid-area:1/1;
    place-self:center;
  }
}


</style>

## 1. Starting point

We start with this basic setup:

<ConcentricSquares class="base" />

```html
<main id="grid">
  <div class="content-a"></div>
  <div class="content-b"></div>
</main>
```

```css
:root {
  --size: 200px;
}
#grid {
  border: 1px solid orange;
  width: var(--size);
  height: var(--size);
}

.content-a {
  border: 1px solid green;
  width: calc(var(--size) / 1.5);
  height: calc(var(--size) / 1.5);
}

.content-b {
  border: 1px solid blue;
  width: calc(var(--size) / 3);
  height: calc(var(--size) / 3);
}
```

- 3 elements with `.content-a` and `.content-b` being children of `#grid`
- We use the `--size` variable so we can calculate sizes that make `.content-` elements fit perfectly in `#grid`

## 2. Add CSS Grid + grid-area

Next, start to add `grid` details to define the cells in it:

<ConcentricSquares class="grid" />

```css
#grid {
  ...
  display: grid;
}

.content-a, .content-b{
  grid-area:1/1;
}
```

- `display:grid` is going to make any child element inside of `#grid` become a potential "cell"
- `grid-area:1/1` essentially says _put both `.content-` elements in the same grid cell at row 1, column 1_. This will stack them on top of each other and aligns them in the upper-left corner of the containing `#grid` element.

## 3. Place content

Let's center the cells towards the middle of the `#grid`:

<ConcentricSquares class="place-content" />

```css
#grid{
  ...
  place-content:center;
}
```

- `place-content:center` tells the grid to center align all its content (aka the 'cells' inside the `#grid`). In this case there is only 1 cell (with two `.content-` elements) so we effectively shift this one cell to the center.

## 4. Place self

And finally, we center the `.content-a` and `.content-b` within their one cell:

<ConcentricSquares class="place-self" />

```css
.content-a,
.content-b {
  place-self: center;
}
```

- `place-self:center` gets us the correct visual we want. Each `.content-` centers itself within the one cell of the grid. The green square doesn't move since its the larger of the two `.content-` elements and dictates the size of the cell based on its size. The smaller blue square does move towards the center and gives everything a concentric look.

[Full demo on Codepen](https://codepen.io/_zan0/pen/pvjQRqK)

~ zan0
