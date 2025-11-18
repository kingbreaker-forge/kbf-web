<script setup lang="ts">
import FaviconSVG from '@kb-web/assets/favicon/favicon.svg';
import FaviconPNG16 from '@kb-web/assets/favicon/gen/favicon-16.png';
import FaviconPNG32 from '@kb-web/assets/favicon/gen/favicon-32.png';
import FaviconPNG48 from '@kb-web/assets/favicon/gen/favicon-48.png';
import FaviconPNG64 from '@kb-web/assets/favicon/gen/favicon-64.png';
import FaviconPNG128 from '@kb-web/assets/favicon/gen/favicon-128.png';
import FaviconPNG256 from '@kb-web/assets/favicon/gen/favicon-256.png';
import FaviconPNG512 from '@kb-web/assets/favicon/gen/favicon-512.png';
import FaviconICO from '@kb-web/assets/favicon/gen/favicon.ico';
</script>

<template>
  <head>
    <link rel="icon" type="image/svg+xml" :href="FaviconSVG" sizes="any" />
    <link rel="icon" type="image/x-icon" :href="FaviconICO" sizes="any" />
    <link rel="icon" type="image/png" :href="FaviconPNG16" sizes="16x16" />
    <link rel="icon" type="image/png" :href="FaviconPNG32" sizes="32x32" />
    <link rel="icon" type="image/png" :href="FaviconPNG48" sizes="48x48" />
    <link rel="icon" type="image/png" :href="FaviconPNG64" sizes="64x64" />
    <link rel="icon" type="image/png" :href="FaviconPNG128" sizes="128x128" />
    <link rel="icon" type="image/png" :href="FaviconPNG256" sizes="256x256" />
    <link rel="icon" type="image/png" :href="FaviconPNG512" sizes="512x512" />
  </head>
</template>
