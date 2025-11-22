import { useData as vikeUseData } from 'vike-vue/useData';
import { ConfigResolved, PageContextClient } from 'vike/types';

import { BlogArticle, DataSlice_Blog } from '@kb-web/useBlog';
import type { DataSlice_HtmlMeta, HtmlMeta } from '@kb-web/useHtmlMeta';
import type { DataSlice_Inventory, InventoryPiece } from '@kb-web/useInventory';
import type { DataSlice_PageBackground } from '@kb-web/usePageBackground';

interface CustomPageContext extends PageContextClient {
  config: ConfigResolved & {
    Metadata: {
      htmlMeta: HtmlMeta;
      pageBackground: string;
      blog?: BlogArticle;
      inventory?: InventoryPiece;
    };
  };
}

type GlobalPageData = DataSlice_HtmlMeta &
  DataSlice_PageBackground &
  DataSlice_Blog &
  DataSlice_Inventory;

export default (pageContext: CustomPageContext): GlobalPageData => {
  // Glue between +Metadata config and vike-vue/useData
  const pageMetadata = pageContext.config.Metadata?.htmlMeta ?? {};
  const pageBackground = pageContext.config.Metadata?.pageBackground ?? '';
  const blogArticle = pageContext.config.Metadata?.blog;
  const inventoryPiece = pageContext.config.Metadata?.inventory;

  console.debug('(+data) Data for page:', pageContext.urlPathname);
  console.debug('(+data) Providing page data:', {
    pageMetadata,
    pageBackground,
    blogArticle,
    inventoryPiece,
  });

  return {
    htmlMeta: pageMetadata,
    pageBackground: pageBackground,
    currentBlogArticle: blogArticle,
    currentInventoryPiece: inventoryPiece,
  };
};

export const useData = () => vikeUseData<GlobalPageData>();
