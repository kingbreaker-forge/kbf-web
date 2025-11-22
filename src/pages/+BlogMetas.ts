import { Inventory } from '@kb-web/features/inventory/types';
import { SupportsWithPageId } from '@kb-web/features/pageMeta';

const collectInventoryMetas = () => {
  const imports = import.meta.glob<{ default: Inventory & SupportsWithPageId }>(
    './blog/\\(articles\\)/*/_blog.ts',
    { eager: true },
  );

  console.debug('(+BlogMetas) Collecting metas: ', Object.keys(imports).length);

  const inventoriesWithIds = Object.entries(imports).map(([key, value]) => {
    const keyPathParts = key.split('/');
    const articlesIndex = keyPathParts.findIndex((it) => it === '(articles)');
    const pageId = keyPathParts[articlesIndex + 1];

    const blogMeta = value.default;
    console.debug(`(+BlogMetas) Found meta (${key})`, blogMeta);
    return blogMeta.withPageId(pageId);
  });
  console.debug(`(+BlogMetas)`, { inventoriesWithIds });
  return inventoriesWithIds;
};

export default collectInventoryMetas();
