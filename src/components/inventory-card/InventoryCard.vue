<script setup lang="ts">
import useInventory from '@kb-web/features/inventory/useInventory';

import DefaultCoverImage from './default-cover.jpg';

const props = defineProps<{ inventoryPageId: string }>();

const inventory = useInventory(props.inventoryPageId);
</script>

<template>
  <VCard :href="`/inventory/${inventory.pageId}`" density="comfortable">
    <VCardTitle>
      <h3 class="text-h5">{{ inventory.name }}</h3>
    </VCardTitle>
    <VImg
      cover
      :src="inventory.coverImageUrl || DefaultCoverImage"
      :alt="inventory.name"
      height="12em"
    >
      <template #placeholder>
        <VSkeletonLoader type="image" height="12em" />
      </template>
      <template #error>
        <VImg cover :src="DefaultCoverImage" :alt="inventory.name" height="12em" />
      </template>
    </VImg>
    <VCardText>
      <p class="text-body-2">
        {{ inventory.summary }}
      </p>
      <VCardSubtitle v-if="inventory.tags.length" class="d-flex justify-end">
        <span class="text-subtitle-2">
          <VChip v-for="tag of inventory.tags" color="secondary">{{ tag }}</VChip>
        </span>
      </VCardSubtitle>
    </VCardText>
  </VCard>
</template>
