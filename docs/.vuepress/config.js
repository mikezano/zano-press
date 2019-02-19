module.exports = {
  base: '/',
  title: 'Zano',
  description: 'Testing',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Interviews', link: '/interviews/' },
      { text: 'Stories', link: '/stories/' },
    ],
    sidebar: {
		'/guide/': ['', 'frontend', 'backend', 'last'],
	}
  },
};
