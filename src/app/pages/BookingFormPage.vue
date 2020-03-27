<template>
  <section class="booking-form">
    <BookingForm v-if="showBookingForm" @formSubmit="formSubmitted()" />
    <BookingVerification
      v-if="!showBookingForm"
      @closeVerification="closeVerification()"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import BookingForm from "@/app/components/BookingForm.vue"
import BookingVerification from "@/app/components/BookingVerification.vue"

export default defineComponent({
  components: {
    BookingForm,
    BookingVerification,
  },
  setup() {
    const showBookingForm = ref(true)

    const formSubmitted = () => (showBookingForm.value = false)
    const closeVerification = () => (showBookingForm.value = true)

    return {
      showBookingForm,
      formSubmitted,
      closeVerification,
    }
  },
})
</script>
