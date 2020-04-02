<template>
  <p :class="large ? 'body-2' : 'caption'" v-html="content"></p>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    content: String,
    large: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import "../../styles/utilities/all";

p {
  color: $gray;
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
