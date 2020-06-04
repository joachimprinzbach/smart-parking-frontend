<template>
  <section class="booking">
    <BookingLoading :is-loading="isPending" />
    <section v-if="booking">
      <Booking v-if="isStarted || isVerified" :booking="booking" />
      <BookingPayment v-if="isStopped" :booking="booking" />
      <BookingReceipt v-if="isPayed" :booking="booking" />
    </section>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  watchEffect,
  computed,
} from "@vue/composition-api"
import { useBooking } from "@/app/reactive/booking.state"
import BookingLoading from "@/app/components/booking/BookingLoading.vue"
import Booking from "@/app/components/booking/Booking.vue"
import BookingPayment from "@/app/components/booking/BookingPayment.vue"
import BookingReceipt from "@/app/components/booking/BookingReceipt.vue"
import { BookingState } from "@/app/models/booking-state"
import { BookingModel } from "../models/booking.model"

export default defineComponent({
  components: {
    BookingLoading,
    Booking,
    BookingPayment,
    BookingReceipt,
  },
  setup(props, { root }) {
    const { loadBooking, isPending, booking } = useBooking()

    const isVerified = computed(() => booking.state === BookingState.Verified)
    const isStarted = computed(() => booking.state === BookingState.Started)
    const isStopped = computed(() => booking.state === BookingState.Stopped)
    const isPayed = computed(() => booking.state === BookingState.Payed)

    onBeforeMount(async () => {
      const response = await loadBooking(root.$route.params.id)
      verifyBooking(response.data)
    })

    watchEffect(() => verifyBooking(booking))

    function verifyBooking(data?: BookingModel) {
      if (
        !data ||
        (data &&
          data.state !== BookingState.Verified &&
          data.state !== BookingState.Started &&
          data.state !== BookingState.Stopped &&
          data.state !== BookingState.Payed)
      ) {
        if (root.$route.name !== "not-found") {
          root.$router.replace({ name: "not-found" })
        }
      }
    }

    return { isPending, booking, isVerified, isStarted, isStopped, isPayed }
  },
})
</script>
