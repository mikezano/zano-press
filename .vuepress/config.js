const path = require('path');
module.exports = {
  base: '/',
  title: 'zan0',
  description: 'Testing',
  themeConfig: {
    navbar: true,
    nav: [
	  { 
		text: 'Posts', 
		items:[
			{ text: '#latest', link: '/posts/'},
			{ text: '#itsnotworking', link: '/its-not-working/'},
			{ text: '#lessons', link: '/lessons/'},
			{ text: '#didyouknow', link: '/did-you-know/'},
		]
	 }
    ],
  },
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
};
