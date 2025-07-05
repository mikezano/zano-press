---
title: View Transitions API
description: Simple gallery using view transition
date: 2025.07.04
tag: "#learning-lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

The View Transition API in CSS is relatively new and is a great tool for animating elements that trigger immediate state changes from `block` to `none` and vice-versa. Click on the quadrants below to see an example:

<ViewTransitionGallery style="margin-bottom:2rem"/>

Each quadrant triggers animations to display a scaled up version of the quadrant over the top of the grid. This is akin to an image gallery but simplified into this Micrsoft-Simon-esque looking object .

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

- `#view-transition-gallery` helps center the below elements.
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

#grid div {
    transition: box-shadow 0.2s ease-in-out;
}

#grid div:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

#grid div:nth-child(1) {
    background-color: #ffd1dc;
}
...
/* :nth-child() background-color definition for every other div */
```

🔑 points:

The goal is to set up a 2x2 grid with the following:

- `width` and `height` use the same `var(--size)` value (200px in this case) to keep things square in its overall size
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

- This element is what gets scaled up (acting like an image gallery element). Note that is starts with `display:none`
- It doesn't completely cover the 4 quadrant squares when scaled up due to the `calc(...)` statements. This lets you click on the outer edges of the visible colored quadrants to bring in a different zoomed quadrant.
- `view-transition-name: zoom-transition` is probably the **most important** piece of this. It establishes a selector for CSS to look for when deciding what elements and animations to perform when the element hides/shows from view.

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

- Both `::view-transtion-new(zoom-transition)` and `::view-transition-old(zoom-transition)` are tied to the `view-transition-name: zoom-transition` property/value from the `#zoom` element.
- Think of the 'new' in the pseudo-selector `::view-transition-new(zoom)` as an indicator of what to do when the `#zoom` element changes from `display:none` to `display:block`. When this transition happens from `none` to `block` CSS selects elements with the `zoom-transition` value which is on `#zoom` and in this case we do a `zoom-in` animation.
- The opposite of this is the 'old' in the psuedo-selector `::view-transition-old(zoom-transition)` which is going to select the `#zoom` element again and kick off the `zoom-out` animation.

## A dash of Javascript

We do need a bit of Javascript to change the `display` state of the `#zoom` element from `none` to `block`, which is done with this Javascript:

```Javascript
document.getElementById("grid").addEventListener('click', async (el) => {
    const transition = document.startViewTransition(() => {
        if (el) {
            const color = getComputedStyle(el.target).backgroundColor;
            const zoomEl = document.getElementById("zoom");
            zoomEl.style.backgroundColor = color;
            zoomEl.style.display = "block";
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
  - Note that `transition` is `await`-ed so that we can let the animation complete without interruption.
  - We do have click functionality on the `#zoom` element which does modify its `display` value to `none` and also awaits the transition.

## All together

- ~ Zano
