<script setup lang="ts">
import { useDisplay } from 'vuetify';

import { blogDatabase } from '@kb-web/blogDatabase';
import BlogArticleCard from '@kb-web/components/blog-article-card/BlogArticleCard.vue';

const { mdAndUp } = useDisplay();
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">Kingbreaker Blog</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol
      v-for="articleId of blogDatabase.listSlugs()"
      :key="articleId"
      :cols="mdAndUp ? '6' : '12'"
    >
      <BlogArticleCard :slug="articleId" />
    </VCol>
  </VRow>
</template>
