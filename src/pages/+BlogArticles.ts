import { BlogArticle } from '@kb-web/useBlog';

interface MaybeBlogModule {
  Metadata?: {
    blog?: BlogArticle;
  };
}
const modules = import.meta.glob('./blog/\\(articles\\)/*/+Page.{vue,md,mdx}', { eager: true });
console.debug('(+BlogArticles) modules:', Object.keys(modules));

export default Object.entries(modules)
  .map(([path, module]) => ({ path, blogArticle: (module as MaybeBlogModule).Metadata?.blog }))
  .filter(({ blogArticle }) => blogArticle !== undefined)
  .map(({ path, blogArticle }) => ({
    ...blogArticle!,
    id: path.split('/')[3],
  }));
