<template>
<div>
	<button id="hamburger">🍔</button>
	<Sidebar/>
	<div class="main">
		<!-- <Navbar/> -->
		{{$page.frontmatter.tag}}
		<img class="hero-image" :src="$page.frontmatter.heroImage" v-if="$page.frontmatter.tag == 'none' " />
		<h1>Style this</h1>

		<!-- <pre>{{$page}}</pre> -->
		<transition name="fade" mode="out-in">
			<Content style="text-align:left; width:40rem;"/>
		</transition>
	</div>
</div>
</template>

<script>
import Vue from 'vue';
import Navbar from './Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
	components: { Navbar, Sidebar},
	data() {
		return {
			isSidebarOpen: false,
			transitionName: '',
			theme: '',
		};
	},
	watch: {
		$route(to, from) {
			console.log(to.path);
			const toPath = to.path;
			const fromPath = from.path;
			if (toPath.includes('interview') && fromPath == '/') {
				this.transitionName = 'interview';
			} else if (fromPath == '/' && toPath.includes('mixes')) {
				this.transitionName = 'mixes';
			} else if (fromPath.includes('mixes') && toPath == '/') {
				this.transitionName = 'homemixes';
			} else if (fromPath.includes('interview') && toPath == '/') {
				this.transitionName = 'home';
			} else if (
				fromPath.includes('interview') &&
				toPath.includes('mixes')
			) {
				this.transitionName = 'mixes';
			} else if (
				fromPath.includes('mixes') &&
				toPath.includes('interview')
			) {
				this.transitionName = 'homemixes';
			}
		},
	},
	computed: {},
	created() {},
	mounted() {
		// update title / meta tags
	},
	beforeDestroy() {
		updateMetaTags(null, this.currentMetaTags);
	},
	methods: {},
};

function updateMetaTags(meta, current) {
	if (current) {
		current.forEach(c => {
			document.head.removeChild(c);
		});
	}
	if (meta) {
		return meta.map(m => {
			const tag = document.createElement('meta');
			Object.keys(m).forEach(key => {
				tag.setAttribute(key, m[key]);
			});
			document.head.appendChild(tag);
			return tag;
		});
	}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#hamburger{
	position:absolute;
	left: 1rem;
}
.main {
	display:flex;
	flex-direction:column;
	align-items: center;
	font-family: 'Righteous', cursive;
}

.hero-image {
	width: 20rem;
	height: 20rem;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .2s ease-in;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-to,
.fade-leave {
	opacity: 1;
}
</style>