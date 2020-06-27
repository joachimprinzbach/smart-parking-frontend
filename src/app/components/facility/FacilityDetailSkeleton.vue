<template>
  <section>
    <v-skeleton-loader
      class="mx-auto skeleton-carusel"
      type="image"
    ></v-skeleton-loader>
    <v-container>
      <v-skeleton-loader
        class="mx-auto skeleton-content"
        type="heading, text, button, text, heading, text, text"
      ></v-skeleton-loader>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
export default defineComponent({
  setup: () => {
    return {}
  },
})
</script>

<style lang="scss">
.skeleton-carusel {
  .v-skeleton-loader__image {
    height: 250px;
  }
}
.skeleton-content {
  .v-skeleton-loader__heading {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .v-skeleton-loader__text {
    width: 200px;
    margin-bottom: 48px;
  }
  .v-skeleton-loader__button {
    margin-bottom: 25px;
    width: 100%;
  }
  .v-skeleton-loader__image {
    margin-bottom: 25px;
    height: 127px;
  }
}
</style>
