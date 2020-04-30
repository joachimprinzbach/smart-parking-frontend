<template>
  <v-img width="150px" :src="image"></v-img>
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
