import { computed, readonly, ref } from 'vue';

import { useData } from 'vike-vue/useData';
import { usePageContext } from 'vike-vue/usePageContext';
import { PageContext } from 'vike/types';

export interface BlogArticle {
  id?: string;
  title: string;
  authors: string[];
  date: Date;
  summary: string;
  coverImageUrl?: string;
}

export interface DataSlice_Blog {
  currentBlogArticle?: BlogArticle;
}

interface PageContextWithBlogArticles {
  config: {
    BlogArticles?: BlogArticle[];
  };
}

export const useBlogArticles = () => {
  const pageContext = usePageContext();
  return computed(
    () => (pageContext as PageContext & PageContextWithBlogArticles).config?.BlogArticles || [],
  );
};

export default () => {
  const data = useData<DataSlice_Blog>();
  return computed(() => data.currentBlogArticle || null);
};
