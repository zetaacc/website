// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zetaa is here.',
  tagline: '没有什么能够阻挡',
  url: 'https://zetaa.cc',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zetaa-logo-icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'zetaacc', // Usually your GitHub org/user name.
  //projectName: 'website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en','zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zetaacc/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zetaacc/website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-WDN8B2GSNN',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zetaa',
        logo: {
          alt: 'Zetaa Logo',
          src: 'img/zetaa-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '关注领域',
          },
          {to: '/blog', label: '博客文章', position: 'left'},
          {href: 'https://chat.zetaa.cc', label: 'ChatGPT', position: 'left'},
          {
            href: 'https://github.com/zetaacc/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站内链接',
            items: [
              {
                label: '关注领域',
                to: '/docs/intro',
              },
              {
                label: '博客文章',
                to: '/blog',
              },
            ],
          },
          {
            title: '站外链接',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Slack',
                href: 'https://slack.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/',
              },
              {
                label: 'dev.to',
                href: 'https://dev.to/',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zetaacc/website',
              },
              {
                label: 'ChatGPT',
                href: 'https://chat.zetaa.cc/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023~${new Date().getFullYear()} Zetaa  本站骄傲地使用 Docusaurus 搭建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
