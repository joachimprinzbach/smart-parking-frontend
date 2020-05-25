<template>
  <v-container class="booking-payment">
    <v-skeleton-loader
      v-if="isPending"
      class="mx-auto skeleton-carusel"
      type="image"
    ></v-skeleton-loader>
    <section v-if="!isPending">
      <div class="box">
        <table>
          <tr>
            <th>{{ $t("booking.payment.start") }}</th>
            <td>{{ startedAt }}</td>
          </tr>
          <tr>
            <th>{{ $t("booking.payment.end") }}</th>
            <td>{{ stoppedAt }}</td>
          </tr>
          <tr>
            <th>{{ $t("booking.payment.duration") }}</th>
            <td>
              <ParkTime
                :startedAt="booking.startedAt"
                :stoppedAt="booking.stoppedAt"
              />
            </td>
          </tr>
        </table>

        <hr />
        <table>
          <tr>
            <th>{{ $t("booking.payment.total") }}</th>
            <td>
              <ParkPrice
                :startedAt="booking.startedAt"
                :stoppedAt="booking.stoppedAt"
              />
            </td>
          </tr>
        </table>
      </div>
      <br />

      <form
        id="paymentForm"
        data-merchant-id="1100023563"
        data-amount="1000"
        data-currency="CHF"
        data-refno="12345678"
        data-sign="200505180826578730"
      >
        <a id="paymentButton" class="btn btn-primary" @click="pay"
          >Pay CHF 10.00</a
        >
      </form>

      <!-- <v-btn @click="goToConfirmation()">Test Payment</v-btn> -->
    </section>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBooking } from "../reactive/booking.state"
import { useBrowser } from "../reactive/browser.state"
import { formatDate } from "../utils/date.util"
import ParkTime from "@/app/components/ParkTime.vue"
import ParkPrice from "@/app/components/ParkPrice.vue"

export default defineComponent({
  components: {
    ParkPrice,
    ParkTime,
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { setHasUnsavedData } = useBrowser()
    const { booking, loadBooking, isPending, payBooking } = useBooking()

    onMounted(() => {
      setTitle("booking.payment.appBarTitle")
      setHasBackButton(true)
      setHasUnsavedData(true)
      loadBooking(root.$router, root.$route.params.id)
    })

    return {
      isPending,
      booking,
      startedAt: computed(() => formatDate(booking.startedAt)),
      stoppedAt: computed(() => formatDate(booking.stoppedAt)),
      goToConfirmation: async () => {
        // TODO: Add payment logic
        await payBooking("test-payment")
        root.$router.replace({ name: "confirmation" })
      },
      pay: () => {
        const w: any = window
        w.Datatrans.startPayment({ form: "#paymentForm" })
      },
    }
  },
})
</script>
