---
title: Square Loader
description: Not all spinners need to be round
date: 2025.05.10
tag: "#showcase"
---

<style>
#loader-box-only {
  width: var(--size);
  height: var(--size);
  border: var(--border-size) solid #ddd;
  position: relative;
  box-sizing: border-box;
}

#loader__right-only-no-animation, #loader__right-only {
  position:absolute;
  top: calc(-1 * var(--border-size));
  right: calc(-1 * var(--border-size));
  width: var(--border-size);
  height: var(--size);
  background: linear-gradient(var(--color) var(--percent), transparent var(--percent));
  background-size: var(--border-size) calc(var(--size) * 2);
  background-position: 0 0;    
}

#loader__right-only{
  animation: loader-right var(--timing) var(--duration) infinite var(--delay);
}

.no-animation{
  animation:none;
}
</style>

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

Most spinners are round, how about a square one ? Let's breakdown how it works...

<SquareLoader />

## HTML setup

Nothing fancy, setting up a container `.loader` to hold the 4 sides of the rectangle organized with B.E.M syntax.

```html{.test}
<div class="loader">
  <div class="loader__top"></div>
  <div class="loader__right"></div>
  <div class="loader__bottom"></div>
  <div class="loader__left"></div>
</div>
```

## CSS - variables

We need the following variables to control different aspects applied to our component:

```css
:root {
  --border-size: 10px;
  /* Keeps everything 'square' */
  --size: 100px;
  /* Good looking shade of blue */
  --color: #0068b5;
  /* For animation */
  --duration: 1s;
  /* Used later to coordinate multiple animations */
  --delay: calc(var(--duration) / 2);
  /* Used in linear gradient stops */
  --percent: 50%;
  /* animation timing function */
  --timing: linear;
}
```

## CSS - container

This defines the CSS properties of the main containing `<div/>` element housing the children sides of the rectangle.

```css
.loader {
  width: var(--size);
  height: var(--size);
  border: var(--border-size) solid #ddd;
  position: relative;
  box-sizing: border-box;
  animation: rotate var(--timing) calc(var(--duration) * 5) infinite;
}
```

- `width` and `height` are controlled by the same `size` variable to ensure the overall shape remains as a square
- `position: relative` will help to contain the different child elements of the rectangle inside of `.loader`
- `box-sizing: border-box` will make life easer as we calculate the size of elements so that margin/padding included in calculations

The above code (with rotation animation disabled) will yield:

<div id="loader-box-only"></div>

## Single rectangle segment

Let's look at what happens with the right side child element of the rectangle. Our goal is to have a strip of 'blue' traveling down the side to simulate movement around the rectangle. Functionally, the other sides will have the same css, adjusted for the position they represent.

```css
.loader__right {
  position: absolute;
  top: calc(-1 * var(--border-size));
  right: calc(-1 * var(--border-size));
  width: var(--border-size);
  height: var(--size);
  background: linear-gradient(
    var(--color) var(--percent),
    transparent var(--percent)
  );
  background-size: var(--border-size) calc(var(--size) * 2);
  background-position: 0 0;
  animation: loader-right var(--timing) var(--duration) infinite var(--delay);
}
```

- `position:absolute` lets us use `top` and `right` attributes with values that positionally would start inside the square. The `-1` multiplier here will help move the element on top of the right side edge of the parent `.loader` to make it seem like the right side is colored in.
- `width: var(--border-size)` makes it so that this element perfectly fits over the right side of the rectangle.
- `background` creates a linear-gradient that uses the `var(--percent)` with a value of 50% in two adjacent gradient stops which in effect causes an immediate transition in color at the 50% mark from our blue color to transparent
- `background-size` delcares the width and height of solely the background. The interesting piece here is height which is calculated to be twice the height of the right side element itself. The overflow of this element is hidden and leaves only the 'blue' portion visible.

With this in place (and animations turned off) the the square we start with now looks like:

<div id="loader-box-only">
    <div id="loader__right-only-no-animation"></div>
</div>

## How one side gets animated

```css
@keyframes loader-right {
  100% {
    background-position: 0 calc(var(--size) * 2);
  }
}
```

Because of the previous `background-size` value being 2x the height of the side, when we increase the y-value of `background-position` it will reveal the 'transparent' color (essentially showing the white of the container square) that makes up the linear-gradient. If we do this in an animated manner as the CSS above shows it will feel like the 'blue' strip travels down the side.

<div id="loader-box-only">
    <div id="loader__right-only"></div>
</div>

## Animation on all sides

We want to add this same animation to all sides of the rectangle, but with a slight delay between the pairs top/right and bottom/left so that the animation is seemless in making it look like a single strip of 'blue' traveling all around the square

```css
.loader__top {
  ...
  animation: loader-top var(--timing) var(--duration) infinite;
}

.loader__right {
  ...
  /* Note the delay added */
  animation: loader-right var(--timing) var(--duration) infinite var(--delay);
}
```

<div class="loader no-animation">
  <div class="loader__top"></div>
  <div class="loader__right"></div>
  <div class="loader__bottom"></div>
  <div class="loader__left"></div>
</div>

## Final Rotation

The last piece is to add the overall roation for the full 'spinner' effect. We add a `* 5` multiplier here to slow down the rotation for a more delightful experience.

```css
.loader {
    ...
    animation: rotate var(--timing) calc(var(--duration) * 5) infinite;
}

@keyframes rotate {
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
}
```

The final result:

<div style="margin:1rem">
  <div class="loader">
    <div class="loader__top"></div>
    <div class="loader__right"></div>
    <div class="loader__bottom"></div>
    <div class="loader__left"></div>
  </div>
</div>

[Full demo on codepen](https://codepen.io/_zan0/pen/zYWPyrK)

~ Zano
