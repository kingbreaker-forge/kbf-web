import { defineDynamicBackgroundData } from '@kb-web/features/dynamicBackground';
import { defineHtmlMetadata } from '@kb-web/features/htmlMetadata';

import HalloweenForging from './halloween-forging.jpg';

export default () => ({
  ...defineDynamicBackgroundData(HalloweenForging),
  ...defineHtmlMetadata({
    title: 'About Kingbreaker Forge',
    description:
      'Learn more about Kingbreaker Forge and our mission to create high-quality, handcrafted weapons and armor.',
    keywords: [
      'kingbreaker',
      'forge',
      'blacksmith',
      'custom',
      'swords',
      'knives',
      'medieval',
      'about',
    ],
    authors: [{ name: 'Kingbreaker Forge' }, { name: 'Filip Sufitchi' }],
  }),
});
