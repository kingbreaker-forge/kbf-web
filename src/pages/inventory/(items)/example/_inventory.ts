import { Inventory } from '@/features/inventory/types';

export default {
  serial: 'X-000',
  hidden: true,

  name: 'Harborline Petty',
  status: 'completed',
  summary:
    '5.5" kitchen petty forged from 1084/15N20 ladder-pattern damascus with stabilized maple burl and bronze hardware.',
  tags: ['kitchen', 'petty', 'damascus', 'forged'],

  startedDate: new Date('2024-03-02'),
  completedDate: new Date('2024-03-18'),
  availableForSale: false,

  coverImageUrl: 'https://placecats.com/800/600',
  backgroundImageUrl: 'https://placecats.com/1920/1280',
  galleryUrls: [
    'https://placecats.com/900/900',
    'https://placecats.com/900/600',
    'https://placecats.com/1000/1500',
  ],

  bladeSpecs: {
    bladeMaterial: '1084/15N20 damascus',
    handleMaterial: 'Stabilized maple burl',
    otherMaterials: 'Phosphor bronze bolster, carbon fiber spacer',
    construction: 'forged-and-ground',

    bladeLengthCm: 14.3,
    bladeWidthCm: 3.2,
    handleLengthCm: 12.0,
    overallLengthCm: 26.5,

    massGrams: 142,

    quench: 'Parks 50',
    hardnessHrc: 61,
  },
} satisfies Inventory;
