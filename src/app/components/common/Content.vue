<template>
  <p :class="small ? 'text-body-2' : 'text-body-1'">
    <slot><span v-html="text"></span></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "",
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped></style>
