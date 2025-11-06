<script setup lang="ts">
// This component adds mappings for MDX elements to Naive UI components
import { MDXProvider } from '@mdx-js/vue';
import { MDXComponents } from 'mdx/types';
import * as N from 'naive-ui';

const components = {
  // Headings
  h1: N.NH1,
  h2: N.NH2,
  h3: N.NH3,
  h4: N.NH4,
  h5: N.NH5,
  h6: N.NH6,

  // Paragraphs & inline
  p: N.NP,
  strong: N.NText,
  em: N.NText,
  del: N.NText,
  inlineCode: N.NCode,

  // Links & images

  a: N.NA,
  img: N.NImage,

  // Lists
  ul: N.NUl,
  ol: N.NOl,
  li: N.NLi,

  // Code blocks
  pre: N.NCode,
  code: N.NCode,

  // Blockquote, hr, tables
  blockquote: N.NBlockquote,
  hr: N.NHr,

  table: N.NTable,
  thead: N.NThead,
  tbody: N.NTbody,
  tr: N.NTr,
  th: N.NTh,
  td: N.NTd,

  // Structural fallbacks
  section: N.NP,
  header: N.NP,
  footer: N.NP,
  div: N.NP,
} satisfies MDXComponents;
</script>

<template>
  <MDXProvider :components="components">
    <slot />
  </MDXProvider>
</template>
