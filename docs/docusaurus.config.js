module.exports = {
  title: 'Chatbot for Class',
  tagline: 'Build your own Chatbot',
  url: 'https://romanenko.github.com/covid19-safety-information',
  baseUrl: '/covid19-safety-information/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'romanenko', // Usually your GitHub org/user name.
  projectName: 'covid19-safety-information', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Chatbot for Class',
      logo: {
        alt: 'Chatbot for Class',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Get Started',
          position: 'left',
        },
        {
          href: 'http://m.me/111708907337870',
          label: 'Try it out',
          position: 'left',
        },
        {
          href: 'https://github.com/romanenko/covid19-safety-information',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: 'docs/privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: 'docs/terms-of-service',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/romanenko/covid19-safety-information',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jane Hyeseo Shin, Michael Romanenko. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
