<script setup lang="ts">
import ApplicationShell from '@kb-web/components/shell/ApplicationShell.vue';
import VuetifyMDXProvider from '@kb-web/mdx-compat/VuetifyMDXProvider.vue';
// import '@kb-web/styles/tailwind.css';
import 'vuetify/styles';

// keep Tailwind/Naive dark mode in sync however you prefer
// const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
const isDark = true;
</script>

<template>
  <VuetifyMDXProvider>
    <ApplicationShell>
      <slot />
    </ApplicationShell>
  </VuetifyMDXProvider>
</template>
