<script setup lang="ts">
import { reactive, ref } from 'vue';

import { mdiEmail, mdiPhone, mdiWhatsapp } from '@mdi/js';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();

const phoneNumberBase64 = 'KzEtNTcxLTM1NC04MDg4Cg==';
const emailAddressBase64 = 'ZmlsaXBAa2luZ2JyZWFrZXJmb3JnZS5jb20K';

const phoneNumber = atob(phoneNumberBase64).trim();
const telHref = `tel:${phoneNumber.replace(/[\s()-]/g, '')}`;
const emailAddress = atob(emailAddressBase64).trim();
const mailtoHref = `mailto:${emailAddress}`;
const whatsappHref = `https://wa.me/${phoneNumber.replace(/[\s()-]/g, '')}`;

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const verification = reactive({
  numberOne: randomNumber(),
  numberTwo: randomNumber(),
  verified: false,
});

const userAnswer = ref('');
const handleVerificationAnswer = () => {
  const answer = parseInt(userAnswer.value);
  if (answer === verification.numberOne + verification.numberTwo) {
    verification.verified = true;
  } else {
    verification.numberOne = randomNumber();
    verification.numberTwo = randomNumber();
    alert('Incorrect answer, please try again.');
  }
};
</script>

<template>
  <VCard tag="address" class="pa-3" elevation="5">
    <VCardTitle>Contact Me</VCardTitle>
    <VCardText>
      <p>If you'd like to reach out, you can contact me via:</p>

      <VList variant="elevated" lines="one" density="comfortable">
        <VListItem>
          <template #prepend>
            <VIcon :icon="mdiPhone" />
          </template>
          <VListItemTitle>
            <VRow>
              <VCol cols="auto" class="text-body-1 d-flex align-center"> Phone: </VCol>
              <VCol>
                <a v-if="verification.verified" :href="telHref">{{ phoneNumber }}</a>
                <VSkeletonLoader v-else type="text" />
              </VCol>
            </VRow>
          </VListItemTitle>
        </VListItem>

        <VListItem>
          <template #prepend>
            <VIcon :icon="mdiEmail" />
          </template>
          <VListItemTitle>
            <VRow>
              <VCol cols="auto" class="text-body-1 d-flex align-center"> Email: </VCol>
              <VCol>
                <a v-if="verification.verified" :href="mailtoHref">{{ emailAddress }}</a>
                <VSkeletonLoader v-else type="text" />
              </VCol>
            </VRow>
          </VListItemTitle>
        </VListItem>

        <VListItem>
          <template #prepend>
            <VIcon :icon="mdiWhatsapp" />
          </template>
          <VListItemTitle>
            <VRow>
              <VCol cols="auto" class="text-body-1 d-flex align-center"> Whatsapp: </VCol>
              <VCol>
                <a v-if="verification.verified" :href="whatsappHref">{{ phoneNumber }}</a>
                <VSkeletonLoader v-else type="text" />
              </VCol>
            </VRow>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
    <VCardActions v-if="!verification.verified">
      <VRow class="d-flex justify-end">
        <VCol class="d-flex align-center">
          To prevent spam, please solve this simple math problem to reveal my contact information:
        </VCol>
        <VCol cols="auto" class="d-flex align-center">
          <strong class="mx-2">
            {{ verification.numberOne }} + {{ verification.numberTwo }} =
          </strong>
          <VTextField
            v-model="userAnswer"
            type="number"
            dense
            placeholder="0"
            hide-details
            style="max-width: 10rem"
          />

          <VBtn class="ml-2" @click="() => handleVerificationAnswer()">Verify</VBtn>
        </VCol>
      </VRow>
    </VCardActions>
  </VCard>
</template>
