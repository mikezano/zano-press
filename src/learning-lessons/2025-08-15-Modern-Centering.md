---
title: Centering in 2025
description: How to place things for centering
date: 2025.08.17
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

<ThatsAllFolks />

Centering elements comes in a variety ways , each with its postivies and negatives, but there's definiltely ways that are outdated. Hopefully in 2025 you are not doing hard-coding pixel values into either padding or margins which immediately flow out the window once you resize your window.

## Html Setup

```html
<main id="container">
  <div class="layer radial-circles"></div>
  <div class="layer blue-circle"></div>
  <svg class="layer" viewBox="0 0 100 100">
    <path
      id="circlePath"
      display="none"
      d="M 50 60
             m -40, 0
             a 40,10 0 1,1 80,0"
    />
    <text>
      <textPath href="#circlePath" startOffset="10%">
        That's All Folks!
      </textPath>
    </text>
  </svg>
</main>
```

- `.container` is holding everything together. We will use CSS grid to help align everything in a centered way
- `.radial-circles` is the red rings
- `.blue-circle` is the centered circle where sometimes you'd see someone like Porky Pig pop out of.
- `<svg />` - this element is the key to having our curved text written in

~ zan0
