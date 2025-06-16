---
title: How to HSLAa
description: A more programmatic way of creating colors
date: 2019.06.02
tag: "#lessons"
---

# {{$frontmatter.title}}

<Badge :text="$frontmatter.date" />
<Badge :text="$frontmatter.tag" />

Creating colors that work well together is hard. We commonly use hex values and RGBa values like `#000000` (hex) or `(0,0,0,1)` (RGBa) to get a black color and `#FFFFFF` or `(255,255,255,1)` to create white. Beyond that, changing any part of these values will most likely leave you guessing as to what color you've created. Enter HSLa... the more programmatic approach to creating colors.

## Hue, Saturation, Light, Alpha

Creating a color with HSLa consists of three parts as described in the table below:

| HSLa       | Description                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hue        | A degree value from 0 - 360 which comes from the following color wheel range (displayed in linear fashion). ![An image](/images/hsla-hue.png) Values near 0 or 360 will result in reds. Around the 120's you have greens and around the 240's you have blues. |
| Saturation | A percentage value from 0 - 100%. Represents how 'strong' the color would be, a value of `0` would leave you with no color (gray) and `100%` would be a very vibrant version of the color.                                                                    |
| Light      | A percentage value from 0 - 100%. A value of 0 represents no light at all, meaning you would get black. 100% means too much light and results in white. Think of this value as what would happen if you move a flashlight towards and away from your color.   |
| Alpha      | A decimal value between 0 and 1 or percentage from 0% - 100%. Determines how 'see-through' (opaque) your value is.                                                                                                                                            |

<style>
.wt{color:white;}

.black{background-color:hsla(0, 0%, 0%, 1);}
.white{background-color:hsla(0, 0%, 100%, 1);}

.red-1{background-color:hsla(0, 100%, 70%, 1);}
.red-2{background-color:hsla(0, 100%, 50%, 1);}
.red-3{background-color:hsla(0, 100%, 30%, 1);}

.yellow-1{background-color:hsla(60, 100%, 70%, 1);}
.yellow-2{background-color:hsla(60, 100%, 50%, 1);}
.yellow-3{background-color:hsla(60, 100%, 30%, 1);}

.green-1{background-color:hsla(120, 100%, 70%, 1);}
.green-2{background-color:hsla(120, 100%, 50%, 1);}
.green-3{background-color:hsla(120, 100%, 30%, 1);}

.teal-1{background-color:hsla(180, 100%, 70%, 1);}
.teal-2{background-color:hsla(180, 100%, 50%, 1);}
.teal-3{background-color:hsla(180, 100%, 30%, 1);}

.blue-1{background-color:hsla(240, 100%, 70%, 1);}
.blue-2{background-color:hsla(240, 100%, 50%, 1);}
.blue-3{background-color:hsla(240, 100%, 30%, 1);}

.purple-1{background-color:hsla(300, 100%, 70%, 1);}
.purple-2{background-color:hsla(300, 100%, 50%, 1);}
.purple-3{background-color:hsla(300, 100%, 30%, 1);}

/* ======= */

.red-1.bm{background-color:hsla(0, 90%, 50%, 1);}
.red-2.bm{background-color:hsla(0, 60%, 50%, 1);}
.red-3.bm{background-color:hsla(0, 30%, 50%, 1);}

.yellow-1.bm{background-color:hsla(60, 90%, 50%, 1);}
.yellow-2.bm{background-color:hsla(60, 60%, 50%, 1);}
.yellow-3.bm{background-color:hsla(60, 30%, 50%, 1);}

.green-1.bm{background-color:hsla(120, 90%, 50%, 1);}
.green-2.bm{background-color:hsla(120, 60%, 50%, 1);}
.green-3.bm{background-color:hsla(120, 30%, 50%, 1);}

.teal-1.bm{background-color:hsla(180, 90%, 50%, 1);}
.teal-2.bm{background-color:hsla(180, 60%, 50%, 1);}
.teal-3.bm{background-color:hsla(180, 30%, 50%, 1);}

.blue-1.bm{background-color:hsla(240, 90%, 50%, 1);}
.blue-2.bm{background-color:hsla(240, 60%, 50%, 1);}
.blue-3.bm{background-color:hsla(240, 30%, 50%, 1);}

.purple-1.bm{background-color:hsla(300, 90%, 50%, 1);}
.purple-2.bm{background-color:hsla(300, 60%, 50%, 1);}
.purple-3.bm{background-color:hsla(300, 30%, 50%, 1);}
</style>

Putting it all together this is how you might create the color black:

```css
background-color: hsla(0, 0%, 0%, 1); //black because there is no light value.
```

<span class="black wt">hsla(0, 0%, 100%, 1)</span>

...and the color white

