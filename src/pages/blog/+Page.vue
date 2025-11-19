<script setup lang="ts">
import { useDisplay } from 'vuetify';

import BlogArticleCard from '@kb-web/components/blog-article-card/BlogArticleCard.vue';
import { useBlogArticles } from '@kb-web/useBlog';

const blogArticles = useBlogArticles();
const { mdAndUp } = useDisplay();

console.log(
  'Blog articles:',
  blogArticles.value.map((a) => a.id),
);
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">Kingbreaker Blog</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol v-for="article of blogArticles" :key="article.id" :cols="mdAndUp ? '6' : '12'">
      <BlogArticleCard :articleId="article.id || 'ID-MISSING'" />
    </VCol>
  </VRow>
</template>
