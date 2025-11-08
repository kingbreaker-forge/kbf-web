<script setup lang="ts">
import { computed } from 'vue';

import BrokenCycleSVG from '@kb-web/components/broken-cycle/BrokenCycleSVG.vue';
import { usePageContext } from 'vike-vue/usePageContext';
import { VBtn, VSheet } from 'vuetify/components';

const pageContext = usePageContext();

const statusCode = computed(() => {
  if (!pageContext) return 500;
  return pageContext.abortStatusCode ?? (pageContext.is404 ? 404 : 500);
});

const isNotFound = computed(() => {
  if (!pageContext) return false;
  if (typeof pageContext.is404 === 'boolean') return pageContext.is404;
  return statusCode.value === 404;
});

const headline = computed(() =>
  isNotFound.value ? 'That page never made it out of the forge' : 'We cracked an anvil mid-swing'
);

const description = computed(() =>
  isNotFound.value
    ? 'The link you followed points to a project that either moved or never existed. Double-check the address or head back to safer ground.'
    : 'An unexpected issue interrupted this request. The error has been logged so we can hammer out a fix.'
);

const supportingDetail = computed(() => {
  const reason = pageContext?.abortReason;
  if (!reason) return null;
  if (typeof reason === 'string') return reason;
  if (reason instanceof Error) return reason.message;
  return null;
});

const iconIsBroken = computed(() => !isNotFound.value);

function reloadPage() {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
}
</script>

<template>
  <section class="kb-error-page">
    <VSheet class="error-card" elevation="8">
      <div class="status-chip">
        <BrokenCycleSVG class="status-icon" :broken="iconIsBroken" />
        <span class="status-code">{{ statusCode }}</span>
      </div>
      <h1 class="headline text-h4 text-md-h3">
        {{ headline }}
      </h1>
      <p class="description text-body-1">
        {{ description }}
      </p>
      <p v-if="supportingDetail" class="supporting text-body-2">
        {{ supportingDetail }}
      </p>
      <div class="actions">
        <VBtn
          v-if="isNotFound"
          color="primary"
          size="large"
          href="/"
          data-testid="error-home-link"
        >
          Back to safety
        </VBtn>
        <VBtn
          v-else
          color="primary"
          size="large"
          @click="reloadPage"
          data-testid="error-retry-button"
        >
          Reload page
        </VBtn>
        <VBtn
          v-if="isNotFound"
          variant="text"
          size="large"
          href="/blog"
          data-testid="error-blog-link"
        >
          Browse the blog
        </VBtn>
        <VBtn
          v-else
          variant="text"
          size="large"
          href="/contact"
          data-testid="error-contact-link"
        >
          Contact us
        </VBtn>
      </div>
    </VSheet>
  </section>
</template>

<style scoped lang="scss">
.kb-error-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 4rem 6rem;
}

.error-card {
  width: min(720px, 100%);
  padding: clamp(2rem, 4vw, 3rem);
  text-align: center;
  background: rgba(var(--v-theme-surface), 0.96);
  color: rgb(var(--v-theme-on-surface));
  border-radius: 1rem;
}

.status-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(var(--v-theme-primary), 0.12);
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.status-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.status-code {
  font-variant-numeric: tabular-nums;
}

.headline {
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 0.5rem;
}

.supporting {
  margin-bottom: 1.5rem;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
</style>
