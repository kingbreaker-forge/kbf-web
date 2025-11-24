<script setup lang="ts">
import { useDisplay } from 'vuetify';

import { blogDatabase } from '@/blogDatabase';
import BlogArticleCard from '@/components/blog-article-card/BlogArticleCard.vue';
import InventoryCard from '@/components/inventory-card/InventoryCard.vue';

const { mdAndUp } = useDisplay();

const latestBlogArticle = blogDatabase
  .items()
  .toArray()
  .sort((x, y) => x.date.getTime() - y.date.getTime())[0];

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
      <BlogArticleCard :slug="latestBlogArticle.slug || 'ID-MISSING'" />
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
