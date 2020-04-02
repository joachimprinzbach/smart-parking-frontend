<template>
  <v-carousel
    v-if="images"
    height="250"
    hide-delimiter-background
    v-model="carousel"
    :touch="touch"
  >
    <v-carousel-item
      v-for="image in images"
      :key="image"
      eager
      :src="require('../../assets/' + image)"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"

export default defineComponent({
  props: {
    images: Array,
  },
  setup() {
    const carousel = ref(0)

    const touch = {
      left: () => carousel.value--,
      right: () => carousel.value++,
    }

    return { carousel, touch }
  },
})
</script>

<style lang="scss">
@import "../../styles/utilities/all";
div.v-carousel {
  background: $light;
}
</style>
