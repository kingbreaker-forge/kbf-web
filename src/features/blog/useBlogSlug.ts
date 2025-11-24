import { computed } from 'vue';

import { usePageContext } from 'vike-vue/usePageContext';
import { PageContext } from 'vike/types';

export const useBlogSlug = (pageContext?: PageContext) => {
  if (!pageContext) {
    pageContext = usePageContext();
  }
  return computed(() => {
    if (!pageContext) {
      console.debug('(useBlogSlug) page context is undefined');
      return '';
    }
    const { urlPathname } = pageContext;
    console.debug('(useBlogSlug) urlPathname:', urlPathname);
    const slug = /^\/blog\/(?<slug>[^/]+)\/?/.exec(urlPathname)?.groups?.slug;

    if (!slug) {
      console.debug('Not an inventory page:', urlPathname);
      return '';
    }

    return slug;
  });
};
