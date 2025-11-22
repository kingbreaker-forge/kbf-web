<script setup lang="ts">
import useInventoryMetas from '@kb-web/features/inventory/useInventoryMetas';

const inventoryMetas = useInventoryMetas();

console.debug(
  '(Inventory +Page) Inventory pieces:',
  inventoryMetas.map((p) => p.pageId),
);
</script>

<template>Hello Inventory gallery</template>
