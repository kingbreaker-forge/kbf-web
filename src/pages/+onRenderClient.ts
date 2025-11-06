import { PageContextClient } from 'vike/types';

import createApp from './appFactory';

export default (pageContext: PageContextClient) => {
  const app = createApp(pageContext);

  app.mount('#app');
};
