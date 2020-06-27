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
    </v-snackbar>

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useSnackbar } from "@/app/reactive/snackbar.state"
import AppBar from "@/app/components/layout/AppBar.vue"
import Footer from "@/app/components/layout/Footer.vue"

export default defineComponent({
  components: {
    AppBar,
    Footer,
  },
  setup() {
    const { hasReservationCancelSnackbar } = useSnackbar()
    return {
      hasReservationCancelSnackbar,
    }
  },
})
</script>
