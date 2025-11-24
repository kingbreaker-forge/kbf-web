import { toValue } from 'vue';

import { PageContext } from 'vike/types';

import { defineDynamicBackgroundData } from '@kb-web/features/dynamicBackground';
import { defineInventoryHtmlMetadata, useInventorySlug } from '@kb-web/features/inventory';
import { inventoryDatabase } from '@kb-web/inventoryDatabase';

class InventoryDataError extends Error {}

export default (pageContext: PageContext) => {
  const slug = toValue(useInventorySlug(pageContext));
  if (!slug) {
    throw new InventoryDataError(`No slug found in page context`);
  }
  const inv = inventoryDatabase.getSlug(slug);

  console.log(`(Inventory +data) inventory data for ${slug}`, inv);

  const data = {
    ...defineDynamicBackgroundData(inv.backgroundImageUrl || null), // Default background here
    ...defineInventoryHtmlMetadata(inv),
  };

  console.log('===========', data);

  return {
    ...defineDynamicBackgroundData(inv.backgroundImageUrl || null), // Default background here
    ...defineInventoryHtmlMetadata(inv),
  };
};
