import { BlogArticle } from '@kb-web/useBlog';

interface MaybeBlogModule {
  Metadata?: {
    blog?: BlogArticle;
  };
}
const metadataModules = import.meta.glob('./blog/\\(articles\\)/*/+Metadata.ts', { eager: true });
console.debug('(+BlogArticles) metadata modules:', Object.keys(metadataModules));

export default Object.entries(metadataModules)
  .map(([path, module]) => ({ path, blogArticle: (module as MaybeBlogModule).Metadata?.blog }))
  .filter(({ blogArticle }) => blogArticle !== undefined)
  .map(({ path, blogArticle }) => ({
    ...blogArticle!,
    id: path.split('/')[3],
  }));
