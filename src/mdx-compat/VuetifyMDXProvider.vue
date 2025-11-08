<script setup lang="ts">
// This component adds mappings for MDX elements to Vuetify components
import type { Component } from 'vue';

import { MDXProvider } from '@mdx-js/vue';

import * as C from './components';

const components = {
  // Headings
  h1: C.VH1,
  h2: C.VH2,
  h3: C.VH3,
  h4: C.VH4,
  h5: C.VH5,
  h6: C.VH6,

  // // Paragraphs & inline
  p: C.VP,
  strong: C.VStrong,
  em: C.VEm,
  del: C.VDel,
  code: C.VCodeInline,
  inlineCode: C.VCodeInline,

  // Links & images
  a: C.VA,
  img: C.VMDXImg,

  // Lists
  ul: C.VUl,
  ol: C.VOl,
  li: C.VLi,

  // Code blocks
  pre: C.VCodeBlock,

  // Blockquote, hr, tables
  blockquote: C.VBlockquote,
  hr: C.VHr,
  table: C.VTable,
  thead: C.VThead,
  tbody: C.VTbody,
  tr: C.VTr,
  th: C.VTh,
  td: C.VTd,

  // Structural fallbacks
  section: C.VSection,
  header: C.VHeader,
  footer: C.VFooter,
  div: C.VDiv,
} satisfies Record<string, Component>;
</script>
<template>
  <MDXProvider :components="components">
    <slot />
  </MDXProvider>
</template>
