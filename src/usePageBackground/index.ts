import { computed } from 'vue';

import { useData } from 'vike-vue/useData';

import KingBreakerBackground from './kingbreaker-background.jpg';

export { KingBreakerBackground };

export interface DataSlice_PageBackground {
  pageBackground: string;
}

export type PageBackground = typeof KingBreakerBackground;

export default () => {
  const data = useData<DataSlice_PageBackground>();
  return computed(() => data.pageBackground || KingBreakerBackground);
};
