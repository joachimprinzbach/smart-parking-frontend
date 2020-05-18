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
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import BookingForm from "@/app/components/BookingForm.vue"
import BookingVerification from "@/app/components/BookingVerification.vue"
import { useBrowser } from "../reactive/browser.state"

export default defineComponent({
  components: {
    BookingForm,
    BookingVerification,
  },
  setup() {
    const { setHasUnsavedData } = useBrowser()
    const showBookingForm = ref(true)

    const formSubmitted = () => (showBookingForm.value = false)
    const closeVerification = () => (showBookingForm.value = true)

    onMounted(async () => {
      setHasUnsavedData(true)
    })

    return {
      showBookingForm,
      formSubmitted,
      closeVerification,
    }
  },
})
</script>
