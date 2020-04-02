<template>
  <section>
    <v-btn block color="primary" outlined @click="openGate()">{{
      $t("booking.detail.openGate")
    }}</v-btn>
    <br />
    <!-- <BookingDetailInfoBox
      :hint="parkingObject.parkingHint.de"
      :startedAt="booking.startedAt"
    /> -->
    <br />
    <v-btn block color="primary" @click="finish()">{{
      $t("booking.detail.finish")
    }}</v-btn>
    <p class="hint">{{ $t("booking.detail.finishHint") }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useBooking } from "../reactive/booking.state"
import BookingDetailInfoBox from "./BookingDetailInfoBox.vue"

export default defineComponent({
  components: { BookingDetailInfoBox },
  props: {
    parkingObject: Object,
  },
  setup(props, { emit }) {
    const { booking } = useBooking()
    return {
      booking,
      openGate: () => emit("openGate"),
      finish: () => emit("finish"),
    }
  },
})
</script>
