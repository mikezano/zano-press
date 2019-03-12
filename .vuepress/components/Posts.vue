<template>
	<div class="posts" v-if="posts.length">
		<div class="post" v-for="post in posts">
			<Badge v-bind:text="post.frontmatter.date"/>
			<Badge v-bind:text="post.frontmatter.tag" type="warn"/>
			<div class="post__header">
				<router-link :to="post.path" class="post__link">
					<h2 class="post__title">
						{{post.frontmatter.title}}
					</h2>
				</router-link>
			</div>
			<p class="post__description">{{post.frontmatter.description}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['page', 'all'],
	computed: {
		posts() {
			let currentPage = this.page ? this.page : this.$page.path;
			let regex ='';

			if(this.all)
				regex = `(?=.*html)`;
			else
				regex = `(${currentPage})(?=.*html)`;

			let posts = this.$site.pages
				.filter(x => {
					return (x.path.match(new RegExp(regex)) && x.frontmatter.date);
				})
				.sort((a, b) => {
					return b.frontmatter.date.localeCompare(a.frontmatter.date);
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

.content:not(.custom) a:hover{
	text-decoration: none;
}

.post{

	&__header{
		display : flex;
		//border-bottom:1px solid lightgray;
	}

	&__link:hover{
		text-decoration:none;
	}


	&__title{
		margin:0 .4rem 0 0;
		border:none;
		border-bottom: .2rem solid lightgray;
		position:relative;
	}


	&__title:hover::before{
		width:100%;
		transition: all .4s cubic-bezier(0,-0.02,.06,1.05) ;
	}

	&__title::before{
		position:absolute;

		width:0%;
		height:100%;
		content: '';
		border-bottom: .2rem solid hsla(206, 100%, 39%, 1);
	}

	&__description{
		margin: 0.2rem 0 2rem 0;

	}
}
</style>
