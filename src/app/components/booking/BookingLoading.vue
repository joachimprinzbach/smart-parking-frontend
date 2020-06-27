<template>
  <section v-if="isLoading">
    <v-skeleton-loader
      class="mx-auto skeleton-carusel"
      type="image"
      style="margin-bottom: 0"
    ></v-skeleton-loader>
    <v-container>
      <v-skeleton-loader
        class="mx-auto skeleton-content"
        type="heading, text, button, text"
      ></v-skeleton-loader>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
