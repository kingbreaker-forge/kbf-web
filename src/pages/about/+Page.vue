<script setup lang="ts">
import { VImg, VSheet } from 'vuetify/components';

import HalloweenForging from './halloween-forging.jpg';
</script>

<template>
  <VRow>
    <VCol>
      <h1 class="text-h3">About Kingbreaker Forge</h1>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" md="6">
      <VSheet class="pa-3 mb-3 rounded-lg" elevation="2">
        <h2 class="text-h4">Who</h2>
        <p>Hi! My name is Filip. I am Kingbreaker Forge.</p>
        <p>
          A software engineer by trade (and a too-many-hobbies enthusiast in my free time), I got
          into the blacksmithing hobby around 2022. I have no formal training; everything I know is
          self-taught through books, videos, tips from others in the community, and trial-and-error
          in the forge. I thrive on experimentation and pushing the envelope.
        </p>

        <h2 class="text-h4">What</h2>
        <p>
          Kingbreaker Forge is a big name for a small forge. Its focus is on
          <strong>bladesmithing</strong> &mdash; primarily knives. These are made in a
          historically-conscious fashion, with the goal of creating unique, traditional, and high
          performance blades.
        </p>
        <p>This website is a place for you to see what I'm up to!</p>

        <h2 class="text-h4">Where</h2>
        <p>Kingbreaker Forge is based in a backyard in the suburbs of Manassas, Virginia, USA.</p>
      </VSheet>
    </VCol>
    <VCol>
      <VImg cover :src="HalloweenForging" class="rounded-lg" />
    </VCol>
  </VRow>
</template>
