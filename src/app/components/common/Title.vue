<template>
  <h1 class="text-h5" v-text="text"></h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "",
    },
  },
})
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 6px;
  margin-bottom: 12px;
}
</style>
