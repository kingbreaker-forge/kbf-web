import { setup as setupCssSsr } from '@css-render/vue3-ssr';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import { PageContextServer } from 'vike/types';
import { renderToString } from 'vue/server-renderer';

import createApp from './appFactory';

export default async (pageContext: PageContextServer) => {
  const app = createApp(pageContext);

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
