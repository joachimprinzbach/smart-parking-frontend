<template>
  <v-app>
    <AppBar />

    <v-snackbar
      top
      color="success"
      v-model="hasReservationCancelSnackbar"
      :multi-line="'multi-line'"
    >
      {{ $t("booking.reservation.snackbar.text") }}
      <v-btn color="white" text @click="hideReservationCancelSnackbar">
        {{ $t("common.button.close") }}
      </v-btn>
    </v-snackbar>

    <v-content>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useSnackbar } from "@/app/reactive/snackbar.state"
import AppBar from "@/app/components/AppBar.vue"
import Footer from "@/app/components/Footer.vue"

export default defineComponent({
  components: {
    AppBar,
    Footer,
  },
  setup() {
    const {
      hasReservationCancelSnackbar,
      hideReservationCancelSnackbar,
    } = useSnackbar()
    return {
      hasReservationCancelSnackbar,
      hideReservationCancelSnackbar,
    }
  },
})
</script>
