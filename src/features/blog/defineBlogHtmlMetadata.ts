import { MaybeRefOrGetter, toValue } from 'vue';

import DefaultCoverImage from '@/assets/default-cover.jpg';
import { defineHtmlMetadata } from '@/features/htmlMetadata';

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
