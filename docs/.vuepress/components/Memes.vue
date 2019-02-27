<template lang="pug">
	.memes
		.memes__text Funee
		.memes__container
			img.memes__img(v-bind:src="img")
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
		}, 3000);
	}
};
</script>

<style lang="scss">
	.memes{
		position: absolute;
		top:10rem;

		&__text{font-weight: bold;}
		&__container{
			border:.1rem dashed hsla(0,0%,0%,.5);
			width:10rem;
			height:10rem;
		}
	}
</style>
