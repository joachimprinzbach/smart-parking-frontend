<template>
  <v-container class="booking-confirmation text-center">
    <v-img max-width="280px" :src="require('../../assets/car.svg')" />
    <h1 class="headline" v-html="$t('booking.confirmation.title')"></h1>
    <h2 class="title" v-html="$t('booking.confirmation.subtitle')"></h2>

    <p class="body-1" v-html="$t('booking.confirmation.receipt.text')"></p>
    <v-btn
      color="primary"
      outlined
      :loading="isRequesting"
      :readonly="isRequesting"
      :disabled="hasRequested"
      @click="requestReceipt()"
    >
      {{ $t("booking.confirmation.receipt.button") }}
    </v-btn>

    <p class="body-1" v-html="$t('booking.confirmation.feedback.text')"></p>
    <v-btn color="primary" outlined target="_blank" :href="feedbackLink">
      {{ $t("booking.confirmation.feedback.button") }}
    </v-btn>

    <v-snackbar top color="success" v-model="snackbarSuccess">
      {{ $t("booking.confirmation.receipt.success") }}
    </v-snackbar>
    <v-snackbar top color="error" v-model="snackbarError">
      {{ $t("booking.confirmation.receipt.error") }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import { api } from "../api"

export default defineComponent({
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    const snackbarSuccess = ref(false)
    const snackbarError = ref(false)
    const isRequesting = ref(false)
    const hasRequested = ref(false)
    const feedbackLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlnDWce1kbgVeoT_x-qBmWjXlsgR9CqTuCAIYWf41WnKQJng/viewform"

    onMounted(async () => {
      AppBar.setTitle("booking.confirmation.appBarTitle")
      AppBar.setCloseButton(() => root.$router.replace({ name: "home" }))
      Browser.setHasUnsavedData(false)
    })

    async function requestReceipt() {
      isRequesting.value = true
      const response = await api.requestReceipt(root.$route.params.id)
      snackbarSuccess.value = response.wasSuccessful
      snackbarError.value = !response.wasSuccessful
      isRequesting.value = false
      hasRequested.value = true
    }

    function navigateToHome() {
      root.$router.replace({ name: "home" })
    }

    return {
      requestReceipt,
      isRequesting,
      hasRequested,
      snackbarSuccess,
      snackbarError,
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
    margin-top: 40px;
  }

  .v-image {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
