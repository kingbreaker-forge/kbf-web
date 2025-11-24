<script setup lang="ts">
import { computed } from 'vue';

import { useDisplay } from 'vuetify';

import BlowupImg from '@/components/BlowupImg.vue';
import { renderAbort } from '@/features/errors';
import { useInventorySlug } from '@/features/inventory';
import { inventoryDatabase } from '@/inventoryDatabase';

const { mdAndUp, lgAndUp } = useDisplay();

const inventorySlug = useInventorySlug();
const currentInventory = computed(() => {
  if (!inventorySlug) {
    throw renderAbort(404, `No inventory slug in page URL`);
  }
  return inventoryDatabase.getSlug(inventorySlug.value);
});

const galleryCols = computed<number>(() => {
  // Special cases for 0, 1, and 2 gallery images
  if (!currentInventory.value?.galleryUrls?.length) {
    return 12;
  }
  if (currentInventory.value?.galleryUrls?.length === 1) {
    return 12;
  }
  if (currentInventory.value?.galleryUrls?.length === 2) {
    return mdAndUp ? 6 : 12;
  }

  // If 3+ gallery images, be responsive
  return lgAndUp.value ? 4 : mdAndUp.value ? 6 : 12;
});
</script>

<template>
  <template v-if="!currentInventory">
    <VAlert type="error">
      This is an inventory layout but has no inventory piece. This should be impossible. Go play the
      lottery.
    </VAlert>
  </template>
  <template v-else>
    <VRow class="title-container">
      <h3 class="text-h3">
        {{ currentInventory.name }}
      </h3>
    </VRow>

    <VRow>
      <VCol :cols="mdAndUp ? 8 : 12" cols-lg="8">
        <BlowupImg
          v-if="currentInventory.coverImageUrl"
          :src="currentInventory.coverImageUrl"
          width="100%"
          max-height="90vh"
        />
        <VSheet
          v-else
          elevation="3"
          min-height="5rem"
          class="border d-flex justify-center align-center fill-height"
          max-height="90vh"
        >
          Image missing
        </VSheet>
      </VCol>
      <VCol :cols="mdAndUp ? 4 : 12" cols-lg="4">
        <VSheet elevation="3">
          <VTable>
            <tbody>
              <tr>
                <td>Serial Number</td>
                <td>
                  <code>{{ currentInventory.serial }}</code>
                </td>
              </tr>

              <tr v-if="currentInventory.tags && currentInventory.tags.length">
                <td>Tags</td>
                <td>
                  <VChip v-for="tag of currentInventory.tags" :key="tag" variant="outlined">
                    {{ tag }}
                  </VChip>
                </td>
              </tr>

              <tr>
                <td>Status</td>
                <td v-if="currentInventory.status == 'unknown'">
                  <VChip color="warning">Unknown</VChip>
                </td>
                <td v-if="currentInventory.status == 'wip'">
                  <VChip color="info">WIP</VChip>
                </td>
                <td v-if="currentInventory.status == 'abandoned'">
                  <VChip color="error">Abandoned</VChip>
                </td>
                <td v-if="currentInventory.status == 'stuck'">
                  <VChip color="secondary">Stuck</VChip>
                </td>
                <td v-if="currentInventory.status == 'completed'">
                  <VChip color="success">Completed</VChip>
                </td>
              </tr>

              <tr v-if="currentInventory.startedDate">
                <td>Started Date</td>
                <td>
                  <VNoSsr>{{ currentInventory.startedDate.toLocaleDateString() }}</VNoSsr>
                </td>
              </tr>
              <tr v-if="currentInventory.completedDate">
                <td>Completed Date</td>
                <td>
                  <VNoSsr>{{ currentInventory.completedDate.toLocaleDateString() }}</VNoSsr>
                </td>
              </tr>
              <tr v-if="currentInventory.soldDate">
                <td>Sold Date</td>
                <td>
                  <VNoSsr>{{ currentInventory.soldDate.toLocaleDateString() }}</VNoSsr>
                </td>
              </tr>
            </tbody>

            <!-- Blade-specific stuff-->
            <tbody v-if="currentInventory.bladeSpecs">
              <tr>
                <td><h3 class="text-h5">Blade Specs</h3></td>
                <td></td>
              </tr>
              <tr>
                <td>Blade Material</td>
                <td>{{ currentInventory.bladeSpecs.bladeMaterial }}</td>
              </tr>
              <tr>
                <td>Handle Material</td>
                <td>{{ currentInventory.bladeSpecs.handleMaterial }}</td>
              </tr>
              <tr v-if="currentInventory.bladeSpecs.otherMaterials">
                <td>Other Materials</td>
                <td>{{ currentInventory.bladeSpecs.otherMaterials }}</td>
              </tr>

              <tr>
                <td>Construction</td>
                <td v-if="currentInventory.bladeSpecs.construction == 'forged-to-shape'">
                  <VIcon icon="mdi-hammer" /> Forged to Shape
                </td>
                <td v-if="currentInventory.bladeSpecs.construction == 'forged-and-ground'">
                  <VIcon icon="mdi-knife" /> Forged and Ground
                </td>
                <td v-if="currentInventory.bladeSpecs.construction == 'stock-removal'">
                  <VIcon icon="mdi-blender" /> Stock Removal
                </td>
                <td v-if="currentInventory.bladeSpecs.construction == 'other'">
                  <VIcon icon="mdi-account-hard-hat" /> Other
                </td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.bladeLengthCm">
                <td>Blade Length</td>
                <td>{{ currentInventory.bladeSpecs.bladeLengthCm }} cm</td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.bladeWidthCm">
                <td>Blade Width</td>
                <td>{{ currentInventory.bladeSpecs.bladeWidthCm }} cm</td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.handleLengthCm">
                <td>Handle Length</td>
                <td>{{ currentInventory.bladeSpecs.handleLengthCm }} cm</td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.overallLengthCm">
                <td>Overall Length</td>
                <td>{{ currentInventory.bladeSpecs.overallLengthCm }} cm</td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.massGrams">
                <td>Mass/Weight</td>
                <td>{{ currentInventory.bladeSpecs.massGrams }} g</td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.quench">
                <td>Quench</td>
                <td>{{ currentInventory.bladeSpecs.quench }}</td>
              </tr>

              <tr v-if="currentInventory.bladeSpecs.hardnessHrc">
                <td>Hardness</td>
                <td>{{ currentInventory.bladeSpecs.hardnessHrc }} (HRC)</td>
              </tr>
            </tbody>
          </VTable>
        </VSheet>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <VSheet elevation="3" rounded="lg" class="pa-5">
          <slot />
        </VSheet>
      </VCol>
    </VRow>

    <VRow>
      <VCol
        v-for="galleryUrl of currentInventory.galleryUrls"
        :key="galleryUrl"
        :cols="galleryCols"
        height="8rem"
      >
        <BlowupImg :src="galleryUrl" class="fill-height" cover />
      </VCol>
    </VRow>
  </template>
</template>

<style scoped>
.title-container {
  padding: 1rem 3rem 1rem 3rem;
}
</style>
