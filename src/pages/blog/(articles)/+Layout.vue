<script setup lang="ts">
import useBlogArticle from '@kb-web/features/blog/useBlogArticle';
import useCurrentBlogArticlePageId from '@kb-web/features/blog/useCurrentBlogPageId';

const blogArticlePageId = useCurrentBlogArticlePageId();
const blogArticle = useBlogArticle(blogArticlePageId);
</script>

<template>
  <div class="title-container">
    <h3 class="text-h3">
      {{ blogArticle.title }}
    </h3>
    <div class="text-subtitle pl-5">
      {{ blogArticle.authors.join(' / ') }}
      &mdash;
      {{ blogArticle.date.toLocaleDateString() }}
    </div>
  </div>
  <VSheet elevation="3" rounded="lg" class="pa-5">
    <slot />
  </VSheet>
</template>

<style scoped>
.title-container {
  padding: 1rem 3rem 1rem 3rem;
}
</style>
