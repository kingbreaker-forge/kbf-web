<script setup lang="ts">
import { useMetadata } from 'vike-metadata-vue';

import ApplicationShell from '@kb-web/components/shell/ApplicationShell.vue';
import { useHtmlMetadata } from '@kb-web/features/htmlMetadata';
import VuetifyMDXProvider from '@kb-web/mdx-compat/VuetifyMDXProvider.vue';
import '@kb-web/styles/main.scss';

const meta = useHtmlMetadata();

useMetadata(meta.value);
</script>

<template>
  <VuetifyMDXProvider>
    <ApplicationShell>
      <slot />
    </ApplicationShell>
  </VuetifyMDXProvider>
</template>
