<template>
  <h5 class="text-h5">{{ text }}</h5>
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
h5 {
  margin-bottom: 6px;
}
</style>
