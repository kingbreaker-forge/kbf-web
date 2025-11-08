<script setup lang="ts">
import { ref } from 'vue';

import { VApp, VBtn, VContainer, VIcon } from 'vuetify/components';

import BrokenCycleSVG from './broken-cycle/BrokenCycleSVG.vue';

const logoHovered = ref(false);
const setLogoHovered = (hovered: boolean) => {
  logoHovered.value = hovered;
};
</script>

<!--
  Vuetify's VAppBar/VMain rely on client-only measurements of the toolbar to
  compute layout offsets. During SSR those refs resolve to 0px, so the content
  flashes underneath the bar until hydration. This shell keeps Vuetify theming
  but manages spacing with plain HTML/CSS so both server and client renders match.
-->
<template>
  <VApp class="kb-app-shell">
    <header class="kb-app-shell__header" role="banner">
      <VContainer class="kb-app-shell__brand">
        <a
          href="/"
          class="kb-app-shell__logo text-h4"
          @mouseover="() => setLogoHovered(true)"
          @mouseleave="() => setLogoHovered(false)"
        >
          <span>Kingbreaker</span>
          <VIcon class="d-inline-flex">
            <BrokenCycleSVG :broken="logoHovered" />
          </VIcon>
          <span>Forge</span>
        </a>
      </VContainer>
      <div class="kb-app-shell__nav-wrap">
        <VContainer class="kb-app-shell__nav" tag="nav">
          <VBtn variant="text" href="/about">About</VBtn>
          <VBtn variant="text" href="/blog">Blog</VBtn>
          <VBtn variant="text" href="/inventory">Inventory</VBtn>
          <VBtn variant="text" href="/contact">Contact</VBtn>
        </VContainer>
      </div>
    </header>
    <main class="kb-app-shell__main">
      <VContainer class="mx-auto">
        <slot />
      </VContainer>
    </main>
  </VApp>
</template>

<style scoped>
.kb-app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
}

.kb-app-shell__header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  box-shadow: var(--v-shadow-4);
}

.kb-app-shell__brand {
  display: flex;
  justify-content: center;
  padding-block: 0.75rem;
}

.kb-app-shell__logo {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
}

.kb-app-shell__logo:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

.kb-app-shell__nav-wrap {
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.kb-app-shell__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding-block: 0.5rem;
}

.kb-app-shell__main {
  flex: 1 0 auto;
  padding-block: 2.5rem 4rem;
}

@media (min-width: 960px) {
  .kb-app-shell__nav {
    gap: 1.5rem;
  }

  .kb-app-shell__main {
    padding-top: 4rem;
  }
}
</style>
