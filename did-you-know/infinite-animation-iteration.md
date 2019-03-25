---
title: Infinite animation iteration
description: Will infinite animations trigger animationend ?
date: 19.03.24
tag: '#didyouknow'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />
<Tweet />

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

The key to this animation comes from this line...

```css
animation: move 1s linear infinite;
```

If animation syntax is newer to you this says we have an animation called `move` with a duration of `1s` that moves in a `linear` fashion, and repeats an `infinite` amount of times.

## When is it done ?

The idea I had in mind was to detect when the animation was complete and trigger something else to happen afterwards. For this there is an `animationend` event you can listen to on the object as so:

```javascript
var ball = document.getElementById('ball');
ball.addEventListener('animationend', function() { 
	console.log('done'); 
});
```

But what happens ? Nothing.... The `console.log` is never executed. Why ? It may or may not be obvious but this is a result of the `infinite` declaration on the animation. With that specification there is technically no end to the animation itself, only iterations. Luckily there exists exactly that, an `animationiteration` event you can hook into to know when the animation restarts...

```javascript
var ball = document.getElementById('ball');
ball.addEventListener('animationiteration', function() {
	//Do something cool :)
});
```

In this example the _Do something cool_ is to display an iteration count value on the ball

<style>
#ball2{
	width:20px;
	height:20px;
	border-radius:20px;
	background-color: red;
	border: 1px solid black;
	animation: move 1s linear infinite;
	text-align: center;
}

    @keyframes move{
    100%{
    transform: translateX(40px);
    }

}
</style>
<div id="ball2">
</div>

## One more thing ...
There also exists an `animationstart` event as well to use for whatever need you have, but it was new to me that `animationend` would not trigger after each iteration but it did make sense to then use the `animationiteraion` event. Below is a handy table of the 3 animation hooks available and what they do.  Hopefully this helps someone on their CSS animation journey !


| Event                |        Triggers when...        |
| -------------------- | :-----------------------: |
| `animationend`       |  CSS animation completes  |
| `animationiteration` | CSS animation is repeated |
| `animationstart`     |   CSS animation begins    |

~ Zano



<script type="text/javascript">
export default{

	mounted(){
		var count = 0;
		var ball = document.getElementById('ball2');
		ball.addEventListener('animationiteration', ()=> {
			ball.innerText = count++;
		});
	}
}
</script>
