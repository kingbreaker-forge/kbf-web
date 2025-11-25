import { Inventory } from '@/features/inventory/types';

export default {
  name: 'C.S. Birthday Knife',
  serial: 'KB-003',
  status: 'completed',
  summary:
    'Small everyday pocketknife, custom-engraved for the birthday recipient. 80CrV2 blade, mango handle.',
  tags: [],

  startedDate: new Date('2025-11-09'),
  completedDate: new Date('2025-11-14'),

  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/cs-birthday-knife/cover.jpg',
  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/cs-birthday-knife/wield.jpg',
    'https://assets.kingbreakerforge.com/inventory/cs-birthday-knife/side1.jpg',
    'https://assets.kingbreakerforge.com/inventory/cs-birthday-knife/side2.jpg',
    'https://assets.kingbreakerforge.com/inventory/cs-birthday-knife/spine.jpg',
  ],

  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/cs-birthday-knife/cover.jpg',

  bladeSpecs: {
    bladeMaterial: '80CrV2 Steel',
    handleMaterial: 'Mango wood',
    otherMaterials: 'Brass (pins)',

    construction: 'forged-and-ground',
    hardnessHrc: 65,
    quench: 'Canola oil',
  },
} satisfies Inventory;
