<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">Welcome to Kingbreaker Forge</h1>
    </VCol>
  </VRow>

  <VRow>
    <VCol :cols="smAndUp ? 6 : 12">
      <VCard>
        <VCardTitle>
          <h2 class="text-h4">News</h2>
        </VCardTitle>
        <VCardText>
          <VAlert type="info" variant="outlined" class="mb-4">
            This is a placeholder for news content. Stay tuned for updates!
          </VAlert>
          <VSkeletonLoader type="article" />
        </VCardText>
        <VCardActions>
          <VRow justify="end">
            <VCol cols="auto">
              <VBtn href="/blog">
                <strong>Read More News</strong>
              </VBtn>
            </VCol>
          </VRow>
        </VCardActions>
      </VCard>
    </VCol>
    <VCol :cols="smAndUp ? 6 : 12">
      <VCard>
        <VCardTitle>
          <h2 class="text-h4">Cool Things</h2>
        </VCardTitle>
        <VCardText>
          <VAlert type="info" variant="outlined" class="mb-4">
            This is a placeholder for inventory content. Stay tuned for updates!
          </VAlert>
          <VSkeletonLoader type="article" />
        </VCardText>
        <VCardActions>
          <VRow justify="end">
            <VCol cols="auto">
              <VBtn href="/inventory">
                <strong>Browse the Inventory</strong>
              </VBtn>
            </VCol>
          </VRow>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>
