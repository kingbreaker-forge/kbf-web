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
    PageBackground: {
      env: { server: true, client: true },
    },
    BlogMetas: {
      env: { server: true, client: true },
    },
    InventoryMetas: {
      env: { server: true, client: true },
    },
  },
} satisfies Config;
