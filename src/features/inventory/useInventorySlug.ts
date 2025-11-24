import { usePageContext } from 'vike-vue/usePageContext';
import { PageContext } from 'vike/types';

export const useInventorySlug = (pageContext?: PageContext) => {
  if (!pageContext) {
    pageContext = usePageContext();
  }
  if (!pageContext) {
    console.debug('(useInventoryPageId) page context is undefined');
    return '';
  }
  const { urlPathname } = pageContext;
  console.debug('(useInventoryPageId) urlPathname:', urlPathname);
  const slug = /^\/inventory\/(?<slug>[^/]+)\/?/.exec(urlPathname)?.groups?.slug;

  if (!slug) {
    console.debug('Not an inventory page:', urlPathname);
  }

  return slug;
};
