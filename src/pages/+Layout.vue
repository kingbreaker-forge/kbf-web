<script setup lang="ts">
import { useMetadata } from 'vike-metadata-vue';

import ApplicationShell from '@kb-web/components/shell/ApplicationShell.vue';
import VuetifyMDXProvider from '@kb-web/mdx-compat/VuetifyMDXProvider.vue';
import '@kb-web/styles/main.scss';
import useHtmlMeta from '@kb-web/useHtmlMeta';

const htmlMeta = useHtmlMeta();
console.debug('(Global +Layout) htmlMeta:', htmlMeta.value);
useMetadata(htmlMeta.value);
</script>

<template>
  <VuetifyMDXProvider>
    <ApplicationShell>
      <slot />
    </ApplicationShell>
  </VuetifyMDXProvider>
</template>
