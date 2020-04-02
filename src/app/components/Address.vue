<template>
  <section>
    <h2 class="headline"><strong>{{ parkingObject.street }} {{ parkingObject.streetNumber }}</strong></h2>
    <p class="title">{{ parkingObject.postalCode }} {{ parkingObject.city }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    parkingObject: Object,
  },
  setup() {
    return {}
  },
})
</script>
