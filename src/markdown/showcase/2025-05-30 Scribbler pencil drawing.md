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

<style>
  @media (max-width:960px){
    .scribbler-examples{
      flex-direction:column;
    }
  }

  .pencil-span{
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAt9JREFUSEuNVktPE1EYPXc6zFigRWmIBRJCWyOaGInvuBAwwbgFY1zaBhdEDGyNe/kDoKi4sLN2UWNcaFxA6lLrwsSFUUmMSDGN0ZAwtsN0xsyjnXu5d4qTNL1zH9/jfOd8dwiaDwFgC97Y+WC/P3KX6T277ASv4ZvCgqDnCWwqPPYEEBakP/8/runM6KAJnSGXrRgPdpYAdvLBI1K+Oc0sUME1wXTT3APy3XCZ/fe1SDJ6Hf2dy+T5NdcJk3EQtcCyACLXgT+/sLiY75Xjx668bB+W+qIyfuhNJ94e4v75B8Ks0WwJ4tdXEoXXP2+fRHRooEeJlc49rAxLG7qMdX2ZlG/5cDUccDachQZc/NgqKnmoVtZSI2ulrcdy+XfXgLHxpzQ5v/1RXp/J0ll6GYRRmisy4BgnipXFPgtQLdSrytqLT3fl75XoyuzcbM7h6m7WiTEQGLeLah5qPesYdn+1CFAj+Kt3PWu/+GvSO8JCTdVA4IcKxXZgiVhZSAToNIE6gV2TQGqSRkZ2coHQ+I7AQkRH4Y/tYlseip1FxCGGDVIngEWAHWhk1AhgCSFiyxpwsGy1AXUAJtHIiJFrwEK3itY1oORsv1HycArq4K1YgOFhDkPSyIWdnNscm3xv9CLWPMMiuq7V1UxBjX6bCAoqATXJwV2TaFg4SFleMkVu+P6wMLEaGzqT6kssmUrHRtotZlUCDKJJI0au0U7ETTC0yMFCaX70rdzZrcePnB7sTdwz1XolDZ8tLe8MrsiMkr3VmauXD904Uf3sJCp3dBfjR08N9qlP3qtjX12e7x01rXxvP/OMXxqf2q/a03fOm2cBvGuLdW8fnyuMMSLiRMjD4sEoyCCTzhRT6VT+8IFIcenpqy8CQQvSEDigdNscJpMHezY3NyuOBfpuCI6HGfL3+4xiGyUlM07ulCbC+oz3mdAiA9oGHan4Ehf0AkFrYQQYdoSVS0BODi62eXIl+wdgD0cxMIk2FgAAAABJRU5ErkJggg==");
  width:21px;
  height:21px;
  display:inline-block;
  }
  
</style>
<div class="scribbler-examples" style="display:flex; gap:1rem">
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
  <img class="pencil" src="data:image/png;base64..." />
</div>
```

🔑 points:

- `.paper` sets up a container that looks like actual notebook paper 📃.
- The svg `.drawn-path` element is responsible for holding the `path` element which will contain instructions for what is actually is drawn in the `d` attribute.
- The `pathLength` attribute helps in saying "treat the entire length of this path as 1 unit". Without it you'll see the path broken up into segments.
- The `.pencil` will contain this -> <span class="pencil-span"></span> base64 string background image that "follows" the same drawing path to make it look like a proper scribble.

  **Note on the `<path />`**

  - The path needs to be a single stroke as animating multiple strokes are not supported.
  - You can't set the SVG `d` attribute value via CSS.

## Make .paper look like paper

Our piece of 'paper' has the following variables and containment definitions.

```css
.paper {
  --duration: 2s;
  --size: 200px;
  --half-size: calc(var(--size) / 2);
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

To ensure the drawing and pencil act as two differnt layers we need to prep the following:

```css
.drawn-path,
.pencil {
  position: absolute;
  grid-column: 1;
  grid-row: 1;
  transform: translate(
    calc(-1 * var(--half-size)),
    calc(-1 * var(--half-size))
  );
}
```

- `grid-colum` and `grid-row` are key so that these elements occupy the same cell of the grid
- Since everything is perfectly centered on the piece of paper (from `place-content:center` in the parent `.paper`), we need the `transform` here to help pull the starting point of where the drawing and the pencil technically start to be from to the top left corner.

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

(0,0) in our display's coordinate system usually means to start from the top-left corner. Our SVG line from above looks like it followed that principle but in reality for SVG (0,0) means start from the "middle". We adjusted for that by what we did with the `transform` previously but if we had let SVG do it's own thing the drawing would look 'shifted' and go off the page. We also need to give a `height` and `width` that matches the size of the paper so the drawn path is visible.

```css
.drawn-path {
  height: var(--size);
  width: var(--size);

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

- We use CSS nesting with the `& path` to better target the SVG element
- For `fill:none`, we only care about the 'edges' of our drawing, in the case of a line there is nothing to 'fill' in so, `none` is a good value for our scribbling purposes
- `stroke` is the color of the line and `stroke-width` controls the thickness
- Think of `stroke-dasharray` as the answer to "How many segments do you want your line to be composed of ?". In this case we want a solid single line therefore we use `1` which also helps us stay in conjunction with the `pathLength` attribute that was set.
- Think of `stroke-dashoffset` as the answer to "How much of the line do you want drawn in ?" In this case a positive value of 1 actually shifts things backwards so nothing will be drawn in. By animating this with the `draw` animation we take the `stroke-dashoffset` value to 0 which essentially 'draws' it back in.

Here's a visual of what would happen if we didn't do the earlier `transform: translate(...)` on a heart shape path.

<style>
    .no-transform{margin-bottom:1rem;}
    .no-transform .pencil{display:none;}
    .no-transform .drawn-path {transform: translate(0,0)}

</style>
<div class="no-transform">
    <AnimatedPathDrawing id="line2" path="M100 180 C 60 140, 20 100, 20 60 C 20 20, 60 20, 100 60 C 140 20, 180 20, 180 60 C 180 100, 140 140, 100 180 Z"/>
</div>

## Make the pencil work

Finally the pencil, not as complex as the SVG portion, a bit of manual manipulation to get the led tip on the drawing path so that our pencil 'follows' the drawing. That can be acheived with:

```css
.pencil {
  top: -6px;
  left: 6px;
  width: 21px;
  height: 21px;
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

- `top` and `left` are 'trial and error' values to get the led tip directly on the SVG drawing path
- `width` and `height` are what the dimensions of the base 64 string pencil generates -> <span class="pencil-span"></span>
- `offset-path` this is what gives the pencil a path to follow. We use the same value used on the `path` element and supply to the CSS function `path(...)` [more info](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path)
- `offset-rotate` prevents the pencil from actually rotating along the path drawn. We want the pencil to stay upright while moving.
- `offset-distance` is where in the path to start. We start at the beginning, hence `0`
- Our animation `write` then takes care of the rest. It matches the duration, timing-function and repeats infintely to stay in sync with the svg being drawn in. The `offset-distance` is set to `100%` during its animation so the pencil starts moving.

Put it all together and you can draw single stroke elements like the good ol' cool S :D

<AnimatedPathDrawing />

[Full demo on codepen](https://codepen.io/_zan0/pen/OPVywoR)

Try to tweak the codepen and if you need a good editor to create some paths of your own to plug in checkout out -> [svg-path-editor](https://yqnn.github.io/svg-path-editor/)

-zan0
