import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/your-first-accession',
        'getting-started/key-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Accessions',
      items: [
        'accessions/what-is-an-accession',
        'accessions/creating-an-accession',
        'accessions/uploading-files',
        'accessions/reviewing-classifications',
        'accessions/custom-fields',
        'accessions/how-ai-processing-works',
        'accessions/managing-accessions',
        'accessions/multi-page-tiffs',
      ],
    },
    {
      type: 'category',
      label: 'Audio & Video',
      items: [
        'audio-video/supported-formats',
        'audio-video/playing-media',
        'audio-video/transcription',
      ],
    },
    {
      type: 'category',
      label: 'Fonds',
      items: [
        'fonds/what-is-a-fonds',
        'fonds/creating-your-structure',
        'fonds/assigning-accessions',
        'fonds/ai-organise',
        'fonds/importing-a-structure',
      ],
    },
    {
      type: 'category',
      label: 'Search',
      items: [
        'search/searching-your-archive',
        'search/using-the-map',
        'search/selecting-and-adding',
      ],
    },
    {
      type: 'category',
      label: 'Dossiers',
      items: [
        'dossiers/what-is-a-dossier',
        'dossiers/creating-a-dossier',
        'dossiers/quick-vs-full-analysis',
        'dossiers/reading-your-results',
      ],
    },
    {
      type: 'category',
      label: 'Explore',
      items: [
        'explore/what-is-explore',
        'explore/starting-a-session',
        'explore/asking-good-questions',
      ],
    },
    {
      type: 'category',
      label: 'Exporting',
      items: [
        'exporting/export-formats',
        'exporting/what-each-format-is-for',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/your-profile',
        'settings/ai-instructions',
        'settings/usage-and-plan',
      ],
    },
    {
      type: 'category',
      label: 'Teams',
      items: [
        'teams/organisation-overview',
        'teams/roles-and-permissions',
        'teams/inviting-members',
      ],
    },
  ],
};

export default sidebars;
