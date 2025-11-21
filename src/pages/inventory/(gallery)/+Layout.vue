<script setup lang="ts">
import { computed } from 'vue';

import { useDisplay } from 'vuetify';

import BlowupImg from '@kb-web/components/BlowupImg.vue';
import useInventory from '@kb-web/useInventory';

const { mdAndUp, lgAndUp } = useDisplay();

const currentInventoryPiece = useInventory();

const galleryCols = computed<number>(() => {
  // Special cases for 0, 1, and 2 gallery images
  if (!currentInventoryPiece.value?.galleryUrls?.length) {
    return 12;
  }
  if (currentInventoryPiece.value?.galleryUrls?.length === 1) {
    return 12;
  }
  if (currentInventoryPiece.value?.galleryUrls?.length === 2) {
    return mdAndUp ? 6 : 12;
  }

  // If 3+ gallery images, be responsive
  return lgAndUp ? 4 : mdAndUp ? 6 : 12;
});
</script>

<template>
  <template v-if="!currentInventoryPiece">
    <VAlert type="error">
      This is an inventory layout but has no inventory piece. This should be impossible. Go play the
      lottery.
    </VAlert>
  </template>
  <template v-else>
    <VRow class="title-container">
      <h3 class="text-h3">
        {{ currentInventoryPiece.name }}
      </h3>
    </VRow>

    <VRow>
      <VCol :cols="mdAndUp ? 8 : 12" cols-lg="8">
        <BlowupImg
          v-if="currentInventoryPiece.coverImageUrl"
          :src="currentInventoryPiece.coverImageUrl"
          width="100%"
        />
        <VSheet
          v-else
          elevation="3"
          min-height="5rem"
          class="border d-flex justify-center align-center fill-height"
        >
          Image missing
        </VSheet>
      </VCol>
      <VCol :cols="mdAndUp ? 4 : 12" cols-lg="4">
        <VSheet elevation="3">
          <VTable>
            <tbody>
              <tr>
                <td>Series</td>
                <td>{{ currentInventoryPiece.series }}</td>
              </tr>

              <tr>
                <td>Serial Number</td>
                <td>
                  <code>{{ currentInventoryPiece.serial }}</code>
                </td>
              </tr>

              <tr v-if="currentInventoryPiece.tags && currentInventoryPiece.tags.length">
                <td>Tags</td>
                <td>
                  <VChip v-for="tag of currentInventoryPiece.tags" :key="tag" variant="outlined">
                    {{ tag }}
                  </VChip>
                </td>
              </tr>

              <tr>
                <td>Status</td>
                <td v-if="currentInventoryPiece.status == 'unknown'">
                  <VChip color="warning">Unknown</VChip>
                </td>
                <td v-if="currentInventoryPiece.status == 'wip'">
                  <VChip color="info">WIP</VChip>
                </td>
                <td v-if="currentInventoryPiece.status == 'abandoned'">
                  <VChip color="error">Abandoned</VChip>
                </td>
                <td v-if="currentInventoryPiece.status == 'wip'">
                  <VChip color="secondary">WIP</VChip>
                </td>
                <td v-if="currentInventoryPiece.status == 'completed'">
                  <VChip color="success">Completed</VChip>
                </td>
              </tr>

              <tr v-if="currentInventoryPiece.startedDate">
                <td>Started Date</td>
                <td>{{ currentInventoryPiece.startedDate.toLocaleDateString() }}</td>
              </tr>
              <tr v-if="currentInventoryPiece.startedDate">
                <td>Started Date</td>
                <td>{{ currentInventoryPiece.startedDate.toLocaleDateString() }}</td>
              </tr>
              <tr v-if="currentInventoryPiece.startedDate">
                <td>Started Date</td>
                <td>{{ currentInventoryPiece.startedDate.toLocaleDateString() }}</td>
              </tr>
            </tbody>

            <!-- Blade-specific stuff-->
            <tbody v-if="currentInventoryPiece.bladeSpecs">
              <tr>
                <td><h3 class="text-h5">Blade Specs</h3></td>
                <td></td>
              </tr>
              <tr>
                <td>Blade Material</td>
                <td>{{ currentInventoryPiece.bladeSpecs.bladeMaterial }}</td>
              </tr>
              <tr>
                <td>Handle Material</td>
                <td>{{ currentInventoryPiece.bladeSpecs.handleMaterial }}</td>
              </tr>
              <tr v-if="currentInventoryPiece.bladeSpecs.otherMaterials">
                <td>Other Materials</td>
                <td>{{ currentInventoryPiece.bladeSpecs.otherMaterials }}</td>
              </tr>

              <tr>
                <td>Construction</td>
                <td v-if="currentInventoryPiece.bladeSpecs.construction == 'forged-to-shape'">
                  <VIcon icon="mdi-hammer" /> Forged to Shape
                </td>
                <td v-if="currentInventoryPiece.bladeSpecs.construction == 'forged-and-ground'">
                  <VIcon icon="mdi-knife" /> Forged and Ground
                </td>
                <td v-if="currentInventoryPiece.bladeSpecs.construction == 'stock-removal'">
                  <VIcon icon="mdi-blender" /> Stock Removal
                </td>
                <td v-if="currentInventoryPiece.bladeSpecs.construction == 'other'">
                  <VIcon icon="mdi-account-hard-hat" /> Other
                </td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.bladeLengthCm">
                <td>Blade Length</td>
                <td>{{ currentInventoryPiece.bladeSpecs.bladeLengthCm }} cm</td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.bladeWidthCm">
                <td>Blade Width</td>
                <td>{{ currentInventoryPiece.bladeSpecs.bladeWidthCm }} cm</td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.handleLengthCm">
                <td>Handle Length</td>
                <td>{{ currentInventoryPiece.bladeSpecs.handleLengthCm }} cm</td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.overallLengthCm">
                <td>Overall Length</td>
                <td>{{ currentInventoryPiece.bladeSpecs.overallLengthCm }} cm</td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.massGrams">
                <td>Mass/Weight</td>
                <td>{{ currentInventoryPiece.bladeSpecs.massGrams }} g</td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.quench">
                <td>Quench</td>
                <td>{{ currentInventoryPiece.bladeSpecs.quench }}</td>
              </tr>

              <tr v-if="currentInventoryPiece.bladeSpecs.hardnessHrc">
                <td>Hardness</td>
                <td>{{ currentInventoryPiece.bladeSpecs.hardnessHrc }} (HRC)</td>
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
        v-for="galleryUrl of currentInventoryPiece.galleryUrls"
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
