import { Inventory } from '@/features/inventory';

export default {
  serial: 'KB-00l',
  name: 'BBC Pocketknife',
  status: 'completed',
  summary:
    'BBC stands for "Ball Bearing Canister", of course. Signature everyday carry: small, very sharp, and very handy.',
  tags: [],

  backgroundImageUrl: 'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/cover.jpg',
  coverImageUrl: 'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/cover.jpg',

  /*
  billet.jpg     canister.jpg  etched.jpg     etch-setup.jpg    finished1.jpg  finished-spine.jpg  repair-wip.jpg  version2-1.jpg  wield.jpg
canister2.jpg  cover.jpg     etch-fizz.jpg  etch-success.jpg  finished2.jpg  forge.jpg           shaped.jpg      version2-2.jpg
*/
  galleryUrls: [
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/version2-1.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/version2-2.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/repair-wip.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/finished1.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/finished2.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/wield.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/finished-spine.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/etched.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/etch-fizz.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/etch-setup.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/etch-success.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/billet.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/canister2.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/forge.jpg',
    'https://assets.kingbreakerforge.com/inventory/bbc-pocketknife/canister.jpg',
  ],

  bladeSpecs: {
    bladeMaterial: 'High carbon ball bearings, 1090 steel powder',
    handleMaterial: 'English walnut wood',
    otherMaterials: 'Mild steel (pins)',

    construction: 'forged-and-ground',

    hardnessHrc: 60,
    quench: 'Canola oil',

    bladeLengthCm: 7,
    handleLengthCm: 9,
    overallLengthCm: 16,
  },
} satisfies Inventory;
