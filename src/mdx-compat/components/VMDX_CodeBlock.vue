<script setup lang="ts">
import { VCode } from 'vuetify/components';
</script>

<template>
  <VCode>
    <pre class="text-body-2" v-bind="$attrs"><slot /></pre>
  </VCode>
</template>
