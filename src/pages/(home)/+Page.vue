<script setup lang="ts">
import { computed } from 'vue';

import { useDisplay } from 'vuetify';

import BlogArticleCard from '@kb-web/components/blog-article-card/BlogArticleCard.vue';
import { useBlogArticles } from '@kb-web/useBlog';

const { mdAndUp } = useDisplay();

const blogArticles = useBlogArticles();
const latestBlogArticle = computed(
  () => blogArticles.value.sort((a, b) => a.date.getTime() - b.date.getTime())[0],
);
</script>

<template>
  <VRow v-if="mdAndUp">
    <VCol>
      <h1 class="text-h2">Welcome to Kingbreaker Forge</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol :cols="mdAndUp ? 6 : 12">
      <p class="text-h4">Latest News</p>
      <BlogArticleCard :articleId="latestBlogArticle.id || 'ID-MISSING'" />
      <div class="mt-4 d-flex justify-center">
        <VBtn href="/blog" color="primary">
          <strong>Read More Articles</strong>
        </VBtn>
      </div>
    </VCol>
    <VCol :cols="mdAndUp ? 6 : 12">
      <p class="text-h4">Showcase</p>
      <VCard>
        <VCardTitle density="comfortable">
          <h3 class="text-h5">Forged Stuff Goes Here</h3>
        </VCardTitle>
        <VCardText>
          <VAlert type="info" color="success" variant="outlined" class="mb-4">
            This is a placeholder for inventory content. Stay tuned for updates!
          </VAlert>
          <VSkeletonLoader type="article" />
        </VCardText>
      </VCard>

      <div class="mt-4 d-flex justify-center">
        <VBtn href="/blog" color="primary">
          <strong>Browse All Pieces</strong>
        </VBtn>
      </div>
    </VCol>
  </VRow>
</template>
