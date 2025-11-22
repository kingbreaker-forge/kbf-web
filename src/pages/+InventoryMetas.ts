import { Inventory } from '@kb-web/features/inventory/types';
import { SupportsWithPageId } from '@kb-web/features/pageMeta';

const collectInventoryMetas = () => {
  const imports = import.meta.glob<{ default: Inventory & SupportsWithPageId }>(
    './inventory/\\(items\\)/*/_inventory.ts',
    { eager: true },
  );

  console.debug('(+InventoryMetas) Collecting metas: ', Object.keys(imports).length);

  const inventoriesWithIds = Object.entries(imports).map(([key, value]) => {
    const keyPathParts = key.split('/');
    const itemsIndex = keyPathParts.findIndex((it) => it === '(items)');
    const pageId = keyPathParts[itemsIndex + 1];

    const inventoryMeta = value.default;
    console.debug(`(+InventoryMetas) Found meta (${key})`, inventoryMeta);
    return inventoryMeta.withPageId(pageId);
  });
  console.debug(`(+InventoryMetas)`, { inventoriesWithIds });
  return inventoriesWithIds;
};

export default collectInventoryMetas();
