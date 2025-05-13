---
title: Animated Checkered Background
description: Background can have multiple pieces
date: 2025.05.12
tag: "#showcase"
---

<style>
.layer-a, .layer-b, .layer-c{
  animation:none;
  border:0.1rem solid var(--vp-c-default-1);
}
.layer-a{
  background: linear-gradient(
      45deg,
      black 25.5%,
      transparent 25%,
      transparent 75%,
      black 75%,
      black 0
    );
}
.layer-b{
background: linear-gradient(
      45deg,
      black 25.5%,
      transparent 25%,
      transparent 75%,
      black 75%,
      black 0
    );
    background-size: 100px 100px;
}


.layer-c{
    background:
        linear-gradient(45deg, black 25.5%, transparent 25%, transparent 75%, black 75%, black 0),
        linear-gradient(45deg, green 25.5%, transparent 25%, transparent 75%, green 75%, green 0);
    background-repeat: repeat, repeat;
    background-position: 0 0, 50px 50px;
    background-size: 100px 100px, 100px 100px;
    animation: move-layer-c 10s linear infinite;
}

.layer-d{
    background:
        linear-gradient(45deg, black 25.5%, transparent 25%, transparent 75%, black 75%, black 0),
        linear-gradient(45deg, green 25.5%, transparent 25%, transparent 75%, green 75%, green 0);
    background-repeat: repeat, repeat;
    /* background-position: 0 0, 50px 50px; */
    /* background-size: 100px 100px, 100px 100px; */
    animation: move-layer-d 10s linear infinite;
}
@keyframes move-layer-c{
    0%{
     background-position: 0 0, 0 0;
    background-size: 100px 100px, 100px 100px;     
    }
     50% {
    background-position: 0 0, 50px 0;
    background-size: 100px 100px, 100px 100px;
  }
 100% {
    background-position: 0 0px, 50px 50px;
    background-size: 100px 100px, 100px 100px;
  }  
}

@keyframes move-layer-d{
    0%{
     background-position: 0 0, 0 0;
    background-size: 200px 200px, 200px 200px;     
    }
     50% {
    background-position: 0 0, 0 0;
    background-size: 100px 100px, 200px 200px;
  }
 100% {
    background-position: 0 0px, 50px 50px;
    background-size: 100px 100px, 100px 100px;
  }  
}

</style>

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

A lot more than just solid colors and gradients are possible for backgrounds. How about a multi layered gradient background that can yield the following ? Lets look at how it works...

<AnimatedBackground />

## HTML setup

Just one div needed here 🤯. The magic will come in being able to defined multiple backgrounds through CSS.

```html
<div class="animated-background"></div>
```

## CSS - initial background layer

Let's start with one of the background layers and see what that looks like in isolated

```css
.animated-background {
  width: 200px;
  height: 200px;
  background: linear-gradient(
    45deg,
    black 25.5%,
    transparent 25%,
    transparent 75%,
    black 75%,
    black 0
  );
}
```

In the `background: linear-gradient` definition we start with an orientation of 45deg. This will slant the gradient going from bottom-left (0%) to top-right (100%). It starts with the color black and when is about ~25% through we start transitioning to the next color. In this case the "color" is transparent and starts at 25% as well. This causes transition between black and transparent to be immediate leaving a solid look triangle shape. We do the same towards the end of the gradient range to get a triangle shape on the top right.

Note: The `.5%` added on the first black value helps in avoiding a very thin gap that can appear between it and the actual transparent value that only appears when all the pieces are put together.

<div class="animated-background layer-a"></div>

## CSS - sizing the background

```css
.animated-background {
  ...
  background-size: 100px 100px;
}
```

The initial size of our element is 200px by 200px. Using the `background-size` property we can shrink the "triangle" gradient to 100px by 100px and the "triangle" shapes repeated in each quadrant of the rectangle.

<div class="animated-background layer-b"></div>

## CSS - multiple backgrounds

`background` allows for multiple declarations to be defined with each being comma separated. We take advantage of that and other background properties in the following:

```css
.animated-background {
    ...
    background: linear-gradient(
        45deg,
        black 25.5%,
        transparent 25%,
        transparent 75%,
        black 75%,
        black 0
    ), linear-gradient(45deg, green 25.5%, transparent 25%, transparent 75%, green
        75%, green 0);
    background-size: 100px 100px, 100px 100px;
    background-position: 0 0, 50px 50px;

}
```

`backgound` now has two `linear-gradient`'s defined with the second using green to better distinguish the triangles. `background-size` remains the same as before now applied to both layers to achieve the repetition in each quadrant of the element. `background-position` will control initial position of each layer in the `background`. The first remains the same and the second gets shifted in the x and y direction 50px and will yield:

<div class="animated-background layer-c"></div>
```
