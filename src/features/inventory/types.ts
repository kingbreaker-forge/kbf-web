export interface Inventory {
  hidden?: boolean;

  serial: string;
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
