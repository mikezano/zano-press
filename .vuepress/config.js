const path = require('path');
module.exports = {
  base: '/',
  title: 'zan0',
  description: 'Testing',
  themeConfig: {
    navbar: true,
    nav: [
      { text: 'Posts', link: '/posts/' },
      { text: 'NotWorking', link: '/its-not-working/' },
      { text: 'Lessons', link: '/lessons/' },
    ],
  },
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
};
