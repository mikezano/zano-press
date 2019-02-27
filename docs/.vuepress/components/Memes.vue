<template lang="pug">
	.memes
		img.memes__thought-bubble(src="images/thought-bubble.png")
		.memes__container
			transition(name="slide" mode="out-in")
				img.memes__img(v-if="img" v-bind:src="img" :key="img")
</template>

<script>


const ctx = require.context('../public/images', true, /.*.png|.jpg$/);
var files = ctx.keys().map(ctx);
console.log(files);
export default {
	props: ['page'],
	data () {
		return {
			img: 'images/bower-logo.png',
			imgs: files,
			imgCount: files.length,
		}
	},
	computed: {

	},
	methods:{
		getRandomInt(max){
			return Math.floor(Math.random() * max);
		}
	},
	mounted(){

		setInterval(()=>{
			var nextIdx = this.getRandomInt(this.imgCount);
			this.img = files[nextIdx];
		}, 8000);
	}
};
</script>

<style lang="scss">
	.memes{
		position: absolute;
		top:6rem;
		width:30rem;
		left:50%;
		margin-left:-15rem;


		&__thought-bubble{
			
		}

		&__container{
			//border:.1rem dashed hsla(0,0%,0%,.5);
			width:12rem;
			height:12rem;
			display:flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			left:50%;
			margin-left:-6.5rem;
			top: 1.2rem;
		}
	}


	.slide-enter{
		transform: translateX(-1rem);
		opacity:0;
	}

	.slide-leave-to{
		transform: translateX(1rem);
		opacity:0;		
	}

	.slide-enter-active{
		transition: all .8s cubic-bezier(0.6, 1.6, 0.6, 1);
	}

	.slide-leave-active{
		transition: all .8s cubic-bezier(0.33, 0.03, 0.42, -0.37);
	}

	.slide-enter-to, .slide-leave{
		transform: translateX(0);
		opacity:1;
	}


</style>
