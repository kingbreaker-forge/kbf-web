import { computed } from 'vue';

import type { UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

import useBlog from './useBlog';
import useInventory from './useInventory';

export type HtmlMeta = UseMetadataParams;

export const htmlMetaDefaults: HtmlMeta = {
  title: 'Kingbreaker Forge',
  description: 'Kingbreaker Forge is an amateur artisanal bladesmith. Custom knives here!',
  authors: [{ name: 'Kingbreaker Forge' }],
};

export interface DataSlice_HtmlMeta {
  htmlMeta: HtmlMeta;
}

export default () => {
  const data = useData<DataSlice_HtmlMeta>();
  const blog = useBlog();
  const invItem = useInventory();

  // If this is a blog article, compute the HTML meta from the blog data
  const blogMetaExtra = computed<Partial<HtmlMeta>>(() =>
    !blog.value
      ? {}
      : {
          title: blog.value.title,
          description: blog.value.summary,
          image: blog.value.coverImageUrl,
          openGraph: {
            type: 'article',
            title: `${blog.value.title} (Kingbreaker Forge)`,
            authors: blog.value.authors,
            images: blog.value.coverImageUrl || undefined,
            description: blog.value.summary,
          },
        },
  );

  // If this is an inventory piece, compute the HTML meta from its data
  const inventoryMetaExtra = computed<Partial<HtmlMeta>>(() =>
    !invItem.value
      ? {}
      : {
          title: `${invItem.value.name} (Kingbreaker Forge)`,
          description: invItem.value.summary,
          openGraph: {
            type: 'article',
            title: `${invItem.value.name} (Kingbreaker Forge)`,
            images: [invItem.value.coverImageUrl, ...(invItem.value?.galleryUrls ?? [])].filter(
              (x) => x !== undefined,
            ),
            description: invItem.value.summary,
          },
        },
  );

  return computed(() => ({
    ...htmlMetaDefaults,
    ...data.htmlMeta,
    ...blogMetaExtra.value,
    ...inventoryMetaExtra.value,
  }));
};
