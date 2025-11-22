import { computed } from 'vue';

import { usePageContext } from 'vike-vue/usePageContext';

import { renderAbort } from '@kb-web/features/errors';

import useBlogMetas from './useBlogMetas';

export default () =>
  computed(() => {
    const pageContext = usePageContext();
    const blogMetas = useBlogMetas();

    const { urlPathname } = pageContext;
    console.debug('(useCurrentBlogArticle) ', { urlPathname, blogMetas });
    const pageIdSearch = /^\/blog\/(\w+)$/.exec(urlPathname);
    if (!pageIdSearch) {
      throw renderAbort(404, 'Tried to get current blog article at a non-blog URL', {
        urlPathname,
      });
    }

    const pageId = pageIdSearch[1];
    if (!pageId) {
      throw renderAbort(500, 'Blog pageId search was successful but had no value', {
        urlPathname,
        pageIdSearch,
      });
    }

    return pageId;
  });
