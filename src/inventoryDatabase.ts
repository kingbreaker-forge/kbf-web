import { Inventory } from './features/inventory/types';
import { SlugDatabase } from './features/slugdb';

const inventoryImports = import.meta.glob<{ default: Inventory }>(
  './pages/inventory/\\(items\\)/*/_inventory.ts',
  {
    eager: true,
  },
);

export const inventoryDatabase = new SlugDatabase(
  inventoryImports,
  /^\.\/pages\/inventory\/\(items\)\/(?<slug>[^/]+)\/_inventory\.ts$/,
);
