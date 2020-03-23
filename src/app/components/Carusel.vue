<template>
  <v-carousel v-if="images" height="250" hide-delimiter-background>
    <v-carousel-item
      v-for="image in images"
      :key="image"
      eager
      :src="require('../../assets/' + image)"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    images: Array,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
@import "../../styles/utilities/all";
div.v-carousel {
  background: $light;
}
</style>
