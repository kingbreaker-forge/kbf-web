import { computed, readonly, ref } from 'vue';

import { useData } from 'vike-vue/useData';

import KingBreakerBackground from '@kb-web/assets/kingbreaker-background.jpg';

const bgUrlRef = ref<string>(KingBreakerBackground);

export const setDynamicBackground = (url: string) => {
  bgUrlRef.value = url;
};

export default () => readonly(bgUrlRef);

export interface DynamicBackgroundData {
  pageBackground: string;
}

export const defineDynamicBackground = (url: string): DynamicBackgroundData => ({
  pageBackground: url,
});

export const useDynamicBackground = () => {
  const data = useData<DynamicBackgroundData>();
  return computed(() => {
    const value = data.pageBackground || KingBreakerBackground;
    console.debug('(dynamicBackground) computed value:', value);
    return value;
  });
};
