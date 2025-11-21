<script setup lang="ts">
import BlowupImg from '@kb-web/components/BlowupImg.vue';

const props = defineProps<{ src: string }>();
</script>

<template>
  <VCard variant="outlined" max-width="50%" class="mx-auto">
    <BlowupImg v-bind="$attrs" :src="props.src" />
  </VCard>
</template>
