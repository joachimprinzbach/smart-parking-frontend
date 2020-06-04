<template>
  <section>
    <div v-if="map" style="margin-bottom: 16px">
      <h3 class="title">{{ $t("facility.detail.location") }}</h3>
      <v-card target="_blank" :href="navigationLink" elevation="0">
        <v-img :max-height="220" :src="image"></v-img>
      </v-card>
    </div>
    <v-btn
      block
      color="primary"
      outlined
      target="_blank"
      :href="navigationLink"
      >{{ $t("facility.detail.navigate") }}</v-btn
    >
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

export default defineComponent({
  props: {
    map: {
      type: Boolean,
      default: false,
    },
    image: String,
    street: String,
    streetNumber: String,
    postalCode: String,
    city: String,
  },
  setup({ street, streetNumber, postalCode, city }) {
    const navigationLink = computed(() =>
      encodeURI(
        `https://maps.google.com/?q=${street} ${streetNumber},${postalCode} ${city}`,
      ),
    )

    return {
      navigationLink,
    }
  },
})
</script>
