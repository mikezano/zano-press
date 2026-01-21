---
title: Corner Shape
description: How to
date: 2026.01.11
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

In 2026, do you now how to control your border radius

You can even to different shape per corner

Path is limited to pixels but new shape can mix units and calcs

<style>
    
#bevel-ex, #notch-ex, #scoop-ex, #squircle-ex, #regular-ex{
  background-color:blue;
  width:100px;
  height:100px;
  margin:10px;
  border-radius:20px;

  --pastel-blue:   hsl(210, 70%, 65%);
  --pastel-green:  hsl(140, 60%, 65%);
  --pastel-yellow: hsl(50, 80%, 68%);
  --pastel-pink:   hsl(330, 70%, 68%);
  --pastel-purple: hsl(260, 60%, 68%);
}

#bevel-ex{corner-shape:bevel; background-color:var(--pastel-blue)}
#notch-ex{corner-shape:notch; background-color:var(--pastel-green)}
#scoop-ex{corner-shape:scoop; background-color:var(--pastel-yellow)}
#squircle-ex{corner-shape:squircle; background-color:var(--pastel-pink)}


</style>
<div style="display:flex">
<div id="bevel-ex" />
<div id="notch-ex"/>
<div id="scoop-ex"/>
<div id="squircle-ex" />
<div id="regular-ex" />
</div>

## Bevel

Bevel makes a 45 degree straight edge out of the corner, possible easy way of making an octagon.

<div id="bevel-ex" />

```css
#bevel {
  corner-shape: bevel;
}
```

## Notch

In laymen terms this essentially takes out a square of the corners

<div id="notch-ex" />

```css
#bevel {
  corner-shape: notch;
}
```

## Swoop

This create an inwards swoop similar to the marquee created a while ago

## Squircle

[Full demo on Codepen](https://codepen.io/_zan0/pen/pvjQRqK)

~ zan0
