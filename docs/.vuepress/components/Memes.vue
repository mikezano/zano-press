<template lang="pug">
.memes
	svg.memes__thought-bubble(height="270" width="324")
		g#svg__g(fill="none" stroke="black")
			path(stroke-width="4" d="	\
				M20 40					\
				A4,8 0 0 0 20,100		\
				A6,10 0 0 0 30,150		\
				A4,10 0 0 0 30,200 		\
										\
				A2,1 0 0 0 80,200 		\
				A10,4 0 0 0 110,200		\
				A10,6 0 0 0 160,200		\
				A10,4 0 0 0 240,200		\
				A10,8 0 0 0 280,200		\
										\
				A10,10 0 0 0 300,180	\
				A3,10 0 0 0 300,140		\
				A10,10 0 0 0 300,100	\
				A1,2 0 0 0 290,23		\
										\
				A10,3 0 0 0 230,20		\
				A10,4 0 0 0 150,22		\
				A10,3 0 0 0 100,20		\
				A10,5 0 0 0 40,20		\
				A10,10 0 0 0 20,40		\
				Z")
			circle(cx="60" cy="228" r="10" stroke="black" stroke-width="4" fill="none")
			circle(cx="50" cy="248" r="5" stroke="black" stroke-width="4" fill="none")

	.memes__container
		transition(name="slide" mode="out-in" v-on:enter="setAvgColor")
			img#avgrgb.memes__img(v-if="img" v-bind:src="img" :key="img")
</template>

<script>
const ctx = require.context('../public/images', true, /.*.png|.jpg$/);
var files = ctx.keys().map(ctx);
console.log(files);
export default {
	props: ['page'],
	data() {
		return {
			img: 'images/bower-logo.png',
			imgs: files,
			imgCount: files.length,
		};
	},
	computed: {},
	watch: {
		img: function(newImg, oldImg) {},
	},
	methods: {
		getRandomInt(max) {
			return Math.floor(Math.random() * max);
		},
		setAvgColor() {
			setTimeout(() => {
				var imgEl = document.getElementById('avgrgb');
				console.log(imgEl.src);
				var svg__g = document.getElementById('svg__g');
				var rgb = this.avgColor(imgEl);
				svg__g.style.fill = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
				console.log(`rgb(${rgb.r},${rgb.g},${rgb.b})`);
			}, 500);
		},
		avgColor(imgEl) {
			var blockSize = 5, // only visit every 5 pixels
				defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
				canvas = document.createElement('canvas'),
				context = canvas.getContext && canvas.getContext('2d'),
				data,
				width,
				height,
				i = -4,
				length,
				rgb = { r: 0, g: 0, b: 0 },
				count = 0;

			if (!context) {
				return defaultRGB;
			}

			height = canvas.height =
				imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
			width = canvas.width =
				imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

			context.drawImage(imgEl, 0, 0);

			try {
				data = context.getImageData(0, 0, width, height);
			} catch (e) {
				/* security error, img on diff domain */ alert('x');
				return defaultRGB;
			}

			length = data.data.length;

			while ((i += blockSize * 4) < length) {
				++count;
				rgb.r += data.data[i];
				rgb.g += data.data[i + 1];
				rgb.b += data.data[i + 2];
			}

			// ~~ used to floor values
			rgb.r = ~~(rgb.r / count);
			rgb.g = ~~(rgb.g / count);
			rgb.b = ~~(rgb.b / count);

			canvas = null;

			return rgb;
		},
	},
	mounted() {
		setInterval(() => {
			var nextIdx = this.getRandomInt(this.imgCount);
			this.img = files[nextIdx];
		}, 8000);

		var imgEl = document.getElementById('avgrgb');
		imgEl.onload = function() {
			alert('done');
		};
	},
};
</script>

<style lang="scss">
.memes {
	position: absolute;
	top: 6rem;
	width: 30rem;
	left: 50%;
	margin-left: -15rem;
	display: flex;
	justify-content: center;

	&__thought-bubble {
	}

	&__container {
		//border: 0.1rem dashed hsla(0, 0%, 0%, 0.5);
		width: 15rem;
		height: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 50%;
		margin-left: -7.5rem;
		top: 2em;
	}

	&__img {
		max-height: 10rem;
		max-width: 13rem;
	}
}

.slide-enter {
	transform: translateX(-1rem);
	opacity: 0;
}

.slide-leave-to {
	transform: translateX(1rem);
	opacity: 0;
}

.slide-enter-active {
	transition: all 0.8s cubic-bezier(0.6, 1.6, 0.6, 1);
}

.slide-leave-active {
	transition: all 0.8s cubic-bezier(0.33, 0.03, 0.42, -0.37);
}

.slide-enter-to,
.slide-leave {
	transform: translateX(0);
	opacity: 1;
}
</style>
