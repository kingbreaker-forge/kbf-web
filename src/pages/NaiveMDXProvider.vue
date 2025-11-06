<script setup lang="ts">
// This component adds mappings for MDX elements to Naive UI components
import { Component, createVNode, defineComponent, h } from 'vue';

import { MDXProvider } from '@mdx-js/vue';
import * as N from 'naive-ui';

// Helper component
const $ = (naiveTag: Component, extraProps: Record<string, unknown> = {}): Component =>
  defineComponent({
    name: `MDXWrapperFor${naiveTag.name}`,
    setup(props, { slots }) {
      console.log(
        `creating node for ${naiveTag.name}; props:`,
        Object.entries(props),
        ' extraProps:',
        Object.entries(extraProps),
        ' slots:',
        Object.entries(slots),
      );
      let defaultSlot;
      if (!slots?.default) {
        defaultSlot = () => [];
      } else if (typeof slots.default === 'function') {
        // already a function, do nothing
        defaultSlot = slots.default;
      } else {
        defaultSlot = () => slots.default!;
      }

      console.log('defaultSlot:', defaultSlot);

      return () => h(naiveTag, { ...props, ...extraProps }, defaultSlot);
    },
  });

const components: Record<string, Component> = {
  // Headings
  h1: $(N.NH1),
  h2: $(N.NH2),
  h3: $(N.NH3),
  h4: $(N.NH4),
  h5: $(N.NH5),
  h6: $(N.NH6),

  // Paragraphs & inline
  p: $(N.NP),
  strong: $(N.NText),
  em: $(N.NText),
  del: $(N.NText),
  inlineCode: $(N.NCode),

  // Links & images
  a: $(N.NA),
  img: $(N.NImage),

  // Lists
  ul: $(N.NUl),
  ol: $(N.NOl),
  li: $(N.NLi),

  // Code blocks
  pre: $(N.NCode),
  code: $(N.NCode),

  // Blockquote, hr, tables
  blockquote: $(N.NBlockquote),
  hr: $(N.NHr),

  table: $(N.NTable),
  thead: $(N.NThead),
  tbody: $(N.NTbody),
  tr: $(N.NTr),
  th: $(N.NTh),
  td: $(N.NTd),

  // Structural fallbacks
  section: $(N.NP),
  header: $(N.NP),
  footer: $(N.NP),
  div: $(N.NP),
};
</script>

<template>
  <MDXProvider :components="components as any">
    <slot />
  </MDXProvider>
</template>
