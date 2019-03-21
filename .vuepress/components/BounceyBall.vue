<template lang="pug">
	#ball
</template>

<script>
export default {
	data(){
		return {};
	},
	methods:{
		generateKeyframe(){
			var style = document.createElement('style');
			style.type = 'text/css';
			var keyFrames = '\
				@-webkit-keyframes spinIt {\
					100% {\
						-webkit-transform: rotate(A_DYNAMIC_VALUE);\
					}\
				}';
			style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "360deg");
			document.getElementsByTagName('head')[0].appendChild(style);
		},
		listen(){
			var transitionEvent = this.whichTransitionEvent();
			document.addEventListener(transitionEvent, ()=>{
				alert('end');
			});
		},
		whichTransitionEvent(){
			var t;
			var el = document.getElementById('ball');
			var transitions = {
				'animation':'animationend',
				'OTransition':'oTransitionEnd',
				'MozTransition':'transitionend',
				'WebkitTransition':'webkitTransitionEnd'
			}
			debugger;
			for(t in transitions){
				if( el.style[t] !== undefined ){
					return transitions[t];
				}
			}
		}
	},
	mounted(){

		//this.listen();
		var el = document.getElementById('ball');

		el.addEventListener('webkitAnimationEnd', function(){
			alert('done');
		});
		el.addEventListener('animationend', function(){
			alert('done');
		});
		this.generateKeyframe();
		el.style.WebKitAnimation = "spinIt 2s linear";
		el.style.animation = "spinIt 2s linear";
	}
}
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

}
</style>
