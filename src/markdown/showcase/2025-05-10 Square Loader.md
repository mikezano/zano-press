---
title: Square Loader
description: Not all spinners need to be round
date: 2025.05.10
tag: "#showcase"
---

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

We need the following to control different aspects

```css
:root {
  --border-size: 10px;
  --size: 100px;
  --color: #0068b5;
  --duration: 1s;
  --delay: calc(var(--duration) / 2);
  --percent: 50%;
  --timing: linear;
}
```

## CSS - container

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
- `box-sizing: border-box` will make life easer as we calculate the size of elements so that margin/padding are not a factor

<style>
#loader-box-only {
  width: var(--size);
  height: var(--size);
  border: var(--border-size) solid #ddd;
  position: relative;
  box-sizing: border-box;
}
</style>

The above code (with rotation animation disabled) will yield:

<div id="loader-box-only"></div>

## CSS - rectangle segments

Let's look at what happens with the right side child element of the rectangle. Functionally, the other sides have the same css, adjusted for the position they represent.

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

- `position:absolute` lets us use `top` and `right` attributes with values that positionally would start inside the gray square. The `-1` multiplier here will help move the element on top of the right side edge of the parent `.loader` to give color to the border.
- `width: var(--border-size)` makes it so that this element perfectly fits over the right side of the rectangle.
- `background` creates a linear-gradient that uses the `var(--percent)` with a value of 50% in two adjacent parameters which in effect make an immediate transition in color at the 50% mark.
- `background-size` delcares the width and height of solely the background. The interesting piece here is height which is calculated to be twice the height of the element itself. The overflow of this element is hidden but is what allows us to animate it to simulate movement.

With this in place (and animations turned off) the the square we start with now looks like:

<style>
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
</style>

<div id="loader-box-only">
    <div id="loader__right-only-no-animation"></div>
</div>

## CSS - animated side

```css
@keyframes loader-right {
  100% {
    background-position: 0 calc(var(--size) * 2);
  }
}
```

For this right segment of the square we want to move it downwards in the animation via `background-position` so that it reveals the white background simulating the movement

Adding on to before it should look like:

<style>
    #loader__right-only{
        animation: loader-right var(--timing) var(--duration) infinite var(--delay);
    }
</style>
<div id="loader-box-only">
    <div id="loader__right-only"></div>
</div>

~ Zano
