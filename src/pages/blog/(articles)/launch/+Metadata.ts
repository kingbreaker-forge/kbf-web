import type { BlogArticle } from '@kb-web/useBlog';

export default {
  blog: {
    title: 'Website Launch!',
    authors: ['Filip Sufitchi', 'Kingbreaker Forge'],
    date: new Date('2024-06-15'),
    summary: 'Announcing the launch of our new platform!',
    // coverImageUrl: 'https://example.com/images/launch-cover.jpg',
  } satisfies BlogArticle,
};
