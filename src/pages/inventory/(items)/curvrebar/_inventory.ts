import { Inventory } from '@/features/inventory/types';

export default {
  name: 'Curvrebar',
  serial: 'X-004',
  series: 'blade',
  status: 'completed',
  summary: 'Curvy fantasy-ish knife. Experimental/stylish only - made of rebar.',
  tags: [],

  availableForSale: true,

  startedDate: new Date('2025-11-01'),
  completedDate: new Date('2025-11-02'),

  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/curvrebar/cover.jpg',
  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/curvrebar/cover.jpg',
  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/curvrebar/cover.jpg',
    'https://assets.kingbreakerforge.com/inventory/curvrebar/handle.jpg',
    'https://assets.kingbreakerforge.com/inventory/curvrebar/wield.jpg',
  ],

  bladeSpecs: {
    bladeMaterial: 'Rebar (unknown soft-ish steel)',
    handleMaterial: 'Cherry',
    otherMaterials: 'Brass (pins)',

    construction: 'forged-and-ground',
    hardnessHrc: 55,
    quench: 'Water',
  },
} satisfies Inventory;
