import { usePageContext } from 'vike-vue/usePageContext';
import { PageContext } from 'vike/types';

import { SupportsPageId } from '@kb-web/features/pageMeta';

import { BlogArticle } from './types';

type PageContext_WithBlog = PageContext & {
  config: {
    BlogMetas: (BlogArticle & SupportsPageId)[];
  };
};

export default () => {
  const pageContext = usePageContext();
  return (pageContext as PageContext_WithBlog).config.BlogMetas;
};
