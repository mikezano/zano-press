<template lang="pug">
	#ball
</template>

<script>
export default {
	data() {
		return { x: 80 };
	},
	methods: {
		generateKeyframe(x) {
			var style = document.createElement('style');
			style.setAttribute('id', 'animate-style');
			style.type = 'text/css';
			var keyFrames =
				'\
				@keyframes spinIt {\
					100% {\
						transform: translate(A_DYNAMIC_VALUE);\
					}\
				}';
			style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, x + 'px');
			document.getElementsByTagName('head')[0].appendChild(style);

			var el = document.getElementById('ball');
			el.style.animation = '';
			el.style.animation = 'spinIt 2s linear';
		},
		removeKeyframe() {
			debugger;
			document.getElementById('animate-style').outerHTML = '';
			this.generateKeyframe(100);
		},
		listen() {
			var transitionEvent = this.whichTransitionEvent();
			document.addEventListener(transitionEvent, () => {
				alert('end');
			});
		},
		whichTransitionEvent() {
			var t;
			var el = document.getElementById('ball');
			var transitions = {
				animation: 'animationend',
				OTransition: 'oTransitionEnd',
				MozTransition: 'transitionend',
				WebkitTransition: 'webkitTransitionEnd',
			};
			debugger;
			for (t in transitions) {
				if (el.style[t] !== undefined) {
					return transitions[t];
				}
			}
		},
	},
	mounted() {
		//this.listen();
		var el = document.getElementById('ball');

		el.addEventListener('webkitAnimationEnd', () => {
			this.removeKeyframe();
		});
		el.addEventListener('animationend', () => {
			this.removeKeyframe();
		});
		this.generateKeyframe(80);
	},
};
</script>


<style lang="scss">
#ball {
	width: 38px;
	height: 38px;
	border-radius: 40px;
	border: 1px solid hsla(360, 0, 98%, 1);
	background-color: hsla(360, 0, 98%, 1);
	box-shadow: 0px 4px 2px black;
	position: absolute;
	left: 20px;
	top: 11rem;
	animation: spinIt 2s linear;
}
</style>
