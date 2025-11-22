import { computed } from 'vue';

import { usePageContext } from 'vike-vue/usePageContext';

import useBlogMetas from './useBlogMetas';

export default () =>
  computed(() => {
    const pageContext = usePageContext();
    const blogMetas = useBlogMetas();

    const { urlPathname } = pageContext;
    console.debug('(useCurrentBlogArticle) ', { urlPathname, blogMetas });
    const pageIdSearch = /^\/blog\/([^/]+)\/?$/.exec(urlPathname);
    if (!pageIdSearch) {
      console.error('(useCurrentBlogPageId) Tried to get current blog article at a non-blog URL', {
        urlPathname,
      });
      return '';
    }

    const pageId = pageIdSearch[1];
    if (!pageId) {
      console.error('(useCurrentBlogPageId) Tried to get current blog article at a non-blog URL', {
        urlPathname,
        pageIdSearch,
      });
      return '';
    }

    return pageId;
  });
