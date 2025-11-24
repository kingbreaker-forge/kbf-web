import type { Inventory } from '@/features/inventory/types';
import type { SupportsWithPageId } from '@/features/pageMeta';

export const collectInventoryItems = () => {
  const imports = import.meta.glob<{ default: Inventory & SupportsWithPageId }>(
    './inventory/\\(items\\)/*/_inventory.ts',
    { eager: true },
  );

  console.debug('(inventoryCollector) Collecting metas: ', Object.keys(imports).length);

  const inventoriesWithIds = Object.entries(imports).map(([key, value]) => {
    const keyPathParts = key.split('/');
    const itemsIndex = keyPathParts.findIndex((it) => it === '(items)');
    const pageId = keyPathParts[itemsIndex + 1];

    const inventoryMeta = value.default;
    console.debug(`(inventoryCollector) Found meta (${key})`, inventoryMeta);
    return inventoryMeta.withPageId(pageId);
  });
  console.debug(`(inventoryCollector)`, { inventoriesWithIds });
  return inventoriesWithIds;
};

export default collectInventoryItems();
