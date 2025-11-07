import suppressSlotWarning from '@kb-web/mdx-compat/suppressSlotWarning';
import { PageContext } from 'vike/types';
import { createVuetify } from 'vuetify';

import vuetifyConfiguration from './vuetifyConfiguration';

export default (pageContext: PageContext) => {
  const app = pageContext.app;
  if (!app) {
    throw new Error('App instance is missing in pageContext, during onCreateApp hook.');
  }

  const vuetify = createVuetify(vuetifyConfiguration);
  app.use(vuetify);

  suppressSlotWarning(app);
};
