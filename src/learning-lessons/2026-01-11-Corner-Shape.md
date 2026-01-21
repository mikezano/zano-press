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
    
#bevel-ex-1, 
#bevel-ex-2, 
#bevel-ex-3, 
#notch-ex-1,
#notch-ex-2,
#notch-ex-3,
#scoop-ex-1, 
#squircle-ex-1, 
#regular-ex-1{
  background-color:blue;
  width:100px;
  height:100px;
  margin:10px;
  border-radius:10px;

  --pastel-blue:   hsl(210, 70%, 65%);
  --pastel-green:  hsl(140, 60%, 65%);
  --pastel-yellow: hsl(50, 80%, 68%);
  --pastel-pink:   hsl(330, 70%, 68%);
  --pastel-purple: hsl(260, 60%, 68%);
}

#bevel-ex-1, #bevel-ex-2, #bevel-ex-3{
  corner-shape:bevel;
  background-color:var(--pastel-blue);
}
#bevel-ex-2 {
  border-radius:40px;
  background-color: var(--pastel-blue);
  width:200px;
  height:80px;
}
#bevel-ex-3{
  background-color: var(--pastel-blue);
  width:80px;
  height:80px;
  border-radius:20px;
}

#notch-ex-1, #notch-ex-2, #notch-ex-3{
  corner-shape:notch; 
  background-color:var(--pastel-green);
}
#notch-ex-2{
  border-radius:40px;
}
#notch-ex-3{
  border-radius:20px;
  width:200px;
  height:50px;
}
#scoop-ex-1{corner-shape:scoop; background-color:var(--pastel-yellow)}
#squircle-ex-1{corner-shape:squircle; background-color:var(--pastel-pink)}


</style>
<div style="display:flex">
<div id="bevel-ex-1" />
<div id="notch-ex-1"/>
<div id="scoop-ex-1"/>
<div id="squircle-ex-1" />
<div id="regular-ex-1" />
</div>

#### Bevel

`corner-shape: bevel` - makes a 45 degree straight edge out of the corner, possible easy way of making an octagon.

<div style="display:flex">
<div id="bevel-ex-1" />
<div id="bevel-ex-2" />
<div id="bevel-ex-3" />

</div>

#### Notch

`corner-shape: notch` - In laymen terms this essentially takes out a square of the corners

<div style="display:flex">
<div id="notch-ex-1" />
<div id="notch-ex-2" />
<div id="notch-ex-3" />
</div>

#### Swoop

`corner-shape: swoop` -This create an inwards swoop similar to the marquee created a while ago

<div id="scoop-ex-1" />

#### Squircle

`corner-shape: squircle` - Makes rounder corners but more conforming to how apps work

<div id="squircle-ex-1" />

[Full demo on Codepen](https://codepen.io/_zan0/pen/pvjQRqK)

~ zan0
