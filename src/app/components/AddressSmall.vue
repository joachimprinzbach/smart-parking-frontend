<template>
  <section>
    {{ facility.address.street }} {{ facility.address.streetNumber }}<br />
    {{ facility.address.postalCode }} {{ facility.address.city }}
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
