<template>
  <section class="banner">
    <h3 class="text-h6">{{ $t("home.first") }}</h3>
    <h3 class="text-h6">{{ $t("home.second") }}</h3>
    <h3 class="text-h6">{{ $t("home.third") }}</h3>
    <v-img
      class="payment-methods"
      :src="require('@/assets/payment-methods.svg')"
    ></v-img>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({})
</script>

<style lang="scss">
.banner {
  padding: 0 12px;
  h3 {
    margin-bottom: 5px;
    font-weight: 400;
  }
}

.payment-methods {
  max-width: 120px;
  margin-left: 25px;
  margin-bottom: 15px;
}
</style>
