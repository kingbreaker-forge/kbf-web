import { usePageContext } from 'vike-vue/usePageContext';
import { PageContext } from 'vike/types';

import { SupportsPageId } from '../pageMeta';
import { Inventory } from './types';

type PageContext_WithInventory = PageContext & {
  config: {
    InventoryMetas: (Inventory & SupportsPageId)[];
  };
};

export default () => {
  const pageContext = usePageContext();
  return (pageContext as PageContext_WithInventory).config.InventoryMetas;
};
