import { computed } from 'vue';

import { useData } from 'vike-vue/useData';
import { usePageContext } from 'vike-vue/usePageContext';
import { PageContext } from 'vike/types';

export interface InventoryPiece {
  inventoryId?: string;

  hidden?: boolean;

  serial: string;
  series: 'experiment' | 'tool' | 'blade' | 'other';
  name: string;
  summary: string;

  tags: string[];

  startedDate?: Date;
  completedDate?: Date;
  soldDate?: Date;
  status: 'unknown' | 'abandoned' | 'wip' | 'stuck' | 'completed';
  availableForSale?: boolean;

  coverImageUrl?: string;
  backgroundImageUrl?: string;

  galleryUrls?: string[];

  bladeSpecs?: BladeSpecs;
}

export interface BladeSpecs {
  bladeMaterial: string;
  handleMaterial: string;
  otherMaterials?: string;

  construction: 'forged-and-ground' | 'forged-to-shape' | 'stock-removal' | 'other';

  bladeLengthCm?: number;
  bladeWidthCm?: number;
  handleLengthCm?: number;
  overallLengthCm?: number;

  massGrams?: number;

  quench?: string;
  hardnessHrc?: number;
}

export interface DataSlice_Inventory {
  currentInventoryPiece?: InventoryPiece;
}

interface PageContextWithInventoryPieces {
  config: {
    InventoryPieces?: InventoryPiece[];
  };
}

export const useInventoryPieces = () => {
  const pageContext = usePageContext();
  return computed(
    () =>
      (pageContext as PageContext & PageContextWithInventoryPieces).config?.InventoryPieces || [],
  );
};

export default () => {
  const data = useData<DataSlice_Inventory>();
  return computed(() => data.currentInventoryPiece || null);
};
