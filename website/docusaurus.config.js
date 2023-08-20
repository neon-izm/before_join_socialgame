module.exports = {
  title: 'ソーシャルゲームのクライアントエンジニア入門以前',
  tagline: 'http getから運用基盤まで',
  url: 'https://neon-izm.github.io',
  baseUrl: '/before_join_socialgame/',
  favicon: 'img/favicon.ico',
  organizationName: 'neon-izm', // Usually your GitHub org/user name.
  projectName: 'before_join_socialgame', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Site Top',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },

    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '本編',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github Repo ',
              href: 'https://github.com/neon-izm/before_join_socialgame',
            },
            {
              label: 'Auther twitter: @izm',
              href: 'https://twitter.com/izm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Before Join Socialgame Client. Built with Docusaurus.`,
    },
  },
 
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		  //routeBasePath: 'docs/',
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/neon-izm/before_join_socialgame/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
