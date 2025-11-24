import { toValue } from 'vue';

import { PageContext } from 'vike/types';

import { defineDynamicBackgroundData } from '@/features/dynamicBackground';
import { defineInventoryHtmlMetadata, useInventorySlug } from '@/features/inventory';
import { inventoryDatabase } from '@/inventoryDatabase';

class InventoryDataError extends Error {}

export default (pageContext: PageContext) => {
  const slug = toValue(useInventorySlug(pageContext));
  if (!slug) {
    throw new InventoryDataError(`No slug found in page context`);
  }
  const inv = inventoryDatabase.getSlug(slug);

  console.debug(`(Inventory +data) inventory data for ${slug}`, inv);

  return {
    ...defineDynamicBackgroundData(inv.backgroundImageUrl || null), // Default background here
    ...defineInventoryHtmlMetadata(inv),
  };
};
