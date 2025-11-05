import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vike(),
    vue(),
    vueJsx(),
    tailwindcss(),
    mdx({ providerImportSource: '@mdx-js/vue', jsxImportSource: 'vue' }),
  ],
  build: {
    target: 'es2022',
  },
  resolve: {
    alias: {
      '@kingbreaker': '/src',
    },
  },
  ssr: {
    noExternal: ['naive-ui', 'vueuc', 'date-fns'],
  },
});
