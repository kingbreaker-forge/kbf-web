<template>
  <p v-bind="$props" class="text-body-1">
    <slot />
  </p>
</template>

<style scoped>
p {
  margin-block: 0.5rem;
}
</style>
