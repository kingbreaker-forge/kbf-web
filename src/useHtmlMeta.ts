import { computed } from 'vue';

import type { UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

import useBlogArticle from './features/blog/useBlogArticle';
import useCurrentBlogPageId from './features/blog/useCurrentBlogPageId';
import useCurrentInventoryPageId from './features/inventory/useCurrentInventoryPageId';
import useInventory from './features/inventory/useInventory';

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

  // If this is a blog article, compute the HTML meta from the blog data
  const currentBlogPageId = useCurrentBlogPageId();
  const blog = useBlogArticle(currentBlogPageId);
  const blogMetaExtra = computed<Partial<HtmlMeta>>(() => {
    try {
      return {
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
      };
    } catch {
      return {};
    }
  });

  // // If this is an inventory piece, compute the HTML meta from its data
  const currentInventoryPageId = useCurrentInventoryPageId();
  const inventory = useInventory(currentInventoryPageId);
  const inventoryMetaExtra = computed<Partial<HtmlMeta>>(() => {
    try {
      return {
        title: `${inventory.value.name} (Kingbreaker Forge)`,
        description: inventory.value.summary,
        openGraph: {
          type: 'article',
          title: `${inventory.value.name} (Kingbreaker Forge)`,
          images: [inventory.value.coverImageUrl, ...(inventory.value?.galleryUrls ?? [])].filter(
            (x) => x !== undefined,
          ),
          description: inventory.value.summary,
        },
      };
    } catch {
      return {};
    }
  });

  return computed(() => ({
    ...htmlMetaDefaults,
    ...data.htmlMeta,
    ...blogMetaExtra.value,
    ...inventoryMetaExtra.value,
  }));
};
