<template>
  <v-container class="booking-confirmation text-center">
    <h1 class="display-1" v-html="$t('booking.confirmation.title')"></h1>
    <v-img max-width="280px" :src="require('../../assets/car.svg')" />
    <h2 class="title" v-html="$t('booking.confirmation.subtitle')"></h2>
    <p class="subtitle-2" v-html="$t('booking.confirmation.receitText')"></p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle("booking.confirmation.appBarTitle")
      setHasBackButton(true)
    })

    return {}
  },
})
</script>

<style lang="scss">
.booking-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 40px;
  }
  
  h2 {
    margin-bottom: 20px;
  }

  .v-image {
    margin-bottom: 40px;
  }
}
</style>
