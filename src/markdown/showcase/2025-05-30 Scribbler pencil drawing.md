---
title: "Hand drawn scribbles"
description: SVG paths being drawin in
date: 2025.05.31
tag: "#showcase"
---

# "Hand" drawn scribbles

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

No javascript here, these little 'scribbles' are actually a result of SVG animation via CSS using the `stroke-dashoffset` property. Check it out 👁️

<div style="display:flex; gap:1rem">
<AnimatedPathDrawing id="heart" path="M100 180 C 60 140, 20 100, 20 60 C 20 20, 60 20, 100 60 C 140 20, 180 20, 180 60 C 180 100, 140 140, 100 180 Z"/>
<AnimatedPathDrawing id="spiral" path="M20 20 L180 20 L180 180 L20 180 L20 40 L160 40 L160 160 L40 160 L40 60 L140 60 L140 140 L60 140 L60 80 L120 80 L120 120 L80 120 L80 100 L100 100"/>
<AnimatedPathDrawing id="star" path="M100 20 L120 80 L180 80 L140 120 L160 180 L100 150 L40 180 L60 120 L20 80 L80 80 L100 20 Z"/>
</div>

## HTML Setup

```html
<div class="paper">
  <svg class=" drawn-path">
    <path d="..." pathLength="1" />
  </svg>
  <div class="pencil">✏️</div>
</div>
```

🔑 points:

- `.paper` sets up a container that looks like actual notebook paper 📃.
- The svg `.drawn-path` element is responsible for holding the `path` element which will specify what actually is drawn.
- The `pathLength` attribute helps in saying "treat the entire length of this path as 1 unit". Without it you'll see the path broken up into segments.
- The `.pencil` will be "following" the same path to make it look like a proper scribble.

  **Note on the `<path />`**

  - The path needs to be a single stroke as animating multiple strokes are not supported.
  - You can't set this value via CSS , but you can specify SVG paths for other html elements such as the `.pencil` which we will see later

## Make .paper look like paper

Our piece of 'paper' has the following variables and containment definitions.

```css
.paper {
  --duration: 2s;
  --size: 200px;
  position: relative;
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  /* notebook lines */
  background: linear-gradient(to bottom, white 19px, deepskyblue 20px);
  background-size: 100% 20px;
  background-repeat: repeat-y;
}
```

🔑 points:

- `position:relative` is going to help contain the drawn path and pencil icon on the paper
- `display: grid` and `place-content: center` are a more modern approach to centering elements that we use here to get `.drawn-path` and `.pencil` to be on top of each other later on
- The proximity of the `white 19px, deepskyblue 20px` in the `linear-gradient` essentially turn our gradient into a solid line because the gradient is entirely `white` until `19px` and immediately transitions to `deepskyblue` at `20px`.
- Then the `background-size` y value of `20px` combined with the `background-repeat` only doing `repeat-y` will recreate the same gradient all the way to the end of the piece of 'paper'

<style>
    .paper-only{margin-bottom:1rem;}
    .paper-only .pencil, .paper-only .drawn-path{
        display:none;
        
    }

</style>
<div class="paper-only">
    <AnimatedPathDrawing id="paperOnly"/>
</div>

## Centering the drawing and pencil

To ensure the drawing and pencil will actually remain on top of each other and centered while in motion we need to prep the following:

```css
.drawn-path,
.pencil {
  position: absolute;
  grid-column: 1;
  grid-row: 1;
  height: var(--size);
  width: var(--size);
}
```

- `grid-colum` and `grid-row` are key so that these elements occupy the same cell of the grid
- Note that we do specify the `width` and `height` to be the same value to keep everything sized correctly

## Drawing a straight line

[Path expresssions](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) in SVGs can be expressed through a combination of letters and numeric coordinates. A simple line can look as follows:

`M 100 20 L 100 180`

Funky lookin', but here's how it breaks down:

| Command   | Description                                    |
| --------- | ---------------------------------------------- |
| M 100 20  | Move (without drawing) to coordinates (100,20) |
| L 100 180 | Start drawing a line down to (100,180)         |

