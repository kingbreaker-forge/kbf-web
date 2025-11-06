import { setup as setupCssSsr } from '@css-render/vue3-ssr';
import { PageContextServer } from 'vike/types';

export default (pageContext: PageContextServer) => {
  const collectedCss = setupCssSsr(pageContext.app!).collect();
  (pageContext.app as unknown as { collectedCss: string }).collectedCss = collectedCss;
};
