<template>
	<div class='main' >
		<img class='hero-image' :src="$page.frontmatter.heroImage" />
		<h1>Welcome to CSS</h1>
		<router-link to="/">Home</router-link>
		<router-link to="/stories/">Stories</router-link>
		<router-link to="/broken/">Broken</router-link>
		<pre>{{$page}}</pre>
		<transition name="fade" mode="out-in">
			<Content />
		</transition>
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Righteous');
	.main{
		text-align:center;
		font-family: 'Righteous', cursive;
	}

	.hero-image{
		width:20rem;
		height:20rem;
	}


.fade-enter-active, .fade-leave-active{
	transition: opacity 15s ease-in;
}
.fade-enter, .fade-leave-to{
	opacity:0;
}
.fade-enter-to, .fade-leave{
	opacity:1;
}
</style>