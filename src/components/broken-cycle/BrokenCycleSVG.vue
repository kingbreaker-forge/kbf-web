<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    animated?: boolean;
    broken?: boolean;
    strokeColor?: string;
  }>(),
  {
    animated: true,
    broken: false,
    strokeColor: '',
  },
);
const svgClasses = computed(() => ({
  animated: props.animated,
  broken: props.broken,
}));

const strokeInlineStyle = computed(() => ({
  stroke: `rgb(${props.strokeColor || 'var(--v-theme-on-background)'})`,
  fill: 'none',
  'stroke-width': '10px',
  'stroke-dasharray': 'none',
}));
</script>

<template>
  <svg version="1.1" width="100px" height="50px" viewBox="-15 5 110 30" :class="svgClasses">
    <g>
      <path
        id="cycle-left"
        d="M 28,35 C 14,35 3,28 3,19 3,10 14,3 28,3 h 19"
        :style="strokeInlineStyle"
      >
        <desc id="desc1">blah</desc>
      </path>
      <path
        id="cycle-right"
        d="m 50,3 c 14,0 25,7 25,16 0,9 -11,16 -25,16 H 31"
        :style="strokeInlineStyle"
      />
    </g>
  </svg>
</template>

<style scoped lang="scss">
svg {
  &.animated path {
    transition: transform 0.3s ease;
  }

  &.broken {
    path:first-child {
      transform: translateX(-10px);
    }
    path:last-child {
      transform: translateX(10px);
    }
  }
}
</style>
