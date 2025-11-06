import { Component, createSSRApp, h } from 'vue';

import { setup as setupCssSsr } from '@css-render/vue3-ssr';
import suppressSlotWarning from '@kb-web/mdx-compat/suppressSlotWarning';
import naive from 'naive-ui';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import { PageContextServer } from 'vike/types';
import { renderToString } from 'vue/server-renderer';

import RootLayout from './+Layout.vue';

// Pre-render CSS during SSR
export default async (pageContext: PageContextServer) => {
  const Page = pageContext.exports.Page;
  const pageProps = pageContext.exports.pageProps || {};

  const app = createSSRApp({
    render: () => h(RootLayout, {}, { default: () => [h(Page as Component, pageProps)] }),
  });

  app.use(naive);

  suppressSlotWarning(app);

  // Wire Naive/css-render SSR into THIS app instance
  const cssCollector = setupCssSsr(app);

  // Render the app to HTML (styles are “recorded” into css-render’s bucket)
  const appHtml = await renderToString(app);

  // Get critical CSS for this request
  const criticalCss = cssCollector.collect();

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html>
    <head>
      ${dangerouslySkipEscape(criticalCss)}
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(appHtml)}</div>
    </body>
  </html>`;

  return { documentHtml };
};
