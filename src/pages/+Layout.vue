<script setup lang="ts">
import NaiveMDXProvider from '@kb-web/mdx-compat/NaiveMDXProvider.vue';
import { NConfigProvider, NH1, darkTheme } from 'naive-ui';

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
      <NH1>This is the global layout</NH1>
      <slot />
    </NaiveMDXProvider>
  </NConfigProvider>
</template>
