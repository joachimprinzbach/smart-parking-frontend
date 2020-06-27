<template>
  <v-container class="booking-confirmation text-center">
    <v-img max-width="280px" :src="require('../../assets/car.svg')" />
    <h1 class="text-h6" v-html="$t('booking.confirmation.title')"></h1>
    <!-- <h2 class="subtitle-1" v-html="$t('booking.confirmation.subtitle')"></h2> -->

    <p class="body-1" v-html="$t('booking.confirmation.receipt.text')"></p>
    <v-btn color="primary" outlined @click="navigateToReceipt()">
      {{ $t("booking.confirmation.receipt.button") }}
    </v-btn>

    <p class="body-1" v-html="$t('booking.confirmation.feedback.text')"></p>
    <v-btn color="primary" outlined target="_blank" :href="feedbackLink">
      {{ $t("booking.confirmation.feedback.button") }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"

export default defineComponent({
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    const feedbackLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSdlnDWce1kbgVeoT_x-qBmWjXlsgR9CqTuCAIYWf41WnKQJng/viewform"

    onMounted(async () => {
      AppBar.setTitle("booking.confirmation.appBarTitle")
      AppBar.setCloseButton(() => root.$router.replace({ name: "home" }))
      Browser.setHasUnsavedData(false)
    })

    function navigateToReceipt() {
      root.$router.replace({
        name: "booking.detail",
        params: { id: root.$route.params.id },
      })
    }

    function navigateToHome() {
      root.$router.replace({ name: "home" })
    }

    return {
      navigateToReceipt,
      feedbackLink,
      navigateToHome,
    }
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
    margin-bottom: 10px;
  }

  p.body-1 {
    margin-top: 25px;
  }

  .v-image {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
