<script setup lang="ts">
import { computed, ref } from 'vue';

import { VCard, VImg, VNoSsr } from 'vuetify/components';

const props = defineProps<{ src: string }>();
const imgSrc = computed(() => props.src);

const showDialog = ref(false);
</script>

<template>
  <VImg v-bind="$attrs" :src="imgSrc" @click="showDialog = true" />
  <VNoSsr>
    <VDialog v-model="showDialog" max-width="85%">
      <VCard>
        <VCardActions>
          <VBtn variant="elevated" color="secondary" :href="imgSrc" target="_blank">
            Open in New Window
            <VIcon icon="mdi-open-in-new" />
          </VBtn>
          <VBtn variant="text" icon="mdi-close" @click="showDialog = false" />
        </VCardActions>
        <VCardText>
          <VImg :src="imgSrc" style="max-height: 75vh" />
        </VCardText>
      </VCard>
    </VDialog>
  </VNoSsr>
</template>
