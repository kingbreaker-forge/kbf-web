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

  meta: {},
} satisfies Config;
