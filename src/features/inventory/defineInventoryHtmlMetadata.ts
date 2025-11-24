import { MaybeRefOrGetter, toRef } from 'vue';

import { defineHtmlMetadata } from '@kb-web/features/htmlMetadata';

import { Inventory } from './types';

export const defineInventoryHtmlMetadata = (inv: Inventory | MaybeRefOrGetter<Inventory>) => {
  const invRef = toRef(inv);
  return defineHtmlMetadata({
    title: `${invRef.value.name} (Kingbreaker Forge)`,
    description: invRef.value.summary,
    openGraph: {
      type: 'article',
      title: `${invRef.value.name} (Kingbreaker Forge)`,
      images: [invRef.value.coverImageUrl, ...(invRef.value?.galleryUrls ?? [])].filter(
        (x) => x !== undefined,
      ),
      description: invRef.value.summary,
    },
  });
};
