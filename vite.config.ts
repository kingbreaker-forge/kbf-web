import mdx from '@mdx-js/rollup';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import rehypeUnwrapImages from 'rehype-unwrap-images';
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
      autoImport: true,
    }),
    vueJsx(),
    mdx({
      providerImportSource: '@mdx-js/vue',
      jsxImportSource: 'vue',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeUnwrapImages, // Image unwrap is necessary for MDX images to not explode due to MDX putting them in a <p>
      ],
    }),
    svg(),
  ],
  build: {
    target: 'es2022',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  ssr: {
    // bundle Vuetify on the server so CSS imports are transformed instead of
    // hitting Node directly (which cannot load .css files)
    noExternal: ['vuetify'],
  },
});
