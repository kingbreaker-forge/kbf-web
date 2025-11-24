import { Inventory } from '@/features/inventory/types';

export default {
  name: 'Tire Iron Bar Knife',
  serial: 'X-002',
  series: 'experiment',
  status: 'wip',
  summary: 'When life gives you tire irons, you make knives.',
  tags: [],

  // availableForSale: true,

  startedDate: new Date('2025-10-30'),
  // completedDate: new Date('2025-11-01'),

  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/tire-iron-bar/cover.jpg',
  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/tire-iron-bar/cover.jpg',

  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/tire-iron-bar/cover.jpg',
    'https://assets.kingbreakerforge.com/inventory/tire-iron-bar/forged.jpg',
    'https://assets.kingbreakerforge.com/inventory/tire-iron-bar/tire-iron.jpg',
  ],

  bladeSpecs: {
    bladeMaterial: 'Reclaimed tire iron',
    handleMaterial: 'N/A',
    construction: 'forged-and-ground',

    // hardnessHrc: 55,
    // quench: 'Canola oil',
  },
} satisfies Inventory;
