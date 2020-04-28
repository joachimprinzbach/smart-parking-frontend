<template>
  <div>
    <v-carousel
      v-if="building.images.carousel"
      height="250"
      hide-delimiter-background
      v-model="carousel"
      :touch="touch"
    >
      <v-carousel-item
        v-for="image in building.images.carousel"
        :key="image"
        eager
        :src="image | firebaseStorage(building.images.folderName)"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"

export default defineComponent({
  props: {
    building: Object,
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
