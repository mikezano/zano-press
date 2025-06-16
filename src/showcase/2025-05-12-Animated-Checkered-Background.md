---
title: Animated Checkered Background
description: Background can have multiple pieces
date: 2025.05.12
tag: "#showcase"
---

<style>
.layer-a, .layer-b, .layer-c{
  --azure: hsla(207, 100%, 40%, 1);
  --crimson: hsla(348, 83%, 47%, 1);
  animation:none;
  border:0.1rem solid var(--vp-c-default-1);
}
.layer-a{
  background: linear-gradient(
      45deg,
      var(--azure) 25.5%,
      transparent 25%,
      transparent 75%,
      var(--azure) 75%,
      var(--azure) 0
    );
}
.layer-b{
background: linear-gradient(
      45deg,
      var(--azure) 25.5%,
      transparent 25%,
      transparent 75%,
      var(--azure) 75%,
      var(--azure) 0
    );
    background-size: 100px 100px;
}


.layer-c{
    background:
        linear-gradient(45deg, var(--azure) 25.5%, transparent 25%, transparent 75%, var(--azure) 75%, var(--azure) 0),
        linear-gradient(45deg, var(--crimson) 25.5%, transparent 25%, transparent 75%, var(--crimson) 75%, var(--crimson) 0);
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

A lot more than just solid colors and gradients are possible for backgrounds. How about a multi layered gradient background that can yield the following ? Practial ? Maybe not, but I do use something like this on my [personal website](https://michaelmanzano.com) Let's look at how it works...

<AnimatedBackground />

## HTML setup

Just one `<div/>` needed here 🤯. The magic will come in being able to define multiple backgrounds on one element through CSS.

```html
<div class="animated-background"></div>
```

## CSS - initial background layer

Let's start with one of the background layers and see what that looks like in isolation.

```css
.animated-background {
  width: 200px;
  height: 200px;
  background: linear-gradient(
    45deg,
    var(--azure) 25.5%,
    transparent 25%,
    transparent 75%,
    var(--azure) 75%,
    var(--azure) 0
  );
}
```

In the `background: linear-gradient(...)` definition we start with an orientation of `45deg`. This will slant the gradient and go from bottom-left (0%) to top-right (100%). It starts with the color defined via the variable `--azure` and when it gets ~25% through we start transitioning to the next color. In this case the next "color" is transparent and starts at 25% as well. This causes an immediate transition between `--azure` and transparent value leaving a solid-looking triangle shape in place. We do the same towards the end of the gradient range to get a triangle shape on the top right.

Note: The `.5%` added on the first `--azure` value helps in avoiding a very thin gap that can appear between it and the triangle coming from second layer that will be applied later on.

<div class="animated-background layer-a"></div>

## CSS - sizing the background

```css
.animated-background {
  ...
  background-size: 100px 100px;
}
```

The initial size of our `div` element is 200px by 200px. Using the `background-size` property we can shrink the "triangle" gradient to 100px by 100px which will make the shape repeat in each quadrant.

<div class="animated-background layer-b"></div>

## CSS - multiple backgrounds

Remember, `background` allows for multiple layers to be defined with each being comma separated. We take advantage of that to generate the following:

```css
.animated-background {
    ...
    background:
        linear-gradient( /* layer 1 */
            45deg,
            var(--azure) 25.5%,
            transparent 25%,
            transparent 75%,
            var(--azure) 75%,
            var(--azure) 0
        ),
        linear-gradient( /* layer 2 */
            45deg,
            var(--crimson) 25.5%,
            transparent 25%,
            transparent 75%,
            var(--crimson) 75%,
            var(--crimson) 0);
    background-size: 100px 100px, 100px 100px;
    background-position: 0 0, 50px 50px;

}
```

- `background` now has two `linear-gradient`'s defined with the second using `--crimson` to better distinguish the triangles in this example.
- `background-size` now has two layer values of 100px by 100px to acheive the same quadrant repetition from above.
- `background-position` will control initial position of each layer in the `background`. The first layer still stays at the bottom-left with `0,0` and the second gets shifted in the x and y direction 50px. Below on the left is the final result from the above changes, and on the right an animated visual to help understand how we get to this "checkerboard".

<div style="display:flex; gap:2rem">
    <div class="animated-background layer-c" style="animation:none"></div>
    <div class="animated-background layer-c"></div>
</div>

## CSS - moving the checkerboard

All that remains is to add animation to the `background-position` to move everything in unison

```css
.animated-background {
    ...
    background: linear-gradient(...), linear-gradient(...), orange;
    animation: move-background 10s linear infinite;
    ...
}
@keyframes move-background {
    100% {
        background-position: 0 -400px, 50px -350px;
    }
}
```

We do add one more layer `orange` to the `background` value so that there is a solid color behind all the transparent values from the `linear-gradient`'s defined before it. We also change the coloring on the triangles to `black` to make it look like a full square. The `move-background` animation will simply pull everything 'upwards' on the screen by moving the y-position. The x value of 50px for the second layer comes from having to initially move that layer to acheive the checkerboard effect. The y value of this second layer already started at 50px so it needs to move towards -350px to have the same net distance of moving updwards `400px` . The third solid color `orange` layer doesn't need any position properties specified since it will stay in place the entire time.

<div class="animated-background"></div>

[Full Demo on Codepen](https://codepen.io/_zan0/pen/GYpoKB?editors=0100)

~ Zano
