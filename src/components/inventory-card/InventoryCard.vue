<script setup lang="ts">
import { computed } from 'vue';

import { renderAbort } from '@kb-web/features/errors';
import { inventoryDatabase } from '@kb-web/inventoryDatabase';

import DefaultCoverImage from './default-cover.jpg';

const props = defineProps<{ slug: string }>();

const inv = computed(() => inventoryDatabase.getSlug(props.slug));

if (!inv) {
  throw renderAbort(500, 'Cannot render inventory card', {
    ...props,
  });
}
</script>

<template>
  <VCard :href="`/inventory/${inv!.slug}`" density="comfortable">
    <VCardTitle>
      <h3 class="text-h5">{{ inv!.name }}</h3>
    </VCardTitle>
    <VImg cover :src="inv?.coverImageUrl || DefaultCoverImage" :alt="inv!.name" height="12em">
      <template #placeholder>
        <VSkeletonLoader type="image" height="12em" />
      </template>
      <template #error>
        <VImg cover :src="DefaultCoverImage" :alt="inv!.name" height="12em" />
      </template>
    </VImg>
    <VCardText>
      <p class="text-body-2">
        {{ inv!.summary }}
      </p>
      <VCardSubtitle v-if="inv!.tags.length" class="d-flex justify-end">
        <span class="text-subtitle-2">
          <VChip v-for="tag of inv!.tags" color="secondary">{{ tag }}</VChip>
        </span>
      </VCardSubtitle>
    </VCardText>
  </VCard>
</template>
