import { MaybeRefOrGetter, toValue } from 'vue';

import DefaultCoverImage from '@kb-web/assets/default-cover.jpg';
import { defineHtmlMetadata } from '@kb-web/features/htmlMetadata';

import { BlogArticle } from './types';

export const defineBlogHtmlMetadata = (blog: BlogArticle | MaybeRefOrGetter<BlogArticle>) => {
  const b = toValue(blog);

  return defineHtmlMetadata({
    title: b.title,
    authors: b.authors,
    description: b.summary,
    image: b.coverImageUrl || DefaultCoverImage,
    type: 'article',
  });
};
