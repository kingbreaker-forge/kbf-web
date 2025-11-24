import { defineDynamicBackgroundData } from '@/features/dynamicBackground';
import { defineHtmlMetadata } from '@/features/htmlMetadata';

export default () => ({
  ...defineDynamicBackgroundData(null),
  ...defineHtmlMetadata(null),
});
