import mdx from '@mdx-js/rollup';
// import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import remarkGfm from 'remark-gfm';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';
import svg from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vike(),
    vue(),
    vuetify({
      autoImport: false,
    }),
    vueJsx(),
    // tailwindcss(),
    mdx({
      providerImportSource: '@mdx-js/vue',
      jsxImportSource: 'vue',
      remarkPlugins: [remarkGfm],
    }),
    svg(),
  ],
  build: {
    target: 'es2022',
  },
  resolve: {
    alias: {
      '@kb-web': '/src',
    },
  },
  ssr: {
    // bundle Vuetify on the server so CSS imports are transformed instead of
    // hitting Node directly (which cannot load .css files)
    noExternal: ['naive-ui', 'vueuc', 'date-fns', 'vuetify'],
  },
});
