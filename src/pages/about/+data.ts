import { defineDynamicBackground } from '@kb-web/features/data/dynamicBackground';

import HalloweenForging from './halloween-forging.jpg';

export default () => ({
  ...defineDynamicBackground(HalloweenForging),
});
