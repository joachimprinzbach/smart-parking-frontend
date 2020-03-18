<template>
  <section>
    <h2>{{parkingObject.street}} {{parkingObject.streetNumber}}</h2>
    <p>
      <strong>{{parkingObject.postalCode}} {{parkingObject.city}}</strong>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    parkingObject: Object,
  },
  setup() {
    return {}
  },
})
</script>