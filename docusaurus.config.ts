import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Archiver Help Centre',
  tagline: 'Everything you need to know about using The Archiver',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://help.archivers.ai',
  baseUrl: '/',

  organizationName: 'broadhurstdigital',
  projectName: 'archivers-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/broadhurstdigital/archivers-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/archiver-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'The Archiver',
      logo: {
        alt: 'The Archiver Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help Centre',
        },
        {
          href: 'https://app.archivers.ai',
          label: 'Open App',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help Topics',
          items: [
            { label: 'Getting Started', to: '/getting-started/overview' },
            { label: 'Accessions', to: '/accessions/what-is-an-accession' },
            { label: 'Fonds', to: '/fonds/what-is-a-fonds' },
            { label: 'Dossiers', to: '/dossiers/what-is-a-dossier' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Search', to: '/search/searching-your-archive' },
            { label: 'Explore', to: '/explore/what-is-explore' },
            { label: 'Exporting', to: '/exporting/export-formats' },
            { label: 'Settings', to: '/settings/your-profile' },
          ],
        },
        {
          title: 'The Archiver',
          items: [
            { label: 'Open App', href: 'https://app.archivers.ai' },
            { label: 'GitHub', href: 'https://github.com/broadhurstdigital/archivers-docs' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} The Archiver. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
