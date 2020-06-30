<template>
  <section class="booking">
    <BookingLoading :is-loading="isPending" />
    <section v-if="!isPending && booking && facility">
      <Booking
        v-if="isReserved || isStarted"
        :booking="booking"
        :facility="facility"
        @start="start()"
        @stop="stop()"
        @cancel="cancel()"
      />
      <BookingPayment
        v-if="isStopped"
        :booking="booking"
        :facility="facility"
      />
      <BookingReceipt v-if="isPayed" :booking="booking" :facility="facility" />
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from "@vue/composition-api"
import { BookingState } from "@/app/models/booking-state"
import {
  useFindOneBooking,
  useStartBooking,
  useDeleteBooking,
  useStopBooking,
} from "@/app/reactive/booking"
import { useFindOneFacility, useOpenGate } from "@/app/reactive/facility"
import BookingLoading from "@/app/components/booking/BookingLoading.vue"
import Booking from "@/app/components/booking/Booking.vue"
import BookingPayment from "@/app/components/booking/BookingPayment.vue"
import BookingReceipt from "@/app/components/booking/BookingReceipt.vue"
import { useSnackbar } from "../reactive/snackbar.state"

export default defineComponent({
  components: {
    BookingLoading,
    Booking,
    BookingPayment,
    BookingReceipt,
  },
  setup(props, { root }) {
    const { showReservationCancelSnackbar } = useSnackbar()
    const { openGate } = useOpenGate()
    const { startBooking } = useStartBooking()
    const { deleteBooking } = useDeleteBooking()
    const { stopBooking } = useStopBooking()
    const { booking, isBookingPending, findOneBooking } = useFindOneBooking()
    const {
      facility,
      isFacilityPending,
      findOneFacility,
    } = useFindOneFacility()

    const isVerified = computed(
      () => booking.value.state === BookingState.Verified,
    )
    const isReserved = computed(
      () => booking.value.state === BookingState.Reserved,
    )
    const isStarted = computed(
      () => booking.value.state === BookingState.Started,
    )
    const isStopped = computed(
      () => booking.value.state === BookingState.Stopped,
    )
    const isPayed = computed(() => booking.value.state === BookingState.Payed)
    const isPending = computed(
      () => isBookingPending.value || isFacilityPending.value,
    )

    onBeforeMount(async () => {
      const response = await findOneBooking(root.$route.params.id)
      if (response.wasSuccessful) {
        verifyBooking()
        await findOneFacility(booking.value.facilityId)
      } else {
        root.$router.replace({ name: "not-found" })
      }
    })

    function verifyBooking() {
      if (
        !booking.value ||
        (booking.value &&
          booking.value.state !== BookingState.Reserved &&
          booking.value.state !== BookingState.Started &&
          booking.value.state !== BookingState.Stopped &&
          booking.value.state !== BookingState.Payed)
      ) {
        if (root.$route.name !== "not-found") {
          root.$router.replace({ name: "not-found" })
        }
      }
    }

    async function start() {
      await startBooking(booking)
      openGate(booking.value.id, booking.value.facilityId, "main")
    }

    async function cancel() {
      await deleteBooking(booking.value.id)
      showReservationCancelSnackbar()
      root.$router.replace({
        name: "home",
      })
    }

    async function stop() {
      await stopBooking(booking)
    }

    return {
      isPending,
      booking,
      facility,
      isVerified,
      isStarted,
      isStopped,
      isPayed,
      isReserved,
      start,
      stop,
      cancel,
    }
  },
})
</script>
