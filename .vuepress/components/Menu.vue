<template>
	<div class="zano-menu">
		<svg @click="toggle"
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
		<ul class="zano-menu__list" v-if="isShowing">
			<router-link class="zano-menu__item" tag="li" to="/">Home</router-link>
			<router-link class="zano-menu__item" tag="li" to="/its-not-working">#itsnotworking</router-link>
			<router-link class="zano-menu__item" tag="li" to="/lessons">#lessons</router-link>
			<router-link class="zano-menu__item" tag="li" to="/howdoi">#howdoi</router-link>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isShowing: false
		};
	},
	methods:{ 
		toggle(){
			this.isShowing = !this.isShowing;
		}
	}
}
</script>

<style lang="scss">
.zano-menu{
	position:fixed;
	top:1rem;
	left:2rem;
	z-index:21;

	&__list{
		list-style: none;
		padding:0;
	}

	&__item{
		color: #6a8bad;
		padding-top:1rem;
		margin:0;
		position:relative;
		border-bottom: .2rem solid lightgray;
	}

	&__item:hover{
		color: hsla(206, 100%, 39%, 1);
		cursor:pointer;
		transform: translateY(-.1rem);
		transition: all .4s cubic-bezier(0,-0.02,.06,1.05) ;
	}

	&__item:hover::before{
		width:100%;
		transition: all .4s cubic-bezier(0,-0.02,.06,1.05) ;
	}	

	&__item::before{
		position:absolute;
		top:0;
		width:0%;
		height:100%;
		content: '';
		border-bottom: .2rem solid hsla(206, 100%, 39%, 1);
	}
}
#hamburger {
	width: 20px;
}
</style>
