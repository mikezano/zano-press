<template lang="pug">
div
	#css-snippets.language-css.extra-class
	#typed-container.language-css.extra-class
		pre#typed.language-css
</template>

<script>
const ctx = require.context('../styles', true, /.*.css$/);
const ctxraw = require.context('!!raw-loader!../styles/', true, /.*.css$/);
var css = ctx.keys().map(ctx);
const componentsSource = ctxraw.keys().map(ctxraw);

import Prism from 'prismjs';
import Typed from 'typed.js';
import { variableDeclaration } from 'babel-types';

export default {
	data() {
		return {
			cssSnippets: [],
			currentSnippet: '',
			snippetsLength: 0,
			interval: null,
		};
	},
	methods: {
		getRandomInt(max) {
			return Math.floor(Math.random() * max);
		},
		start() {
			var cssSnippets = document.getElementById('css-snippets');
			this.cssSnippets.forEach(snippet => {
				var html = Prism.highlight(snippet, Prism.languages.css, 'css');
				var preTag = document.createElement('pre');
				preTag.classList.add('language-css');
				preTag.innerHTML = html;
				cssSnippets.appendChild(preTag);
			});
		},
	},
	created() {
		this.cssSnippets = componentsSource[0].split('/**/');
		this.snippetsLength = this.cssSnippets.length;
	},
	mounted() {
		var options = {
			stringsElement: '#css-snippets',
			strings: this.cssSnippets,
			typeSpeed: 30,
			backDelay: 1000,
			backSpeed: 10,
			smartBackspace: false,
			loop: true,
		};

		this.start();

		var typed = new Typed('#typed', options);
	},
	beforeDestroy() {
		clearInterval(this.interval);
	},
};
</script>

<style lang="scss">
#typed-container {
	position: absolute;
	top: 6rem;
	font-size: 2rem;
	width: 26rem;
	padding: 1rem;
	height: 18rem;
	left: 50%;
	margin-left: -14rem;
}

#typing-static {
	white-space: pre;
	font-family: 'Roboto Slab', serif;
}
#typed {
	display: inline;
	padding: 0; //added it to the #typed-container
}

.typed-cursor {
	color: white;
	padding-left: -2rem;
}
</style>
