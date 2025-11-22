<script setup lang="ts">
import { useInventoryPieces } from '@kb-web/useInventory';

const inventoryPieces = useInventoryPieces();

console.debug(
  '(Inventory +Page) Inventory pieces:',
  inventoryPieces.value.map((p) => p.inventoryId),
);
</script>

<template>Hello Inventory gallery</template>
