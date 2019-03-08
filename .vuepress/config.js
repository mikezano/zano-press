const path = require('path')
module.exports = {
  base: '/zano-press/',
  title: 'Zano',
  description: 'Testing',
  themeConfig: {
	navbar: true,
    nav: [
      { text: 'Posts', link: '/posts/' },
      //{ text: 'Why is it broken?', link: '/broken/' },
    ],
    sidebar: {
		'/guide/': ['', 'frontend', 'backend', 'last'],
	}
  },
  head:[
    ['link', {rel: 'icon', href: '/images/favicon.ico'}]
  ]
}
