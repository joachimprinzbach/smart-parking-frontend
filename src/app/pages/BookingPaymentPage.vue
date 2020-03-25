<template>
  <v-container class="booking-payment">
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
          <td>{{ time }}</td>
        </tr>
      </table>

      <hr />
      <table>
        <tr>
          <th>{{ $t("booking.payment.total") }}</th>
          <td>CHF 2.00</td>
        </tr>
      </table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneParkingObjects } from "../reactive/parking-objects.state"
import { useBooking } from "../reactive/booking.state"
import { formatDate, dateDiffToString, diffFrom } from "../utils/date"

export default defineComponent({
  setup(props, {root}) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findOneParkingObject, parkingObject } = useOneParkingObjects()
    const { booking } = useBooking()

    onMounted(() => {
      setTitle("booking.payment.appBarTitle")
      setHasBackButton(true)
      findOneParkingObject("picasso")
    })

    return {
      parkingObject,
      booking,
      time: computed(() =>
        dateDiffToString(root, diffFrom(booking.startedAt, booking.stoppedAt)),
      ),
      startedAt: computed(() => formatDate(booking.startedAt)),
      stoppedAt: computed(() => formatDate(booking.stoppedAt)),
    }
  },
})
</script>
