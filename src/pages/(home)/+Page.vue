<script setup lang="ts">
import { useDisplay } from 'vuetify';

import BlogArticleCard from '@kb-web/components/blog-article-card/BlogArticleCard.vue';
import InventoryCard from '@kb-web/components/inventory-card/InventoryCard.vue';
import useBlogMetas from '@kb-web/features/blog/useBlogMetas';

const { mdAndUp } = useDisplay();

const blogMetas = useBlogMetas();
const latestBlogArticle = blogMetas.sort((a, b) => a.date.getTime() - b.date.getTime())[0];

const showcasedInventory = 'cs-birthday-knife';
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
      <BlogArticleCard :articleId="latestBlogArticle.pageId || 'ID-MISSING'" />
      <div class="mt-4 d-flex justify-center">
        <VBtn href="/blog" color="primary">
          <strong>Read More Articles</strong>
        </VBtn>
      </div>
    </VCol>
    <VCol :cols="mdAndUp ? 6 : 12">
      <p class="text-h4">Showcase</p>

      <InventoryCard :slug="showcasedInventory" />

      <div class="mt-4 d-flex justify-center">
        <VBtn href="/inventory" color="primary">
          <strong>Browse the Inventory</strong>
        </VBtn>
      </div>
    </VCol>
  </VRow>
</template>
