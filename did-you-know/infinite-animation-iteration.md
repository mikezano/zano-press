---
title: Infinite animation iteration
description: Will infinite animations trigger animationend ?
date: 19.03.24
tag: '#didyouknow'
---

# Detecting when an animation ends

The other day I set up a simple animation of an object moving in a direction and wanted to detect when it would end. This was the html/css:

```html
<div id="ball"></div>
```

```css
.ball {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: red;
  border: 1px solid black;
  animation: move 1s linear infinite;
}

@keyframes move {
  100% {
    transform: translateX(40px);
  }
}
```

Which results in this:

<style>
#ball1{
	width:20px;
	height:20px;
	border-radius:20px;
	background-color: red;
	border: 1px solid black;
	animation: move 1s linear infinite;
}

    @keyframes move{
    100%{
    transform: translateX(40px);
    }

}
</style>
<div id="ball1"></div>

The key to this animation comes from this line in `.ball` style definition:

```css
animation: move 1s linear infinite;
```

If animation syntax is newer to you this says we have an animation called `move` with a duration of `1s` that moves in a `linear` fashion, and repeats an `infinite` amount of times.

The idea I had in mind was to detect when the animation was complete and trigger something else to happen afterwards. For this there is an `animationend` event you can listen to on the object as so:

```javascript
var ball = document.grabElementById('ball');
ball.addEventListener('animationend', function() {});
```

But what happens ? Nothing.... The alert will not be trigerred after the animation. Why ? It may or may not be obvious but this animation is `infinite`. As a reult there is technically no end to the animation itself, only iterations. Luckily there exists exactly that, an `animationiteration` event you can hook into to know when the animation restarts

```javascript
var ball = document.grabElementById('babll');
ball.addEventListener('animationiteration', function() {});
```

## How is this useful

| Event                |        Description        |
| -------------------- | :-----------------------: |
| `animationend`       |  CSS animation completes  |
| `animationiteration` | CSS animation is repeated |
| `animationstart`     |   CSS animation starts    |

This could be useful when you are loading something and want to first get rid of the first item and wait for the next item to come in.

Animation ends can be detected with `animationed`. But if your animation specifies 'infinite' in its setup, this will never happen. Technicaly we know, but the flag on logically this never happens
