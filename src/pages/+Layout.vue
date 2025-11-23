<script setup lang="ts">
import { useMetadata } from 'vike-metadata-vue';

import ApplicationShell from '@kb-web/components/shell/ApplicationShell.vue';
import { useHtmlMetadata } from '@kb-web/features/data';
import VuetifyMDXProvider from '@kb-web/mdx-compat/VuetifyMDXProvider.vue';
import '@kb-web/styles/main.scss';

const htmlMetadata = useHtmlMetadata();

useMetadata(htmlMetadata.value);
</script>

<template>
  <VuetifyMDXProvider>
    <ApplicationShell>
      <slot />
    </ApplicationShell>
  </VuetifyMDXProvider>
</template>
