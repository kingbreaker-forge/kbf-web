<script setup lang="ts">
import { useMetadata } from 'vike-metadata-vue';

import ApplicationShell from '@/components/shell/ApplicationShell.vue';
import { useHtmlMetadata } from '@/features/htmlMetadata';
import VuetifyMDXProvider from '@/mdx-compat/VuetifyMDXProvider.vue';
import '@/styles/main.scss';

const meta = useHtmlMetadata();

useMetadata(meta.value);
</script>

<template>
  <ApplicationShell>
    <slot />
  </ApplicationShell>
</template>
