<template>
	<div>
		<svg
			id="hamburger"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			viewBox="0 0 448 512"
			class="icon"
		>
			<path
				fill="currentColor"
				d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
			></path>
		</svg>
		<ul>
			<router-link tag="li" to="/its-not-working">#itsnotworking</router-link>
			<router-link tag="li" to="/lessons">#lessons</router-link>
			<router-link tag="li" to="/howdoi">#howdoi</router-link>
		</ul>
	</div>
</template>

<style lang="scss">
#hamburger {
	width: 20px;
}
</style>
