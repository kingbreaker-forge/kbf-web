<script setup lang="ts">
import { useBlogArticles } from '@kb-web/useBlog';

import DefaultCoverImage from './default-cover.jpg';

const props = defineProps<{ articleId: string }>();
const blogArticles = useBlogArticles();

const article = blogArticles.value.find((a) => a.id === props.articleId);
</script>

<template>
  <VCard v-if="article" :href="`/blog/${article.id}`" density="comfortable">
    <VCardTitle>
      <h3 class="text-h5">{{ article.title }}</h3>
    </VCardTitle>
    <VImg
      cover
      :src="article.coverImageUrl || DefaultCoverImage"
      :alt="article.title"
      height="12em"
    >
      <template #placeholder>
        <VSkeletonLoader type="image" height="12em" />
      </template>
      <template #error>
        <VImg cover :src="DefaultCoverImage" :alt="article.title" height="12em" />
      </template>
    </VImg>
    <VCardText>
      <p class="text-body-2">
        {{ article.summary }}
      </p>
      <VCardSubtitle class="d-flex justify-end">
        <span class="text-subtitle-2">
          {{ article.authors[0] }} @ {{ article.date.toLocaleDateString() }}
        </span>
      </VCardSubtitle>
    </VCardText>
  </VCard>

  <VCard v-else density="comfortable">
    <VCardTitle>
      <h3 class="text-h5">Article Not Found</h3>
    </VCardTitle>
    <VCardText>
      <p class="text-body-2">The requested blog article could not be found.</p>
    </VCardText>
  </VCard>
</template>
