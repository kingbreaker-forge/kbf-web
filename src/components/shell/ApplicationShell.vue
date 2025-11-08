<script setup lang="ts">
import { computed, ref } from 'vue';

import BrokenCycleSVG from '@kb-web/components/broken-cycle/BrokenCycleSVG.vue';
import { useWindowScroll } from '@vueuse/core';
import { VApp, VBtn, VContainer, VIcon, VParallax } from 'vuetify/components';

import { usePageBackground } from './pageBackground';

const { backgroundURL } = usePageBackground();

const { y: windowScrollY } = useWindowScroll();

const backdropBlurStyle = computed(() => {
  const blurAmount = Math.min(windowScrollY.value / 100 + 3, 15);
  return {
    backdropFilter: `blur(${blurAmount}px)`,
  };
});

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
    <VParallax class="parallax" :src="backgroundURL" :scale="0.5">
      <div class="fill-height parallax-mask" :style="backdropBlurStyle" />
    </VParallax>

    <header class="header" role="banner">
      <VContainer class="brand">
        <a
          href="/"
          class="logo text-h4"
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
      <div class="nav-wrap">
        <VContainer class="nav" tag="nav">
          <VBtn variant="text" href="/about">About</VBtn>
          <VBtn variant="text" href="/blog">Blog</VBtn>
          <VBtn variant="text" href="/inventory">Inventory</VBtn>
          <VBtn variant="text" href="/contact">Contact</VBtn>
        </VContainer>
      </div>
    </header>
    <main>
      <VContainer class="mx-auto">
        <slot />
      </VContainer>
    </main>
  </VApp>
</template>

<style scoped lang="scss">
.kb-app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // background-color: rgb(var(--v-theme-background));
  background: transparent;
  color: rgb(var(--v-theme-on-background));

  main {
    flex: 1 0 auto;
    padding-block: 2.5rem 4rem;

    @media (min-width: 960px) {
      padding-top: 4rem;
    }
  }
}

.parallax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.parallax-mask {
  background-image: repeating-linear-gradient(
    -60deg,
    rgba(75, 10, 10, 0.75),
    rgba(75, 10, 10, 0.75) 5px,
    rgba(0, 0, 0, 0.75) 5px,
    rgba(0, 0, 0, 0.75) 10px
  );
}

.header {
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

.brand {
  display: flex;
  justify-content: center;
  padding-block: 0.75rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }

  &focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
}

.nav-wrap {
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.12);

  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding-block: 0.5rem;

    @media (min-width: 960px) {
      gap: 1.5rem;
    }
  }
}
</style>
