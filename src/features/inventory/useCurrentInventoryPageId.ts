import { computed } from 'vue';

import { usePageContext } from 'vike-vue/usePageContext';

import { renderAbort } from '@kb-web/features/errors';

import useInventoryMetas from './useInventoryMetas';

export default () =>
  computed(() => {
    const pageContext = usePageContext();
    const inventoryMetas = useInventoryMetas();

    const { urlPathname } = pageContext;
    console.debug('(useCurrentInventory) ', { urlPathname, inventoryMetas });
    const pageIdSearch = /^\/inventory\/(\w+)$/.exec(urlPathname);
    if (!pageIdSearch) {
      throw renderAbort(404, 'Tried to get current inventory at a non-inventory URL', {
        urlPathname,
      });
    }

    const pageId = pageIdSearch[1];
    if (!pageId) {
      throw renderAbort(500, 'Inventory pageId search was successful but had no value', {
        urlPathname,
        pageIdSearch,
      });
    }

    return pageId;
  });
