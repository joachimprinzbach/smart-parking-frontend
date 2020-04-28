<template>
  <section>
    <h3 class="title">{{ $t("building.detail.openingHours") }}</h3>
    <p class="body-2" v-html="text"></p>
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
