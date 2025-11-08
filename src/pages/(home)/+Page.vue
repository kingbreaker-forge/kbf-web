<script setup lang="ts">
import { useTheme } from 'vuetify';
import { VBtn } from 'vuetify/components';

const theme = useTheme();
</script>

<template>
  <h1 class="text-h1">Home Page</h1>
  <p>Welcome to the home page!</p>
  <p>This is a button rendered in Vue: <VBtn @click="() => theme.toggle()">Click me!</VBtn></p>
  <a href="/mdxtest"> Go to mdxtest</a>
</template>
