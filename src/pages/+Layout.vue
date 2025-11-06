<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui';

// optional, your theme overrides
const themeOverrides = {
  common: { primaryColor: '#c93a53' },
};

// keep Tailwind/Naive dark mode in sync however you prefer
const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : null" :theme-overrides="themeOverrides">
    <slot />
  </NConfigProvider>
</template>
