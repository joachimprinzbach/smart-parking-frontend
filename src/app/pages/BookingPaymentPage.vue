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
      <v-btn @click="goToConfirmation()">Test Payment</v-btn>
    </section>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBooking } from "../reactive/booking.state"
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
    const { booking, loadBooking, isPending, payBooking } = useBooking()

    onMounted(() => {
      setTitle("booking.payment.appBarTitle")
      setHasBackButton(true)
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
    }
  },
})
</script>
