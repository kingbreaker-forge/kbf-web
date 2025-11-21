<script setup lang="ts">
import useBlog from '@kb-web/useBlog';

const currentBlogPost = useBlog();
</script>

<template>
  <template v-if="!currentBlogPost">
    <VAlert type="error">
      This is a blog page layout but has no blog post. This should be impossible. Go play the
      lottery.
    </VAlert>
  </template>

  <template v-else>
    <div class="title-container">
      <h3 class="text-h3">
        {{ currentBlogPost?.title }}
      </h3>
      <div class="text-subtitle pl-5">
        {{ currentBlogPost.authors.join(' / ') }}
        &mdash;
        {{ currentBlogPost.date.toLocaleDateString() }}
      </div>
    </div>
    <VSheet elevation="3" rounded="lg" class="pa-5">
      <slot />
    </VSheet>
  </template>
</template>

<style scoped>
.title-container {
  padding: 1rem 3rem 1rem 3rem;
}
</style>
