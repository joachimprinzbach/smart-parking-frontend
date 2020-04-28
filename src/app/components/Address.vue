<template>
  <section>
    <h2 class="headline">
      <strong>{{ building.street }} {{ building.streetNumber }}</strong>
    </h2>
    <p class="title">{{ building.postalCode }} {{ building.city }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    building: Object,
  },
  setup() {
    return {}
  },
})
</script>
