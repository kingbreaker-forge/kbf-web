import { useData as vikeUseData } from 'vike-vue/useData';
import { ConfigResolved, PageContextClient } from 'vike/types';

import { BlogArticle, DataSlice_Blog } from '@kb-web/useBlog';
import type { DataSlice_HtmlMeta, HtmlMeta } from '@kb-web/useHtmlMeta';
import type { DataSlice_PageBackground } from '@kb-web/usePageBackground';

interface CustomPageContext extends PageContextClient {
  config: ConfigResolved & {
    Metadata: {
      htmlMeta: HtmlMeta;
      pageBackground: string;
      blog?: BlogArticle;
    };
    BlogList: BlogArticle[];
  };
}

type GlobalPageData = DataSlice_HtmlMeta & DataSlice_PageBackground & DataSlice_Blog;

export default (pageContext: CustomPageContext): GlobalPageData => {
  // Glue between +Metadata config and vike-vue/useData
  const pageMetadata = pageContext.config.Metadata?.htmlMeta ?? {};
  const pageBackground = pageContext.config.Metadata?.pageBackground ?? '';
  const blogArticle = pageContext.config.Metadata?.blog;

  console.debug('(+data) Data for page:', pageContext.urlPathname);
  console.debug('(+data) Providing page data:', {
    htmlMeta: pageMetadata,
    pageBackground: pageBackground,
    blogArticle: blogArticle,
  });

  return {
    htmlMeta: pageMetadata,
    pageBackground: pageBackground,
    currentBlogArticle: blogArticle,
  };
};

export const useData = () => vikeUseData<GlobalPageData>();
