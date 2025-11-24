import { computed } from 'vue';

import { type UseMetadataParams } from 'vike-metadata-vue';
import { useData } from 'vike-vue/useData';

import Favicon from '@/assets/favicon/gen/favicon-512.png';

type HtmlMetadata = UseMetadataParams;

const HtmlMetadataSymbol = 'HtmlMetadata';

interface _Data {
  [HtmlMetadataSymbol]: {
    meta: HtmlMetadata;
  };
}

export interface CondensedHtmlMetadata {
  title: string;
  authors: string[];
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

export const useHtmlMetadata = () => {
  const data = useData<_Data>();
  return computed(() => data[HtmlMetadataSymbol]?.meta || defaultHtmlMetadata);
};

export const defineHtmlMetadata = (data: CondensedHtmlMetadata | null): _Data => {
  if (!data) {
    return defineHtmlMetadata(defaultHtmlMetadata);
  }
  return {
    [HtmlMetadataSymbol]: {
      meta: {
        applicationName: 'Kingbreaker Forge',
        title: data.title,
        description: data.description,

        authors: data.authors.map((name) => ({ name })),
        creator: 'Filip Sufitchi',

        openGraph: {
          title: data.title,
          description: data.description,
          type: data.type || 'website',
          images: data.image ? [data.image] : [Favicon],
          siteName: 'Kingbreaker Forge',
        },

        twitter: {
          title: data.title,
          description: data.description,
          site: 'Kingbreaker Forge',
          card: data.image ? 'summary_large_image' : 'summary',
          images: data.image ? [data.image] : [Favicon],
        },

        viewport: {
          initialScale: 1,
          width: 'device-width',
        },

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
      },
    },
  };
};

const defaultHtmlMetadata: CondensedHtmlMetadata = {
  title: 'Kingbreaker Forge',
  authors: ['Filip Sufitchi'],
  description: 'Kingbreaker Forge is an amateur artisanal bladesmith. Custom knives here!',
};
