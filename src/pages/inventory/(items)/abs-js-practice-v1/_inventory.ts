import { Inventory } from '@/features/inventory/types';

export default {
  name: 'ABS JS Practice Ver 1',
  serial: 'X-003',
  series: 'blade',
  status: 'wip',
  summary:
    'Practicing the craft by using the ABS Journeyman Smith test as a benchmark. 5160 spring steel, basic knife.',

  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/abs-js-tester/in-forge.jpg',
  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/abs-js-tester/in-forge.jpg',
  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/abs-js-tester/material.jpg',
    'https://assets.kingbreakerforge.com/inventory/abs-js-tester/in-forge.jpg',
    'https://assets.kingbreakerforge.com/inventory/abs-js-tester-v1/billet.jpg',
  ],

  startedDate: new Date('2025-11-22'),

  bladeSpecs: {
    bladeMaterial: 'Reclaimed truck coil spring (5160 alloy?)',
    handleMaterial: 'Pine lumber (planned)',
    construction: 'forged-to-shape',

    bladeLengthCm: 23,
    bladeWidthCm: 4,
    handleLengthCm: 10,
    overallLengthCm: 27,
  },
  tags: [],
} satisfies Inventory;
