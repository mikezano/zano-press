<template lang="pug">
	.ball
</template>

<style lang="scss">
.ball {
	width: 38px;
	height: 38px;
	border-radius: 40px;
	border: 1px solid hsla(360, 0, 98%, 1);
	background-color: hsla(360, 0, 98%, 1);
	box-shadow: 0px 4px 2px black;
	position: absolute;
	left: 20px;
	top: 11rem;
	animation: move 1s ease-in-out infinite;
}

@keyframes move {
	0% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(76px);
	}
}
</style>
