<script setup lang="ts">
import ApplicationShell from '@kb-web/components/ApplicationShell.vue';
import VuetifyMDXProvider from '@kb-web/mdx-compat/VuetifyMDXProvider.vue';
import 'vuetify/styles';
</script>

<template>
  <VuetifyMDXProvider>
    <ApplicationShell>
      <slot />
    </ApplicationShell>
  </VuetifyMDXProvider>
</template>
