import { useData as vikeUseData } from 'vike-vue/useData';
import { ConfigResolved, PageContextClient } from 'vike/types';

import type { DataSlice_HtmlMeta, HtmlMeta } from '@kb-web/useHtmlMeta';
import type { DataSlice_PageBackground } from '@kb-web/usePageBackground';

interface CustomPageContext extends PageContextClient {
  config: ConfigResolved & {
    Metadata: {
      htmlMeta: HtmlMeta;
      pageBackground: string;
    };
  };
}

type GlobalPageData = DataSlice_HtmlMeta & DataSlice_PageBackground;

export default (pageContext: CustomPageContext): GlobalPageData => {
  // Glue between +Metadata config and vike-vue/useData
  const pageMetadata = pageContext.config.Metadata?.htmlMeta ?? {};
  const pageBackground = pageContext.config.Metadata?.pageBackground ?? '';

  console.debug('(+data) Data for page:', pageContext.urlPathname);
  console.debug('(+data) Providing page data:', {
    pageMetadata,
    pageBackground,
  });

  return {
    htmlMeta: pageMetadata,
    pageBackground: pageBackground,
  };
};

export const useData = () => vikeUseData<GlobalPageData>();
