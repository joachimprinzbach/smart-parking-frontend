<template>
  <section>
    <h2 class="headline">
      <strong>{{ facility.street }} {{ facility.streetNumber }}</strong>
    </h2>
    <p class="title">{{ facility.postalCode }} {{ facility.city }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    facility: Object,
  },
  setup() {
    return {}
  },
})
</script>
