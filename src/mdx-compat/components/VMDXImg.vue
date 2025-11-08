<script setup lang="ts">
import { VCard, VCardText, VImg } from 'vuetify/components';
</script>

<template>
  <VCard width="80%" class="mx-auto">
    <VCardText>
      <VImg v-bind="$attrs" />
    </VCardText>
  </VCard>
</template>
