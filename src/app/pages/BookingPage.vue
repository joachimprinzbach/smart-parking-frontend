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

    onBeforeMount(() => loadBooking(root.$route.params.id))

    watchEffect(() => {
      if (
        booking === null ||
        booking === undefined ||
        (booking && booking.state === BookingState.Created) ||
        (booking && booking.state === BookingState.Deleted)
      ) {
        root.$router.replace({ name: "not-found" })
      }
    })

    return { isPending, booking, isVerified, isStarted, isStopped, isPayed }
  },
})
</script>
