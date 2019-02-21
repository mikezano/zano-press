const path = require('path')
module.exports = {
  base: '/',
  title: 'Zano',
  description: 'Testing',
  themeConfig: {
    nav: [
      { text: 'test', link: '/test/' },
      { text: 'Stories', link: '/stories/' },
      { text: 'Why is it broken?', link: '/broken/' },
    ],
    sidebar: {
		'/guide/': ['', 'frontend', 'backend', 'last'],
	}
  }
}
