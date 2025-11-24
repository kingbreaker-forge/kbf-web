import { definePageMeta } from '@/features/pageMeta';

export interface BlogArticle {
  title: string;
  authors: string[];
  date: Date;
  summary: string;
  coverImageUrl?: string;
}

export const defineBlogMeta = (values: BlogArticle) => definePageMeta(values);
