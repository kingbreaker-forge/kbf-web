<script setup lang="ts">
import { computed } from 'vue';

import { blogDatabase } from '@kb-web/blogDatabase';

import DefaultCoverImage from './default-cover.jpg';

const props = defineProps<{ slug: string }>();

const article = computed(() => blogDatabase.getSlug(props.slug));
</script>

<template>
  <VCard v-if="article" :href="`/blog/${article.slug}`" density="comfortable">
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
