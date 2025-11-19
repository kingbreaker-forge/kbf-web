import { computed } from 'vue';

import type { UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

import useBlog from './useBlog';

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

  // If this is a blog article, compute the HTML meta from the blog data
  const blogMetaExtra = computed<Partial<HtmlMeta>>(() =>
    !blog.value
      ? {}
      : {
          title: blog.value.title,
          description: blog.value.summary,
          image: blog.value.coverImageUrl,
        },
  );

  return computed(() => ({ ...htmlMetaDefaults, ...data.htmlMeta, ...blogMetaExtra.value }));
};
