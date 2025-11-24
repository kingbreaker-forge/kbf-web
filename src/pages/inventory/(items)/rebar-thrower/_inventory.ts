import { Inventory } from '@/features/inventory';

export default {
  name: 'Rebar Thrower',
  serial: 'F-0001',
  status: 'completed',
  summary: "A simple throwing knife made out of rebar. Isn't that what rebar is for?",
  tags: [],

  availableForSale: true,

  startedDate: new Date('2025-09-09'),
  completedDate: new Date('2025-09-09'),

  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/rebar-thrower/cover.jpg',
  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/rebar-thrower/cover.jpg',
  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/rebar-thrower/cover.jpg',
    'https://assets.kingbreakerforge.com/inventory/rebar-thrower/tipdown.jpg',
    'https://assets.kingbreakerforge.com/inventory/rebar-thrower/wield.jpg',
  ],

  bladeSpecs: {
    bladeMaterial: 'Rebar (unknown soft-ish steel)',
    handleMaterial: 'N/A',

    construction: 'forged-and-ground',
    hardnessHrc: 55,
    quench: 'Water',
  },
} satisfies Inventory;
