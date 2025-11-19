import '@mdi/font/css/materialdesignicons.css';
import { type VuetifyOptions } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

import BrokenCycleSVG from '@kb-web/components/broken-cycle/BrokenCycleSVG.vue';

export default {
  ssr: true,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          // Warm dark base with soft off-white foreground
          background: '#1A1012',
          'on-background': '#F5EBE7',

          surface: '#241416',
          'on-surface': '#F7EEEA',

          primary: '#861924', // a touch darker for a calmer primary anchor
          'on-primary': '#F5E7E4',

          secondary: '#C8A261', // warm brass accent
          'on-secondary': '#1B120E',

          error: '#B23A4A', // muted red that won't shout
          'on-error': '#FDECEC',

          info: '#F2C94C', // sunflower yellow
          'on-info': '#2E230F',

          success: '#3FA66B', // gentle green
          'on-success': '#0E2118',

          warning: '#F2994A', // tangerine
          'on-warning': '#2D1A0C',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      'broken-cycle': BrokenCycleSVG,
    },

    sets: {
      mdi,
    },
  },
} satisfies VuetifyOptions;
