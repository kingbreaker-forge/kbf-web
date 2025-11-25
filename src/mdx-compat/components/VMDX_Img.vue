<script setup lang="ts">
import { useDisplay } from 'vuetify';

import BlowupImg from '@/components/BlowupImg.vue';

const { mdAndUp, lgAndUp } = useDisplay();

const props = defineProps<{ src: string }>();
</script>

<template>
  <VRow class="d-flex justify-center">
    <VCol :cols="lgAndUp ? 6 : mdAndUp ? 9 : 12">
      <BlowupImg v-bind="$attrs" :src="props.src" />
    </VCol>
  </VRow>
</template>
