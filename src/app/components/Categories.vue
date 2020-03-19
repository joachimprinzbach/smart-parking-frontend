<template>
  <v-img width="150px" :src="require('../../assets/' + image)"></v-img>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    image: String,
  },
  setup() {
    return {}
  },
})
</script>
