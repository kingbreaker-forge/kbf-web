<script setup lang="ts">
import {
  NAvatar,
  NColorPicker,
  NDivider,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NPageHeader,
} from 'naive-ui';

import CoatOfArmsSVG from './coa-filip.svg';
</script>

<template>
  <NLayout class="min-h-screen">
    <NLayoutHeader>
      <div class="mx-auto max-w-6xl h-14 px-4">
        <NPageHeader subtitle="subtitle test" class="h-full">
          <template #avatar>
            <NAvatar :src="CoatOfArmsSVG" alt="Coat of Arms" />
          </template>
          <template #title>Custom Page Layout</template>
          <template #extra>Extra Content</template>
        </NPageHeader>
      </div>
    </NLayoutHeader>
    <NLayoutContent>
      <main class="mx-auto max-w-3xl px-4 py-8">
        <NColorPicker />
        <slot />
      </main>
    </NLayoutContent>
  </NLayout>
</template>
