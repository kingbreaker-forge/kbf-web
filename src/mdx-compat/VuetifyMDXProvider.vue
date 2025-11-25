<script setup lang="ts">
// This component adds mappings for MDX elements to Vuetify components
import { type Component } from 'vue';

import { MDXProvider } from '@mdx-js/vue';

import * as C from './components';

const components = {
  // Headings
  h1: C.VMDX_H1,
  h2: C.VMDX_H2,
  h3: C.VMDX_H3,
  h4: C.VMDX_H4,
  h5: C.VMDX_H5,
  h6: C.VMDX_H6,

  // // Paragraphs & inline
  p: C.VMDX_P,
  strong: C.VMDX_Strong,
  em: C.VMDX_Em,
  del: C.VMDX_Del,
  code: C.VMDX_CodeInline,
  inlineCode: C.VMDX_CodeInline,

  // Links & images
  a: C.VMDX_A,
  img: C.VMDX_Img,

  // Lists
  ul: C.VMDX_Ul,
  ol: C.VMDX_Ol,
  li: C.VMDX_Li,

  // Code blocks
  pre: C.VMDX_CodeBlock,

  // Blockquote, hr, tables
  blockquote: C.VMDX_Blockquote,
  hr: C.VMDX_Hr,
  table: C.VMDX_Table,
  thead: C.VMDX_Thead,
  tbody: C.VMDX_Tbody,
  tr: C.VMDX_Tr,
  th: C.VMDX_Th,
  td: C.VMDX_Td,

  // Structural fallbacks
  section: C.VMDX_Section,
  header: C.VMDX_Header,
  footer: C.VMDX_Footer,
  div: C.VMDX_Div,
} satisfies Record<string, Component>;
</script>
<template>
  <MDXProvider :components="components">
    <slot />
  </MDXProvider>
</template>
