<script setup lang="ts">
import { computed, ref } from 'vue';

import { mdiCart, mdiInformation, mdiKnife, mdiNotebook } from '@mdi/js';
import { useDisplay } from 'vuetify';

import BrokenCycleSVG from '@/components/broken-cycle/BrokenCycleSVG.vue';

import ShellBackground from './ShellBackground.vue';

const { mdAndUp } = useDisplay();

const logoHovered = ref(false);
const setLogoHovered = (hovered: boolean) => {
  logoHovered.value = hovered;
};

const appBarTitleClasses = computed(() =>
  mdAndUp.value ? ['d-flex', 'justify-center', 'text-h4'] : ['text-h5'],
);

const mobileMenuOpen = ref<boolean>(false);
</script>

<template>
  <VApp class="app-shell">
    <div>
      <ShellBackground />
    </div>

    <VAppBar color="surface" elevation="3">
      <template #prepend>
        <VAppBarNavIcon
          :class="mdAndUp ? 'd-none' : ''"
          @click.stop="mobileMenuOpen = !mobileMenuOpen"
        />
      </template>

      <VAppBarTitle
        :class="appBarTitleClasses"
        @mouseover="() => setLogoHovered(true)"
        @mouseleave="() => setLogoHovered(false)"
      >
        <a href="/" class="text-decoration-none on-surface">
          <span>Kingbreaker</span>
          <VIcon class="d-inline-flex">
            <BrokenCycleSVG :broken="logoHovered" />
          </VIcon>
          <span>Forge</span>
        </a>
      </VAppBarTitle>

      <template v-if="mdAndUp" #extension>
        <div class="d-flex justify-center w-100">
          <VBtn variant="text" href="/about">About</VBtn>
          <VBtn variant="text" href="/blog">Blog</VBtn>
          <VBtn variant="text" href="/inventory">Inventory</VBtn>
          <VBtn variant="text" href="/buy">Buy</VBtn>
        </div>
      </template>
    </VAppBar>

    <VNavigationDrawer
      v-model="mobileMenuOpen"
      temporary
      scrim
      :class="mdAndUp ? 'd-none' : ''"
      color="surface"
    >
      <VList>
        <VListItem link href="/about" @click="mobileMenuOpen = false">
          <template #prepend>
            <VIcon :icon="mdiInformation" />
          </template>
          <VListItemTitle class="text-h6"> About </VListItemTitle>
        </VListItem>
        <VListItem link href="/blog" @click="mobileMenuOpen = false">
          <template #prepend>
            <VIcon :icon="mdiNotebook" />
          </template>
          <VListItemTitle class="text-h6"> Blog </VListItemTitle>
        </VListItem>
        <VListItem link href="/inventory" @click="mobileMenuOpen = false">
          <template #prepend>
            <VIcon :icon="mdiKnife" />
          </template>
          <VListItemTitle class="text-h6"> Inventory </VListItemTitle>
        </VListItem>
        <VListItem link href="/buy" @click="mobileMenuOpen = false">
          <template #prepend>
            <VIcon :icon="mdiCart" />
          </template>
          <VListItemTitle class="text-h6"> Buy </VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>

<style lang="scss" scoped>
.app-shell {
  background: transparent;
}
</style>
