import vikeVue from 'vike-vue/config';
import type { Config } from 'vike/types';

export default {
  ssr: true,

  prerender: {
    enable: true,
    partial: false,
    keepDistServer: false,
  },

  extends: [vikeVue],

  meta: {
    Metadata: {
      env: { server: true, client: true },
    },
    BlogArticles: {
      env: { server: true, client: true },
    },
    InventoryMetas: {
      env: { server: true, client: true },
    },
  },
} satisfies Config;
