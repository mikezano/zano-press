---
title: Corner Shape
description: How to
date: 2026.01.11
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

In 2026, did you know you can control border radius in more than just a rounded manner ? Below are a few side by side comparisons of what the [new](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) `corner-shape` property with values of `bevel`, `notch`, `swoop`, `squircle` looks like on an element with `border-radius: 10px` and `height` & `value` of `100px`. The last item in the list below doesn't use `corner-shape` to give us a default comparison.

<style>
    
#bevel-ex-1, 
#bevel-ex-2, 
#bevel-ex-3, 
#notch-ex-1,
#notch-ex-2,
#notch-ex-3,
#scoop-ex-1,  
#regular-ex-1,
#regular-ex-2,
#regular-ex-3,
#scoop-ex-1,
#scoop-ex-2,
#scoop-ex-3,
#squircle-ex-1,
#squircle-ex-2,
#squircle-ex-3{
  background-color:blue;
  width:100px;
  height:100px;
  margin:10px;
  border-radius:10px;
  text-align:center;
  line-height:50px;

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

#scoop-ex-1, #scoop-ex-2, #scoop-ex-3{
 background-color:var(--pastel-yellow);
 corner-shape:scoop;
}
#scoop-ex-2 {
  border-radius:40px;
  background-color:var(--pastel-yellow);
  width:200px;
  height:80px;
}
#scoop-ex-3{
   background-color:var(--pastel-yellow);
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

#squircle-ex-1, #squircle-ex-2, #squircle-ex-3{
  corner-shape:squircle; 
  background-color:var(--pastel-pink);
}
#squircle-ex-2{
  border-radius:40px;
}
#squircle-ex-3{
  border-radius:20px;
  width:200px;
  height:50px;
}


#regular-ex-2{
  border-radius:40px;
}
#regular-ex-3{
  border-radius:20px;
  width:200px;
  height:50px;
}


</style>
<div style="display:flex">
<div id="bevel-ex-1" >Bevel</div>
<div id="notch-ex-1" >Notch</div>
<div id="scoop-ex-1">Scoop</div>
<div id="squircle-ex-1" >Squircle</div>
<div id="regular-ex-1" />
</div>

```css
.corner-shape-example {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  corner-shape: <bevel, notch, scoop, squircle>;
  background-color: <pastel-color>;
}
```

#### Bevel

`corner-shape: bevel` - Makes a 45 degree straight edge out of the corners, offers an easy way of making an octagon.

<div style="display:flex">
<div id="bevel-ex-1" />
<div id="bevel-ex-3" />
<div id="bevel-ex-2" />

</div>

#### Notch

`corner-shape: notch` - Removes a square shaped piece out of the corners of your element.

<div style="display:flex">
<div id="notch-ex-1" />
<div id="notch-ex-2" />
<div id="notch-ex-3" />
</div>

#### Scoop

`corner-shape: scoop` - Creates an inwards swooping cut out.

<div style="display:flex">
<div id="scoop-ex-1" />
<div id="scoop-ex-3" />
<div id="scoop-ex-2" />
</div>

#### Squircle

`corner-shape: squircle` - Makes rounded corners but in a way that is in between a circle and square. This can make the shape look something reminiscent of phone app icons.

<div style="display:flex">
<div id="squircle-ex-1" />
<div id="squircle-ex-2" />
<div id="squircle-ex-3" />
</div>

#### Regular

This example is doesn't use any `corner-shape` attribute but instead gives a comparision. Hotice that the second element looks almost completely like a circle.

<div style="display:flex">
<div id="regular-ex-1" />
<div id="regular-ex-2" />
<div id="regular-ex-3" />
</div>

### Mixed

One final detail is the fact that you can mix and match corners to use different types as seen here.

```css
corner-shape: scoop notch squircle bevel;
```

<style>
  #mixed-corner-shape{
    width:100px;
    height:100px;
    background-color:gray;
    border-radius:20px;
    corner-shape: scoop notch squircle bevel;
    
  }
</style>
<div id="mixed-corner-shape" />

~ zan0
