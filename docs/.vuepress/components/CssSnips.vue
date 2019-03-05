<template>
	<div>

		<div id="css-snippet-type-static" class="language-css extra-class">
			<pre id="typing-static" class="language-css"></pre>
		</div>
		<div id="css-snippet-type" class="language-css extra-class">
			<pre id="typing" class="language-css"></pre>
		</div>
		<div id="css-snippet" class="language-css extra-class">
			<pre id="code-here"></pre>
		</div>
	</div>
</template>

<script>
const ctx = require.context('../styles', true, /.*.css$/);
const ctxraw = require.context('!!raw-loader!../styles/', true, /.*.css$/);
var css = ctx.keys().map(ctx);
const componentsSource = ctxraw.keys().map(ctxraw);
console.log(css);
import Prism from 'prismjs';
import Typed from 'typed.js';

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
		},2000);


	},
	mounted() {

		var options ={
			strings: this.cssSnippets,
			typeSpeed: 20,
			loop: true,
			onTyping : ()=>{alert('t');},
		};
		var elTyped = document.getElementById('typing');
		debugger;
		var typed = new Typed('#typing', options);

		setInterval(()=>{
			Prism.highlightElement(elTyped);
			var typingStatic = document.getElementById('typing-static');
			typingStatic.innerHTML = elTyped.innerHTML;
		}, 10);

	}
};
</script>

<style lang="scss">
	#css-snippet-type-static{
		position: absolute;
		top:6rem;
		font-size:2rem;
		width:32rem;
		height:20rem;
		left:50%;
		margin-left:-16rem;
	}

	#css-snippet{
		display:none;
	}
	#css-snippet-type{
		display:none;
	}
	
	#typing-static{
		white-space: pre;

	}
</style>
