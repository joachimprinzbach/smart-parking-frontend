<template>
  <h2 class="text-h6">
    <slot><span v-html="text"></span></slot>
  </h2>
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
h2.text-h6 {
  font-size: 1.1rem !important;
  font-weight: 400 !important;
  margin-bottom: 8px !important;
}
</style>
