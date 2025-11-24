import { defineDynamicBackgroundData } from '@kb-web/features/dynamicBackground';
import { defineHtmlMetadata } from '@kb-web/features/htmlMetadata';

export default () => ({
  ...defineDynamicBackgroundData(null),
  ...defineHtmlMetadata(null),
});
