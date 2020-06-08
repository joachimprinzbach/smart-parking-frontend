<template>
  <v-container>
    <h1 class="heading">{{ $t("booking.receipt.title") }}</h1>
    <br />
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
    <br />
    <v-btn block color="primary" outlined @click="goToHome()">
      {{ $t("booking.receipt.navigate.home") }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from "@vue/composition-api"
import { BookingModel } from "@/app/models/booking.model"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import { calculatePriceRawByBooking } from "@/app/utils/price-calculator.util"
import { formatDate } from "@/app/utils/date.util"
import ParkTime from "@/app/components/ParkTime.vue"
import ParkPrice from "@/app/components/ParkPrice.vue"

export default defineComponent({
  components: {
    ParkTime,
    ParkPrice,
  },
  props: {
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
  },
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    const amount = computed(
      () => `${calculatePriceRawByBooking(props.booking)}00`,
    )
    const startedAt = computed(() => formatDate(props.booking.startedAt))
    const stoppedAt = computed(() => formatDate(props.booking.stoppedAt))

    onBeforeMount(() => {
      AppBar.setTitle(null)
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
    })

    function goToHome() {
      root.$router.push({ name: "home" })
    }

    return { amount, startedAt, stoppedAt, goToHome }
  },
})
</script>
