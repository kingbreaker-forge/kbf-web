import { computed } from 'vue';

import type { UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

export type HtmlMeta = UseMetadataParams;

export interface DataSlice_HtmlMeta {
  htmlMeta: HtmlMeta;
}

export default () => {
  const data = useData<DataSlice_HtmlMeta>();
  return computed(() => data.htmlMeta || {});
};
