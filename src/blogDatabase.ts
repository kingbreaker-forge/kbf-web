import { BlogArticle } from './features/blog/types';
import { SlugDatabase } from './features/slugdb';

const blogImports = import.meta.glob<{ default: BlogArticle }>(
  './pages/blog/\\(articles\\)/*/_blog.ts',
  {
    eager: true,
  },
);

export const blogDatabase = new SlugDatabase(
  blogImports,
  /^\.\/pages\/blog\/\(articles\)\/(?<slug>[^/]+)\/_blog\.ts$/,
);
