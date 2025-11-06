<script setup lang="ts">
import PageLayout from '@kb-web/components/layout/PageLayout.vue';
import NaiveMDXProvider from '@kb-web/mdx-compat/NaiveMDXProvider.vue';
import '@kb-web/styles/tailwind.css';
import { NConfigProvider, c, darkTheme } from 'naive-ui';

// keep Tailwind/Naive dark mode in sync however you prefer
// const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
const isDark = true;
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : null">
    <NaiveMDXProvider>
      <PageLayout>
        <slot />
      </PageLayout>
    </NaiveMDXProvider>
  </NConfigProvider>
</template>
