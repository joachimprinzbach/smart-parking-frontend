<template>
  <v-container v-if="isLoading">
    <h1 class="heading">{{ $t("booking.isLoading.title") }}</h1>
    <h2 class="body-1">{{ $t("booking.isLoading.text") }}</h2>
    <br />
    <br />
    <br />
    <div class="d-flex justify-center">
      <v-progress-circular
        :size="64"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>
