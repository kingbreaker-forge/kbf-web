<script setup lang="ts">
import { useSsrAdapter } from '@css-render/vue3-ssr';
import { NConfigProvider, darkTheme } from 'naive-ui';

// Only on the server: register css-render's SSR adapter
if (import.meta.env.SSR) {
  useSsrAdapter();
}

// optional, your theme overrides
const themeOverrides = {
  common: { primaryColor: '#c93a53' },
};

// keep Tailwind/Naive dark mode in sync however you prefer
const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
</script>

<template>
  <NConfigProvider
    :theme="isDark ? darkTheme : null"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
  >
    <slot />
  </NConfigProvider>
</template>
