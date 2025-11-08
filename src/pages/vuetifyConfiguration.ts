import BrokenCycleSVG from '@kb-web/components/broken-cycle/BrokenCycleSVG.vue';
import '@mdi/font/css/materialdesignicons.css';
import { type VuetifyOptions } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default {
  ssr: true,
  // components,
  // directives,
  theme: {
    defaultTheme: 'dark',
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
