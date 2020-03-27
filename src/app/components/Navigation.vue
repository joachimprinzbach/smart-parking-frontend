<template>
  <section>
    <div v-if="map">
      <v-card target="_blank" :href="navigationLink">
        <v-img
          :max-height="220"
          :src="require('../../assets/' + image)"
        ></v-img>
      </v-card>
      <br />
    </div>
    <v-btn
      block
      color="primary"
      outlined
      target="_blank"
      :href="navigationLink"
      >{{ $t("object.detail.navigate") }}</v-btn
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
    return {
      navigationLink: computed(() =>
        encodeURI(
          `https://maps.google.com/?q=${street} ${streetNumber},${postalCode} ${city}`,
        ),
      ),
    }
  },
})
</script>
