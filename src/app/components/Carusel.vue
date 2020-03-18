<template>
  <v-carousel v-if="images" height="250" hide-delimiter-background>
    <v-carousel-item v-for="image in images" :key="image" :src="require('../../assets/' + image)"></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    images: Array,
  },
  setup() {
    return {}
  },
})
</script>