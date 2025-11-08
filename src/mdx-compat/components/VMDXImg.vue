<script setup lang="ts">
import { VCard, VImg, VNoSsr } from 'vuetify/components';

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <VNoSsr>
    <VCard width="80%" class="mx-auto">
      <VImg v-bind="$attrs" cover />
    </VCard>
  </VNoSsr>
</template>
