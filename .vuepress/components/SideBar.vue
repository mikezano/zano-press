 <template lang="pug">
	ul.sidebar
		router-link.sidebar__link(tag="li" to="/") Home
		router-link.sidebar__link(tag="li" to="/stories") Stories
		router-link.sidebar__link(tag="li" to="/broken") Broken
</template>

<style lang="scss">
	.sidebar{
		position:absolute;
		list-style-type: none;
		text-align:left;
	}
</style>
