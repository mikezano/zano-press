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

<table>
  <tr style="border:none">
    <td style="border:none"><ConcentricSquares class="base" /></td>
    <td style="border:none"><ConcentricSquares /></td>
  </tr>
  <tr style="background-color:transparent;border:none">
    <td style="border:none">A</td>
    <td style="border:none">B</td>
  </tr>  
</table>
<div style="display:flex;gap:1rem">

</div>

Hopefully you're not hard-coding pixels values which for one, may not be a responsive solution, but instead are reaching towards css `flex` and `grid` functionality. Here's a quick 4 steps recepie on how to get to the concentric squares displayed in B above.

<style>
#concentric-squares.base{
  display:block;
  place-content:initial;

  & .layer-a, & .layer-b{
    grid-area:auto;
    place-self:initial;
  }
}
#concentric-squares.grid{
  display:grid;
  place-content:initial;

  & .layer-a, & .layer-b{
    grid-area:1/1;
    place-self:initial;
  }
}
#concentric-squares.place-content{
  display:grid;
  place-content:center;

  & .layer-a, & .layer-b{
    grid-area:1/1;
    place-self:initial;
  }
}
#concentric-squares.place-self{
  display:grid;
  place-content:initial;

  & .layer-a, & .layer-b{
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
  <div class="layer-a"></div>
  <div class="layer-b"></div>
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

.layer-a {
  border: 1px solid green;
  width: calc(var(--size) / 1.5);
  height: calc(var(--size) / 1.5);
}

.layer-b {
  border: 1px solid blue;
  width: calc(var(--size) / 3);
  height: calc(var(--size) / 3);
}
```

- 3 elements with `.layer-a` and `.layer-b` being children of `#grid`
- We use the `--size` variable so we can calculate sizes that make `.layer-` elements fit perfectly in `#grid`

## 2. Add CSS Grid + grid-area

Next, start to add `grid` details to define the cells in it:

<ConcentricSquares class="grid" />

```css
#grid {
  ...
  display: grid;
}

.layer-a, .layer-b{
  grid-area:1/1;
}
```

- `display:grid` is going to make any child element inside of `#grid` become a "cell"
- `grid-area:1/1` essentially says _put both `layer-` elements in the same grid cell at row 1, column 1_. This effectively stacks them on top of each other and because we have not defined any alignment properties they start in the upper-left corner of the containing `#grid` element.

## 3. Place content

Let's center the cells as if they were all one object towards the of `#grid`:

<ConcentricSquares class="place-content" />

```css
#grid{
  ...
  place-content:center
}
```

- `place-content:center` tells the grid to center align all its content (aka the 'cells' inside the `#grid`). In this case there is only 1 cell (with two `layer-` elements) so we effectively shift the cells to the center.

## 4. Place self

And finally, we center the `.layer-a` and `.layer-b` within their one cell:

<ConcentricSquares class="place-self" />

```css
.layer-a,
.layer-b {
  place-self: center;
}
```

- `place-self:center` gets us the correct visual we want. Each `layer-` centers itself within the one cell of the grid. The green square doesn't move since its the larger of the two `layer-` elements and dictates the size of the cell based on its size. The smaller blue square does move towards the center and gives everything a concentric look.

~ zan0
