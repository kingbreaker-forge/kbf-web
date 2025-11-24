import { MaybeRefOrGetter, toValue } from 'vue';

import { defineHtmlMetadata } from '@kb-web/features/htmlMetadata';

import { Inventory } from './types';

export const defineInventoryHtmlMetadata = (inventory: Inventory | MaybeRefOrGetter<Inventory>) => {
  const inv = toValue(inventory);
  return defineHtmlMetadata({
    title: `${inv.name}`,
    description: inv.summary,
    image: [inv.coverImageUrl, ...(inv.galleryUrls ?? [])].filter((x) => x !== undefined).pop(),
    authors: [],
    type: 'article',
  });
};