We plug this in to the markup on the the `d` attribute of the `path` element

`<path d="M 100 20 L 100 180" pathLength="1" />`

Here's how that would look when animated:

<style>
    .path-only{margin-bottom:1rem;}
    .path-only .pencil{display:none;}

</style>
<div class="path-only">
    <AnimatedPathDrawing id="line" path="M 100 20 L 100 180"/>
</div>

## The actual origin of the SVG

(0,0) in our display's coordinate system usually means to start from the top-left corner. Our SVG line looks like it followed that principle but in reality for SVG (0,0) means start from the "middle" in this case. If we let SVG do it's own thing the drawing would look 'shifted' and go off the page. We have to do some `translate` magic to acheive the affect we need and add some other CSS details demonstrated below:

```css
.drawn-path {
  transform: translate(-50%, -50%);

  & path {
    fill: none;
    stroke: gray;
    stroke-width: 2;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw var(--duration) linear infinite;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
```

🔑 points:

- The `transform` you see shifting the element `(-50%,-50%)` is the key ingredient that visually centers our scibble within the paper confines.
- We use CSS nesting with the `& path` to better target the SVG element
- For `fill:none`, we only care about the 'edges' of our drawing, in the case of a line there is nothing to 'fill' in so, `none` is a good value for our scribbling purposes
- `stroke` is the color of the line and `stroke-width` controls the thickness
- Think of `stroke-dasharray` as the answer to "How many segments do you want your line to be composed of ?". In this case we want a solid single line therefore we use `1` which also helps us stay in conjunction with the `pathLength` attribute that was set.
- Think of `stroke-dashoffset` as the answer to "How much of the line do you want drawn in ?" In this case a positive value of 1 actually shifts things backwards so nothing will be drawn in. By animating this with the `draw` animation we take the `stroke-dashoffset` value to 0 which essentially 'draws' it back in.

Here's a visual of what would happen if we didn't do the `transform: translate(...)` on a heart shape path.

<style>
    .no-transform{margin-bottom:1rem;}
    .no-transform .pencil{display:none;}
    .no-transform .drawn-path {transform: translate(0,0)}

</style>
<div class="no-transform">
    <AnimatedPathDrawing id="line2" path="M100 180 C 60 140, 20 100, 20 60 C 20 20, 60 20, 100 60 C 140 20, 180 20, 180 60 C 180 100, 140 140, 100 180 Z"/>
</div>

## Make the pencil work

Finally the pencil, not as complex as the SVG portion, but we want our pencil to essentially 'follow' the drawing. That can be acheived with:

```css
.pencil {
  transform: translateY(-20px) translateX(-4px);
  offset-path: path(...); /* The M 100 100 L 100 20 .... etc*/
  offset-rotate: 0deg;
  offset-distance: 0%;
  animation: write var(--duration) linear infinite;
}

@keyframes write {
  to {
    offset-distance: 100%;
  }
}
```

🔑 points:

- `transform` here is a bit of manual work just to get the pencil's tip right on the path of the svg drawing. No exact science here just have to visually work it out.
- `offset-path` this is what gives the pencil a path to follow. We use the same value used on the `path` element and supply to the CSS function `path(...)` [more info](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- `offset-rotate` prevents the pencil from actually rotating along the path drawn. We want the pencil to stay upright while moving.
- `offset-distance` is where in the path to start. We start at the beginning, hence `0`
- Our animation `write` then takes care of the rest. It matches the duration, timing-function and repeats infintely to stay in sync with the svg being drawn in. The `offset-distance` is set to `100%` during its animation so the pencil starts moving.

Put it all together and you can draw single stroke elements like the good ol' cool S :D

<AnimatedPathDrawing />

[Full demo on codepen](https://codepen.io/_zan0/pen/OPVywoR)

And if you need a good editor to create some paths try out [svg-path-editor](https://yqnn.github.io/svg-path-editor/)

-zan0
