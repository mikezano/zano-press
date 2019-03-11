const path = require('path')
module.exports = {
  base: '/',
  title: 'zan0',
  description: 'Testing',
  themeConfig: {
	navbar: true,
    nav: [
      { text: 'Posts', link: '/posts/' },
    ],
    sidebar: {
		'/guide/': ['', 'frontend', 'backend', 'last'],
	}
  },
  head:[
    ['link', {rel: 'icon', href: '/images/favicon.ico'}]
  ]
}
