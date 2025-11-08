<script setup lang="ts">
import { VTable } from 'vuetify/components';
</script>
<template>
  <VTable class="text-body-2" v-bind="$attrs">
    <slot />
  </VTable>
</template>
