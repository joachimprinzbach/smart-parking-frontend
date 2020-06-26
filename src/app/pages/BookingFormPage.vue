<template>
  <section class="booking-form">
    <BookingForm />

    <!-- <BookingForm v-if="showBookingForm" @formSubmit="formSubmitted()" />
    <BookingVerification
      v-if="!showBookingForm"
      @closeVerification="closeVerification()"
    /> -->
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useBrowser } from "@/app/reactive/browser.state"
import { useAppBar } from "@/app/reactive/app-bar.state"
import BookingForm from "@/app/components/booking/form/BookingForm.vue"

export default defineComponent({
  components: {
    BookingForm,
  },
  setup() {
    const Browser = useBrowser()
    const AppBar = useAppBar()

    onMounted(async () => {
      Browser.setHasUnsavedData(true)
      AppBar.setHasBackButton(true)
      AppBar.setTitle("booking.form.appBarTitle")
    })

    return {}
  },
})
</script>
