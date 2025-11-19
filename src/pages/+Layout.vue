<script setup lang="ts">
import { watchEffect } from 'vue';

import { useMetadata } from 'vike-metadata-vue';
import 'vuetify/styles';

import ApplicationShell from '@kb-web/components/shell/ApplicationShell.vue';
import VuetifyMDXProvider from '@kb-web/mdx-compat/VuetifyMDXProvider.vue';
import useHtmlMeta from '@kb-web/useHtmlMeta';

const htmlMeta = useHtmlMeta();
console.log('(Global +Layout) htmlMeta:', htmlMeta.value);
useMetadata(htmlMeta.value);
</script>

<template>
  <VuetifyMDXProvider>
    <ApplicationShell>
      <slot />
    </ApplicationShell>
  </VuetifyMDXProvider>
</template>

<style lang="scss">
p {
  margin-bottom: 16px;
}
</style>
