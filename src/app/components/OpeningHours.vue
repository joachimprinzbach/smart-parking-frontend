<template>
  <section>
    <h3>{{ $t("object.detail.openingHours") }}</h3>
    <p v-html="text"></p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    text: String,
  },
  setup() {
    return {}
  },
})
</script>
