import { computed } from 'vue';

import type { UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

export type HtmlMetadata = UseMetadataParams;

export interface HtmlMetadataData {
  htmlMetadata: HtmlMetadata;
}

export const defineHtmlMetadataData = (meta: HtmlMetadata): HtmlMetadataData => ({
  htmlMetadata: meta,
});

const defaults: HtmlMetadata = {
  title: 'Kingbreaker Forge',
  description: 'Kingbreaker Forge is an amateur artisanal bladesmith. Custom knives here!',
  authors: [{ name: 'Kingbreaker Forge' }],
};

export const useHtmlMetadata = () => {
  const data = useData<HtmlMetadataData>();
  return computed(() => {
    const value = data.htmlMetadata || defaults;
    console.log('(htmlMetadata) computed value:', value);
    return value;
  });
};