```css
background-color: hsla(0, 0%, 100%, 1); //white because your light value is 100%
```

<span class="white " style="border:1px solid hsla(0,0%,0%,1);" >hsla(0, 0%, 100%, 1)</span>

## Create the rainbow

Cool, now something more interesting. By moving in hue increments of 60 you'll get your standard rainbow colors to appear. Below is an example of fully saturated rainbow colors and what light/dark versions of the color would look like by modifying the light value.

| Color  | Light                                                  | Normal                                                   | Dark                                                     |
| ------ | ------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------- |
| Red    | <span class="red-1  ">hsla(0, 100%, 70%, 1)</span>     | <span class="red-2 ">hsla(0, 100%, 50%, 1)</span>        | <span class="red-3 wt">hsla(0, 100%, 30%, 1)</span>      |
| Yellow | <span class="yellow-1  ">hsla(60, 100%, 70%, 1)</span> | <span class="yellow-2 ">hsla(60, 100%, 50%, 1)</span>    | <span class="yellow-3 wt">hsla(60, 100%, 30%, 1)</span>  |
| Green  | <span class="green-1  ">hsla(120, 100%, 70%, 1)</span> | <span class="green-2 ">hsla(120, 100%, 50%, 1)</span>    | <span class="green-3 wt">hsla(120, 100%, 30%, 1)</span>  |
| Teal   | <span class="teal-1  ">hsla(180, 100%, 70%, 1)</span>  | <span class="teal-2 wt">hsla(180, 100%, 50%, 1)</span>   | <span class="teal-3 wt">hsla(180, 100%, 30%, 1)</span>   |
| Blue   | <span class="blue-1 ">hsla(240, 100%, 70%, 1)</span>   | <span class="blue-2 wt">hsla(240, 100%, 50%, 1)</span>   | <span class="blue-3 wt">hsla(240, 100%, 30%, 1)</span>   |
| Purple | <span class="purple-1 ">hsla(300, 100%, 70%, 1)</span> | <span class="purple-2 wt">hsla(300, 100%, 50%, 1)</span> | <span class="purple-3 wt">hsla(300, 100%, 30%, 1)</span> |

If we keep the light value consistent at 50% and play with the saturation value from most vibrant to least, lets see what happens...

| Color  | 90%                                                      | 60%                                                        | 30%                                                        |
| ------ | -------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| Red    | <span class="red-1  bm">hsla(0, 90%, 50%, 1)</span>      | <span class="red-2 bm">hsla(0, 60%, 50%, 1)</span>         | <span class="red-3 wt bm">hsla(0, 30%, 50%, 1)</span>      |
| Yellow | <span class="yellow-1  bm">hsla(60, 90%, 50%, 1)</span>  | <span class="yellow-2 bm">hsla(60, 60%, 50%, 1)</span>     | <span class="yellow-3 wt bm">hsla(60, 30%, 50%, 1)</span>  |
| Green  | <span class="green-1  bm">hsla(120, 90%, 50%, 1)</span>  | <span class="green-2 bm">hsla(120, 60%, 50%, 1)</span>     | <span class="green-3 wt bm">hsla(120, 30%, 50%, 1)</span>  |
| Teal   | <span class="teal-1  bm">hsla(180, 90%, 50%, 1)</span>   | <span class="teal-2 wt bm">hsla(180, 60%, 50%, 1)</span>   | <span class="teal-3 wt bm">hsla(180, 30%, 50%, 1)</span>   |
| Blue   | <span class="blue-1 wt bm">hsla(240, 90%, 50%, 1)</span> | <span class="blue-2 wt bm">hsla(240, 60%, 50%, 1)</span>   | <span class="blue-3 wt bm">hsla(240, 30%, 50%, 1)</span>   |
| Purple | <span class="purple-1 bm">hsla(300, 90%, 50%, 1)</span>  | <span class="purple-2 wt bm">hsla(300, 60%, 50%, 1)</span> | <span class="purple-3 wt bm">hsla(300, 30%, 50%, 1)</span> |

...You go from vibrant to more muted (heading towards gray) colors :D

With HSLa, there's less guessing and more adjusting being made. You have a better idea of what will happen with your colors as values change. You can make colors that work well together by keeping the saturation and light values the same and really just changing the hue value!

## But I already know hex values and RGBa...

Ok, but can you easily make adjustments to them and get what you want ? If you were given a hex color value of `#45b021` and were asked to make it 50% darker, what would be your approach ? Converting from one of these forms (hex or RGBa) to another is not hard. Lots of [online tools](http://hslpicker.com/#011a4b) can help you convert values and experiment with changes in the values. Oh, and it's supported on all [modern browsers](https://caniuse.com/#feat=css3-colors) Try it!

~ Zano
