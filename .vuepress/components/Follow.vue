<template>
	<div id="follow-me">
		<a
			href="https://twitter.com/_zan0?ref_src=twsrc%5Etfw"
			class="twitter-follow-button"
			data-size="large"
			data-show-screen-name="false"
			data-show-count="false"
		>Follow @_zan0</a>
		<script
			type="application/javascript"
			async
			src="https://platform.twitter.com/widgets.js"
			charset="utf-8"
		></script>
	</div>
</template>

<style>
#follow-me {
	position: absolute;
	top: 1rem;
	left: 5rem;
	z-index: 100;
}
@media screen and (max-width: 719px) {
	#follow-me {
		left: 7.2rem;
	}
}
</style>
