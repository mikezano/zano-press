---
title: View Transitions API
description: Simple gallery using view transition
date: 2025.07.04
tag: "#learning-lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

The [View Transition API](https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition) in CSS is relatively new and is a great tool for animating elements that trigger immediate visibilty changes from `block` to `none` and vice-versa. Click on the quadrants below to see an example:

<ViewTransitionGallery style="margin-bottom:2rem"/>

Each quadrant triggers an animation to display a scaled up version of the quadrant over the top of the grid. This is akin to an image gallery but simplified into this Micrsoft-Simon-esque looking object. [Full demo on Codepen](https://codepen.io/_zan0/pen/QwbdvxM)

## HTML Setup

```HTML
<div id="view-transition-gallery">
    <main id="grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </main>
    <main id="zoom">
    </main>
</div>
```

🔑 points:

- `#view-transition-gallery` helps contain the below elements.
- `#grid` contains the 4 colored quadrants.
- `#zoom` is the 'scaled up' gallery item appearing after clicking a quadrant color.

## The #grid quadrants

```CSS
#grid {
    display: grid;
    width: var(--size);
    height: var(--size);
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 10px;
}

#grid div:nth-child(1) {
    background-color: #ffd1dc;
}
...
/* :nth-child() background-color definition for every other div */
/* ...more styles for box shadows and hovering */
```

🔑 points:

The goal is to set up a 2x2 grid with the following:

- `width` and `height` on `#grid` use the same `var(--size)` value (200px in this case) to keep things square in its overall size
- `grid-template-columns` and `grid-template-rows` each use 2 `auto` values to ensure the `div` elements orient themselves as a 2x2 grid.
- Coloring each quadrant is a result of the `:nth-child(<number>)` rule that continues for each `div`

## The #zoom element

```CSS
#zoom {
    display: none;
    height: calc(var(--size) * 0.8);
    width: calc(var(--size) * 0.8);
    margin: calc(var(--size) * 0.1);
    view-transition-name: zoom-transition;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
}
```

- This element is what gets scaled up (acting like an image gallery element). Note that it starts with `display:none`
- It doesn't completely cover the 4 quadrant squares when scaled up due to the `calc(...)` statements. This lets you click on the outer edges of the visible colored quadrants to bring in a different zoomed quadrant.
- `view-transition-name: zoom-transition` is probably the **most important** piece of this. It establishes a selector for CSS to look for when deciding what elements to take "snapshots" of to prepare for the before and after states as animations happen.

## View Transition (Where the magic 🪄 happens)

```CSS

::view-transition-new(zoom-transition)
    { animation: zoom-in 0.5s ease-in-out; }
::view-transition-old(zoom-transition)
    { animation: zoom-out 0.5s ease-out; }

@keyframes zoom-in {
    from { transform: scale(0); }
    to { transform: scale(1); }
}

@keyframes zoom-out {
    from { transform: scale(1); }
    to { transform: scale(0); }
}
```

🔑 points:

- Both `::view-transtion-new(zoom-transition)` and `::view-transition-old(zoom-transition)` are selectors tied to the `view-transition-name: zoom-transition` property/value from the `#zoom` element.
- Think of the 'new' in the pseudo-selector `::view-transition-new(zoom-transition)` as what happens when the `#zoom` element changes from `display:none` to `display:block`. When this transition happens from `none` to `block` CSS selects applies the `zoom-in` animation which is now connected to the `#zoom` element.
- The opposite of this is the 'old' in the psuedo-selector `::view-transition-old(zoom-transition)` which is going to select the `#zoom` element again and kick off the `zoom-out` animation as we go from a `display:block` to `display:none`

## A dash of Javascript

We do need a bit of Javascript to change the `display` state of the `#zoom` element from `none` to `block` (and vice-versa), which is done with this Javascript:

```Javascript
document.getElementById("grid").addEventListener('click', async (el) => {
    const transition = document.startViewTransition(() => {
        if (el) {
            const color = getComputedStyle(el.target).backgroundColor;
            const zoomEl = document.getElementById("zoom");
            zoomEl.style.display = "block";
            zoomEl.style.backgroundColor = color;
        }
    })
    await transition.ready;
})

document.getElementById("zoom").addEventListener('click', async (e) => {
    const transition = document.startViewTransition(() => {
        e.target.style.display = "none";
    });
    await transition.ready;
});

```

🔑 points:

- We add a `click` listener on the `#grid` element that will grab the `#zoom` element and do 2 things:
  - Make the element visible with `zoomEl.style.display="block"`
  - Also take the color from the quadrant that was clicked and apply it to the `#zoom` element
- Note that `transition` stores the `document.startViewTransition` function which immediately fires its callback that modifies the DOM. This `transition` is `await`-ed so that we can let the animation complete without interruption.
- We do have click functionality on the `#zoom` element as well which modifies its `display` value to `none` and also awaits the transition.

## Without the transition

For comparison sake, lets look at what the experience would be like without the transition. Which do you like better ? 😁

<style>
    #crossfade #zoom{
        view-transition-name: none;
    }
</style>
<div style="display:flex;gap:2rem">
    <div id="crossfade" >
        <ViewTransitionGallery style="margin-bottom:2rem"/>
    </div>
    <ViewTransitionGallery style="margin-bottom:2rem"/>
</div>

<!-- If you didn't have the `view-transition-name` property on the `#zoom` element, by default the `startViewTransitions` will actually support a default 'crossfade'. As demonstration below on the left we have what would happen if you remove `view-transition-name` from this entire setup so you can see the 'crossfade'

If you apply this techinque to the root element of your pages you could in essence have every route switch produce a default crossfade betwen pages. -->

~ Zano
