import { Inventory } from '@/features/inventory/types';

export default {
  name: 'Halloween Demo Blade',
  serial: 'X-001',
  series: 'experiment',
  status: 'completed',
  summary:
    'What is he doing with that anvil in his front yard for trick-or-treaters? Turning a tire iron into a knife, of course!',
  tags: [],

  // availableForSale: true,

  startedDate: new Date('2025-10-30'),
  completedDate: new Date('2025-11-01'),

  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/halloween-demo/cover.jpg',
  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/halloween-demo/cover.jpg',

  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/halloween-demo/wield.jpg',
    'https://assets.kingbreakerforge.com/inventory/halloween-demo/edge.jpg',
    'https://assets.kingbreakerforge.com/inventory/halloween-demo/pregrind.jpg',
    'https://assets.kingbreakerforge.com/inventory/halloween-demo/tire-iron.jpg',
  ],

  bladeSpecs: {
    bladeMaterial: 'Reclaimed tire iron',
    handleMaterial: 'N/A',
    construction: 'forged-to-shape',

    hardnessHrc: 55,
    quench: 'Canola oil',
  },
} satisfies Inventory;
