<script setup lang="ts">
import { computed } from 'vue';

import { blogDatabase } from '@/blogDatabase';
import { useBlogSlug } from '@/features/blog';

const blogSlug = useBlogSlug();

const blogArticle = computed(() => blogDatabase.getSlug(blogSlug.value));
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
