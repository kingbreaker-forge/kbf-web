<script setup lang="ts">
import { useDisplay } from 'vuetify';

import InventoryCard from '@kb-web/components/inventory-card/InventoryCard.vue';
import { inventoryDatabase } from '@kb-web/inventoryDatabase';

const shownInventorySlugs = inventoryDatabase
  .items()
  .filter((it) => !it.hidden)
  .map((it) => it.slug)
  .toArray();

const { mdAndUp, lgAndUp } = useDisplay();

console.debug('(Inventory +Page) Inventory slugs:', shownInventorySlugs);
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">Kingbreaker Inventory</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol v-for="slug of shownInventorySlugs" :key="slug" :cols="lgAndUp ? 4 : mdAndUp ? 6 : 12">
      <InventoryCard :slug="slug" />
    </VCol>
  </VRow>
</template>
