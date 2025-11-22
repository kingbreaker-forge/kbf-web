import { ConfigResolved } from 'vike/types';

import { SupportsWithPageId } from '@kb-web/features/pageMeta';

import { Inventory } from './types';

export interface PageContext_Inventory {
  config: ConfigResolved & {
    Metadata: {
      inventory?: Inventory & SupportsWithPageId;
    };
  };
}
