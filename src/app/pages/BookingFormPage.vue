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
import { useBrowser } from "@/app/reactive/browser.state"
import BookingForm from "@/app/components/booking/BookingForm.vue"
import BookingVerification from "@/app/components/booking/BookingVerification.vue"

export default defineComponent({
  components: {
    BookingForm,
    BookingVerification,
  },
  setup() {
    const Browser = useBrowser()
    const showBookingForm = ref(true)

    onMounted(async () => {
      Browser.setHasUnsavedData(true)
    })

    function formSubmitted() {
      showBookingForm.value = false
    }

    function closeVerification() {
      showBookingForm.value = true
    }

    return {
      showBookingForm,
      formSubmitted,
      closeVerification,
    }
  },
})
</script>
