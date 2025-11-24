import { computed } from 'vue';

import { type UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

type HtmlMetadata = UseMetadataParams;

const HtmlMetadataSymbol = 'HtmlMetadata';

interface _Data {
  [HtmlMetadataSymbol]: {
    meta: HtmlMetadata;
  };
}

export const useHtmlMetadata = () => {
  const data = useData<_Data>();
  return computed(() => data[HtmlMetadataSymbol]?.meta || defaultHtmlMetadata);
};

export const defineHtmlMetadata = (data: HtmlMetadata | null): _Data => ({
  [HtmlMetadataSymbol]: { meta: data || defaultHtmlMetadata },
});

const defaultHtmlMetadata = {
  title: 'Kingbreaker Forge',
  description: 'Kingbreaker Forge is an amateur artisanal bladesmith. Custom knives here!',
  authors: [{ name: 'Kingbreaker Forge' }],
};
