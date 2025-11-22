import { MaybeRef, computed, toRef } from 'vue';

import { renderAbort } from '@kb-web/features/errors';

import useInventoryMetas from './useInventoryMetas';

export default (pageId: string | MaybeRef<string>) => {
  const pageIdRef = toRef(pageId);
  return computed(() => {
    const inventoryMetas = useInventoryMetas();

    const foundInventory = inventoryMetas.find((it) => it.pageId == pageIdRef.value);
    if (!foundInventory) {
      throw renderAbort(404, 'Inventory item not found', { pageId });
    }

    return foundInventory;
  });
};
