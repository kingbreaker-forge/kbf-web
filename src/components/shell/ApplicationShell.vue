<script setup lang="ts">
import { computed, ref } from 'vue';

import { useDisplay } from 'vuetify';

import BrokenCycleSVG from '@kb-web/components/broken-cycle/BrokenCycleSVG.vue';

import ShellBackground from './ShellBackground.vue';

const { mdAndUp } = useDisplay();

const logoHovered = ref(false);
const setLogoHovered = (hovered: boolean) => {
  logoHovered.value = hovered;
};

const appBarTitleClasses = computed(() =>
  mdAndUp.value ? ['d-flex', 'justify-center', 'text-h4'] : [],
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

      <template #extension v-if="mdAndUp">
        <div class="d-flex justify-center w-100">
          <VBtn variant="text" href="/about">About</VBtn>
          <VBtn variant="text" href="/blog">Blog</VBtn>
          <VBtn variant="text" href="/inventory">Inventory</VBtn>
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
        <VListItem link href="/about" @click="mobileMenuOpen = false">About</VListItem>
        <VListItem link href="/blog" @click="mobileMenuOpen = false">Blog</VListItem>
        <VListItem link href="/inventory" @click="mobileMenuOpen = false">Inventory</VListItem>
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
