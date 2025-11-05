// pages/+onRenderHtml.ts
import { createSSRApp, h } from 'vue';

import { setup as setupCssSsr } from '@css-render/vue3-ssr';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import { PageContext } from 'vike/types';
import { renderToString } from 'vue/server-renderer';

import RootLayout from './RootLayout.vue';

export default async function onRenderHtml(pageContext: PageContext) {
  const Page = pageContext.exports.Page;
  const pageProps = pageContext.exports.pageProps ?? {};
  const app = createSSRApp({
    render: () => h(RootLayout, null, { default: () => h(Page, pageProps) }),
  });

  const appHtml = await renderToString(app);
  const appCss = setupCssSsr(app).collect();

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html>
    <head>
      <style id="naive-ssr-css">${dangerouslySkipEscape(appCss)}</style>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(appHtml)}</div>
    </body>
  </html>`;

  return { documentHtml };
}
