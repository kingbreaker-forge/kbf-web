<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui';

import NaiveMDXProvider from './NaiveMDXProvider.vue';

// optional, your theme overrides
const themeOverrides = {
  common: { primaryColor: '#c93a53' },
};

// keep Tailwind/Naive dark mode in sync however you prefer
const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : null" :theme-overrides="themeOverrides">
    <NaiveMDXProvider>
      <slot />
    </NaiveMDXProvider>
  </NConfigProvider>
</template>
