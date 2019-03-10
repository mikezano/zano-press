<template>
	<div>
		<!-- <div id="css-snippet-type-static" class="language-css extra-class">
			<pre id="typing-static" class="language-css"></pre>
		</div>
		<div id="css-snippet-type" class="language-css extra-class">
			<pre id="typing" class="language-css"></pre>
		</div>-->
		<div id="css-snippets" class="language-css extra-class"></div>
		<div id="typed-container" class="language-css extra-class">
			<pre id="typed" class="language-css"></pre>
		</div>
	</div>
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
			// setInterval(() => {
			// 	let nextSnippetIndex = this.getRandomInt(this.snippetsLength);
			// 	this.currentSnippet = this.cssSnippets[nextSnippetIndex];
			// 	//var prismEl = document.getElementById('allStrings');
			// 	//prismEl.innerHTML =

			// }, 2000);
		},
		beforeTyping(arrayPos, self) {},
	},
	created() {
		this.cssSnippets = componentsSource[0].split('/**/');
		this.snippetsLength = this.cssSnippets.length;
	},
	mounted() {
		var options = {
			stringsElement: '#css-snippets',
			strings: this.cssSnippets,
			typeSpeed: 50,
			backDelay: 1000,
			backSpeed: 30,
			smartBackspace: false,
			loop: true,
			preStringTyped: this.beforeTyping,
		};

		//var elTyped = document.getElementById('typing');
		//var typed = new Typed('#typing', options);

		this.start();

		// this.interval = setInterval(()=>{
		// 	Prism.highlightElement(elTyped);
		// 	var typingStatic = document.getElementById('typing-static');
		// 	typingStatic.innerHTML = elTyped.innerHTML;
		// }, 10);

		var typed = new Typed('#typed', options);
		//typed.options.backSpaceHtmlChars = this.myOwn;
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
	width: 28rem;
	height: 20rem;
	left: 50%;
	margin-left: -14rem;
	white-space: pre;
	pre {
		white-space: pre;
	}
}

#css-snippet {
	display: none;
}
#css-snippet-type {
	//display:none;
}

#typing-static {
	white-space: pre;
	font-family: 'Roboto Slab', serif;
}
</style>
