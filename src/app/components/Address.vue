<template>
  <section>
    <h2 class="headline">
      <strong>{{ facility.address.street }} {{ facility.address.streetNumber }}</strong>
    </h2>
    <p class="title">{{ facility.address.postalCode }} {{ facility.address.city }}</p>
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
