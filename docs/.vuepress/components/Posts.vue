<template>
	<div class="posts" v-if="posts.length">
		<div class="post" v-for="post in posts">
			<div>
				<router-link :to="post.path">
					<h2>
						{{post.frontmatter.title}}
					</h2>
				</router-link>
				<Badge v-bind:text="post.frontmatter.date"/>
				<Badge v-bind:text="post.frontmatter.tag" type="warn"/>
			</div>

			<p>{{post.frontmatter.description}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['page'],
	computed: {
		posts() {
			let currentPage = this.page ? this.page : this.$page.path;
			let posts = this.$site.pages
				.filter(x => {
					return x.path.match(
						new RegExp(`(${currentPage})(?=.*html)`),
					);
				})
				.sort((a, b) => {
					return (
						new Date(b.frontmatter.date) -
						new Date(a.frontmatter.date)
					);
				});
			return posts;
		},
	}
};
</script>

<style lang="scss">
.dark-date{
	color: black;
	font-weight:bold;
}
</style>
