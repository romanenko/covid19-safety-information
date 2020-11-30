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
          title: 'Guide',
          items: [
            {
              label: 'Chatbot for Class',
              to: 'docs/',
            },
            {
              label: 'Future directions',
              to: 'docs/ideas/',
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
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/janeshin059">Jane Hyeseo Shin</a>, <a href="https://michael.romanenko.kg/">Michael Romanenko</a>.<br /> Built with <a href="https://docusaurus.io/">Docusaurus</a>. Landing images by <a href="https://undraw.co/">unDraw</a>`,
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
            'https://github.com/romanenko/covid19-safety-information/tree/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
