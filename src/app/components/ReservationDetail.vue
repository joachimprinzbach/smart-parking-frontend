<template>
  <section>
    <v-btn block color="primary" @click="openGate()">{{
      $t("booking.detail.openGate.label")
    }}</v-btn>
    <Hint :content="$t('booking.detail.openGate.hint')" />
    <div class="box">
      <p class="subtitle-1">
        <strong>{{ $t("booking.reservation.box.title") }}</strong>
      </p>
      <hr />
      <table>
        <tr>
          <th class="body-1">{{ $t("booking.reservation.box.time") }}</th>
          <td class="body-1"><ReservationTime :createdAt="booking.createdAt" /></td>
        </tr>
      </table>
    </div>
    <Hint :content="$t('booking.reservation.box.hint')" />

    <v-btn block color="error" outlined @click="finish()">{{
      $t("booking.reservation.cancel.label")
    }}</v-btn>
    <Hint :content="$t('booking.reservation.cancel.hint')" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useBooking } from "../reactive/booking.state"
import ReservationTime from "./ReservationTime.vue"
import Hint from "./Hint.vue"

export default defineComponent({
  components: {
    ReservationTime,
    Hint,
  },
  props: {
    parkingObject: Object,
  },
  setup() {
    const { booking } = useBooking()

    return { booking }
  },
})
</script>
