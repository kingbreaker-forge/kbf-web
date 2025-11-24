import { computed } from 'vue';

import { useData } from 'vike-vue/useData';

import KingBreakerBackground from '@/assets/kingbreaker-background.jpg';

const DynamicBackgroundSymbol = 'DynamicBackground';

interface _Data {
  [DynamicBackgroundSymbol]: {
    dynamicBackground: string;
  };
}

export const useDynamicBackground = () => {
  const data = useData<_Data>();
  return computed(() => data[DynamicBackgroundSymbol]?.dynamicBackground || KingBreakerBackground);
};

export const defineDynamicBackgroundData = (url: string | null): _Data => ({
  [DynamicBackgroundSymbol]: {
    dynamicBackground: url || KingBreakerBackground,
  },
});
