<script setup lang="ts">
import { VApp, VAppBar, VBtn, VContainer, VMain, VSpacer } from 'vuetify/components';
</script>

<template>
  <VApp>
    <VAppBar>
      <template #default>
        <VContainer class="mx-auto d-flex justify-center align-center items-center">
          <VBtn text href="/" class="text-h4">Kingbreaker Forge</VBtn>
        </VContainer>
      </template>
      <template #extension>
        <VContainer class="mx-auto d-flex justify-center">
          <VSpacer />
          <VBtn text href="/about">About</VBtn>
          <VBtn text href="/blog">Blog</VBtn>
          <VBtn text href="/inventory">Inventory</VBtn>
          <VBtn text href="/contact">Contact</VBtn>
          <VSpacer />
        </VContainer>
      </template>
    </VAppBar>
    <VMain>
      <VContainer class="mx-auto">
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>
