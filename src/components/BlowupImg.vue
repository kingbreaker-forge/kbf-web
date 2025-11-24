<script setup lang="ts">
import { computed, ref } from 'vue';

import { mdiClose, mdiOpenInNew } from '@mdi/js';
import { VCard, VImg, VNoSsr } from 'vuetify/components';

const props = defineProps<{ src: string }>();
const imgSrc = computed(() => props.src);

const showDialog = ref(false);
</script>

<template>
  <VImg v-bind="$attrs" :src="imgSrc" class="cursor-pointer" @click="showDialog = true" />
  <VNoSsr>
    <VDialog v-model="showDialog" max-width="85%">
      <VCard>
        <VCardActions>
          <VBtn variant="elevated" color="secondary" :href="imgSrc" target="_blank">
            Open in New Window
            <VIcon :icon="mdiOpenInNew" />
          </VBtn>
          <VBtn variant="text" :icon="mdiClose" @click="showDialog = false" />
        </VCardActions>
        <VCardText>
          <VImg :src="imgSrc" style="max-height: 75vh" />
        </VCardText>
      </VCard>
    </VDialog>
  </VNoSsr>
</template>
