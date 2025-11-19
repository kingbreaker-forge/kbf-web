<script setup lang="ts">
import { computed } from 'vue';

import { usePageContext } from 'vike-vue/usePageContext';
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VChip,
  VCode,
  VProgressCircular,
} from 'vuetify/components';

const pageContext = usePageContext();

const data = computed(() => {
  if (!pageContext) {
    return {
      noPageContext: true,
      abortReason: 'Waiting for page context',
      statusCode: 0,
      is404: false,
    };
  }

  return {
    noPageContext: false,
    statusCode: pageContext.abortStatusCode,
    abortReason: `${pageContext.abortReason as string}`,
    is404: pageContext.is404,
  };
});

function reloadPage() {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
}
</script>

<template>
  <VCard variant="elevated" color="on-error" class="mx-auto pa-6" style="max-width: 50vw">
    <template v-if="data.noPageContext">
      <VCardTitle>
        <VChip color="warning">???</VChip>
        Loading context...
      </VCardTitle>
      <VCardText>
        <VProgressCircular indeterminate color="primary" />
        <p>
          If you are stuck here, please check your internet connection and try reloading the page.
        </p>
      </VCardText>
    </template>

    <template v-else-if="data.is404">
      <VCardTitle>
        <VChip color="warning">404</VChip>
        This page never made it out of the forge!
      </VCardTitle>

      <VCardText>
        <p>
          The page you are looking for does not exist or has been moved. Please check the URL or go
          back to the previous page.
        </p>
      </VCardText>
    </template>

    <template v-else>
      <VCardTitle>
        <VChip color="error">500</VChip>
        We cracked an anvil!
      </VCardTitle>
      <VCardText>
        <p>
          Something unexpected went wrong, and things are kind of broken. Some more details for you:
        </p>
        <VCode class="ma-3 pa-3 d-block">
          <pre>{{ data.abortReason }}</pre>
        </VCode>
        <p>
          Please try reloading the page, or come back later. If the problem persists, feel free to
          reach out to us for help.
        </p>
      </VCardText>
    </template>

    <VCardActions class="justify-center">
      <VBtn color="primary" variant="outlined" href="/"> Go to Home Page </VBtn>
      <VBtn color="primary" variant="outlined" @click="reloadPage"> Reload Page </VBtn>
    </VCardActions>
  </VCard>
</template>
