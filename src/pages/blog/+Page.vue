<script setup lang="ts">
import { computed } from 'vue';

import { useDisplay } from 'vuetify';

import BlogArticleCard from '@kb-web/components/blog-article-card/BlogArticleCard.vue';
import useBlogMetas from '@kb-web/features/blog/useBlogMetas';

const { mdAndUp } = useDisplay();

const blogMetas = useBlogMetas();
const articleIds = computed(() => blogMetas.map((it) => it.pageId));
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">Kingbreaker Blog</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol v-for="articleId of articleIds" :key="articleId" :cols="mdAndUp ? '6' : '12'">
      <BlogArticleCard :articleId="articleId" />
    </VCol>
  </VRow>
</template>
