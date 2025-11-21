import type { BlogArticle } from '@kb-web/useBlog';

export default {
  blog: {
    title: 'Website Launch',
    authors: ['Filip Sufitchi', 'Kingbreaker Forge'],
    date: new Date('2025-11-20'),
    // coverImageUrl: 'https://example.com/images/launch-cover.jpg',
    summary: `Announcing the launch of the website.
    Probably not the in-depth content you're looking for, but hey. It's here.`,
  } satisfies BlogArticle,
};
