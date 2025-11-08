<script setup lang="ts">
import ApplicationShell from '@kb-web/components/shell/ApplicationShell.vue';
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

<style lang="scss">
p {
  margin-bottom: 16px;
}
</style>
