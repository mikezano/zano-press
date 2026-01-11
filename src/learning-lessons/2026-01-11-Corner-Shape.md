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

<style>
    
#bevel, #notch, #scoop, #squircle, #regular{
  background-color:blue;
  width:100px;
  height:100px;
  margin:10px;
  border-radius:20px;
}

#bevel{corner-shape:bevel}
#notch{corner-shape:notch}
#scoop{corner-shape:scoop}
#squircle{corner-shape:squircle}

</style>

<div id="bevel"></div>
<div id="notch"></div>
<div id="scoop"></div>
<div id="squircle"></div>
<div id="regular"></div>

[Full demo on Codepen](https://codepen.io/_zan0/pen/pvjQRqK)

~ zan0
