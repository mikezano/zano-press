<template>
	<div class="css-snippet language-css extra-class">
		<pre id="code-here"></pre>
	</div>
</template>

<script>
const ctx = require.context('../styles', true, /.*.css$/);
const ctxraw = require.context('!!raw-loader!../styles/', true, /.*.css$/);
var css = ctx.keys().map(ctx);
const componentsSource = ctxraw.keys().map(ctxraw);
console.log(css);
import Prism from 'prismjs';
export default {
	data() {
		return {
			cssSnippets: [],
			currentSnippet: "Hi",
			snippetsLength: 0
		};
	},
	methods:{
		getRandomInt(max) {
			return Math.floor(Math.random() * max);
		},
		start(){
			let nextSnippetIndex = this.getRandomInt(this.snippetsLength);
			this.currentSnippet = this.cssSnippets[nextSnippetIndex];
			var el = document.getElementById('code-here');
			el.innerHTML = this.currentSnippet.substr(2);

			Prism.highlightElement(el);
		}
	},
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
	},
	created() {
		this.cssSnippets = componentsSource[0].split("/**/");
		this.snippetsLength = this.cssSnippets.length;
		setInterval(()=>{
			this.start();
		},4000);
	},
	mounted() {



	}
};
</script>

<style lang="scss">
	.css-snippet{
		position: absolute;
		top:10rem;
		font-size:2rem;
		width:32rem;
		height:10rem;
		left:50%;
		margin-left:-16rem;
	}
</style>
