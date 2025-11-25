import { Inventory } from '@/features/inventory';

export default {
  name: 'Nigerian Suya Carver',
  serial: 'KB-002',
  status: 'completed',
  summary: 'Custom-made carving knife, like street vendors in Nigeria use for suya.',

  startedDate: new Date('2025-04-18'),
  completedDate: new Date('2025-08-01'),

  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/suya-carver/cover.jpg',
  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/suya-carver/cover.jpg',
  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/suya-carver/wield.jpg',
    'https://assets.kingbreakerforge.com/inventory/suya-carver/tiptest.jpg',
    'https://assets.kingbreakerforge.com/inventory/suya-carver/forged.jpg',
    'https://assets.kingbreakerforge.com/inventory/suya-carver/plan.jpg',
  ],

  bladeSpecs: {
    bladeMaterial: 'Reclaimed truck coil spring (5160 alloy?)',
    handleMaterial: 'Purpleheart wood',
    otherMaterials: 'Brass (pins and bolster)',

    construction: 'forged-to-shape',
    hardnessHrc: 60,
    quench: 'Canola oil',

    bladeLengthCm: 25,
    overallLengthCm: 37,
    handleLengthCm: 12,
    bladeWidthCm: 2.5,
  },

  tags: [],
} satisfies Inventory;
