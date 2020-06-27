<template>
  <section>
    <h5 class="text-h5">
      <strong
        >{{ facility.address.street }}
        {{ facility.address.streetNumber }}</strong
      >
    </h5>
    <h6 class="text-h6">
      {{ facility.address.postalCode }} {{ facility.address.city }}
    </h6>
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
