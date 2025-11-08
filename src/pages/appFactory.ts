import { App, Component, createApp, createSSRApp, h } from 'vue';

import { PageContext } from 'vike/types';
import { setPageContext } from 'vike-vue/usePageContext';

import RootLayout from './+Layout.vue';

export default (pageContext: PageContext) => {
  const Page = pageContext.exports.Page;
  const pageProps = pageContext.exports.pageProps || {};

  let app: App;

  if (import.meta.env.SSR) {
    app = createSSRApp({
      render: () => h(RootLayout, {}, { default: () => [h(Page as Component, pageProps)] }),
    });
  } else {
    app = createApp({
      render: () => h(RootLayout, {}, { default: () => [h(Page as Component, pageProps)] }),
    });
  }

  app.config.warnHandler = (msg, instance, trace) => {
    // Suppress specific warnings
    if (msg.includes('Non-function value encountered for default slot')) return;
    console.warn(`[Vue warn]: ${msg}${trace}`);
  };

  setPageContext(app, pageContext);

  return app;
};
