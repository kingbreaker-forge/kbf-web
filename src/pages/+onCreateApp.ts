import suppressSlotWarning from '@kb-web/mdx-compat/suppressSlotWarning';
import { PageContext } from 'vike/types';

export default (pageContext: PageContext) => {
  const app = pageContext.app;
  if (!app) {
    throw new Error('App instance is missing in pageContext, during onCreateApp hook.');
  }
  suppressSlotWarning(app);
};
