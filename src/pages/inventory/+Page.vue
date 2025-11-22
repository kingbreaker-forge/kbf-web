<script setup lang="ts">
import { useDisplay } from 'vuetify';

import InventoryCard from '@kb-web/components/inventory-card/InventoryCard.vue';
import useInventoryMetas from '@kb-web/features/inventory/useInventoryMetas';

const inventoryMetas = useInventoryMetas();

const { mdAndUp, lgAndUp } = useDisplay();

console.debug(
  '(Inventory +Page) Inventory pieces:',
  inventoryMetas.map((p) => p.pageId),
);
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">Kingbreaker Inventory</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol
      v-for="inventory of inventoryMetas"
      :key="inventory.pageId"
      :cols="lgAndUp ? 4 : mdAndUp ? 6 : 12"
    >
      <InventoryCard :inventoryPageId="inventory.pageId" />
    </VCol>
  </VRow>
</template>
