<script setup lang="ts">
import { computed } from 'vue';

import { useWindowScroll } from '@vueuse/core';
import { VParallax } from 'vuetify/components';

import usePageBackground from '@kb-web/usePageBackground';

const pageBackground = usePageBackground();

const { y: windowScrollY } = useWindowScroll();
const backdropBlurStyle = computed(() => {
  const blurAmount = Math.min(windowScrollY.value / 100 + 2, 15);
  return {
    backdropFilter: `blur(${blurAmount}px)`,
  };
});
</script>

<template>
  <VParallax class="parallax" :src="pageBackground" :scale="0.5">
    <div class="fill-height parallax-mask" :style="backdropBlurStyle" />
  </VParallax>
</template>

<style lang="scss" scoped>
.parallax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.parallax-mask {
  background-image: repeating-linear-gradient(
    -60deg,
    rgba(75, 10, 10, 0.75),
    rgba(75, 10, 10, 0.75) 5px,
    rgba(0, 0, 0, 0.75) 5px,
    rgba(0, 0, 0, 0.75) 10px
  );
}
</style>
