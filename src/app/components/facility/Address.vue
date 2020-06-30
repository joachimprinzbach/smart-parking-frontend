<template>
  <section>
    <p class="text-h5" style="margin: 0">
      <strong
        >{{ facility.address.street }}
        {{ facility.address.streetNumber }}</strong
      >
    </p>
    <p class="text-h6">
      {{ facility.address.postalCode }} {{ facility.address.city }}
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    facility: Object,
  },
})
</script>
