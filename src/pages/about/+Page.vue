<script setup lang="ts">
import { VImg, VSheet } from 'vuetify/components';

import HalloweenForging from './halloween-forging.jpg';
</script>

<template>
  <h1 class="text-h1">About Kingbreaker Forge</h1>
  <VSheet elevated elevation="5" class="flex pa-3 ma-3 text-body-1 v-clearfix">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor ipsum eget ipsum
      vestibulum, sed consequat purus volutpat. Fusce condimentum justo et sapien ultricies
      condimentum. In hac habitasse platea dictumst. Praesent tempor dolor aliquet, scelerisque
      neque in, finibus libero. Curabitur sed neque lacus. Etiam a turpis nunc. Etiam erat nisi,
      placerat eget fermentum quis, dictum ut quam.
    </p>

    <VImg :src="HalloweenForging" class="d-block w-75 float-md-right w-md-50" />

    <p>
      Vivamus ut purus bibendum, auctor quam vel, molestie lorem. Quisque imperdiet leo non lacus
      varius laoreet. Sed et varius velit. Nullam vestibulum quam nunc, ut semper nulla efficitur
      et. Sed a convallis lorem, rutrum sagittis dui. Nulla cursus fringilla efficitur. Cras et
      justo eget lacus rutrum ornare. In et eleifend ipsum. Vivamus pretium placerat congue. Nam
      varius, nunc sed egestas faucibus, quam tortor sollicitudin urna, nec suscipit eros arcu vitae
      quam. Aliquam tristique justo a turpis lobortis consequat. Quisque vel tincidunt dui. Maecenas
      venenatis ante enim.
    </p>
    <p>
      Suspendisse vitae pellentesque justo, at blandit est. Maecenas quis nisl nisl. Phasellus
      venenatis est id mi pretium, at rhoncus sapien pulvinar. In dictum sodales nisi at aliquam.
      Etiam interdum aliquam mi, vel rutrum ligula viverra eu. Sed tempor pellentesque rhoncus.
      Proin fermentum, lacus sed vestibulum mollis, nunc sem porta dui, non volutpat risus sem eget
      lorem. Nullam lacinia elit neque, fermentum pellentesque nisi elementum eu. Nam vel luctus
      justo. Quisque sapien dolor, mattis id rutrum at, ultrices a purus. Aliquam placerat lobortis
      massa in lacinia.
    </p>

    <div style="clear: both"></div>
  </VSheet>
</template>

<style scoped lang="scss">
img {
  margin: 3rem;
}
</style>
