<template>
  <v-form v-model="isFormValid">
    <v-stepper v-model="stepper" vertical>
      <!-- STEP - LicensePlate -->
      <v-stepper-step
        step="1"
        :complete="stepper > 1"
        :rules="licensePlateStepRules"
      >
        {{ $t("booking.form.licensePlate.label") }}
        <small>{{ licensePlate }}</small>
      </v-stepper-step>
      <v-stepper-content step="1">
        <BookingStepLicensePlate
          ref="bookingStepLicensePlate"
          v-model="licensePlate"
          @submit="submitStepLicensePlate"
        />
      </v-stepper-content>

      <!-- STEP - MobileNumber -->
      <v-stepper-step step="2" :complete="stepper > 2" :rules="mobileStepRules">
        {{ $t("booking.form.mobile.label") }}
        <small>{{ mobile }}</small>
      </v-stepper-step>
      <v-stepper-content step="2">
        <BookingStepMobile
          ref="bookingStepMobile"
          v-model="mobile"
          :loading="isLoading"
          @submit="submitStepMobile"
        />
      </v-stepper-content>

      <!-- STEP - Confirmation -->
      <v-stepper-step step="3" :complete="stepper > 3">
        Verifikation
        <small></small>
      </v-stepper-step>
      <v-stepper-content step="3">
        <BookingStepVerification
          v-if="booking"
          ref="bookingStepVerification"
          v-model="verificationCode"
          :loading="isLoading"
          :booking="booking"
          @submit="submitStepVerification"
        />
      </v-stepper-content>
    </v-stepper>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api"
import BookingStepLicensePlate from "@/app/components/booking/form/BookingStepLicensePlate.vue"
import BookingStepMobile from "@/app/components/booking/form/BookingStepMobile.vue"
import BookingStepVerification from "@/app/components/booking/form/BookingStepVerification.vue"
import { useLicensePlate } from "@/app/reactive/form/license-plate.reactive"
import { useMobile } from "@/app/reactive/form/mobile.reactive"
import { api } from "../../../api"
import { BookingModel } from "../../../models/booking.model"
import { useVerification } from "../../../reactive/form/verification.reactive"

export default defineComponent({
  components: {
    BookingStepLicensePlate,
    BookingStepMobile,
    BookingStepVerification,
  },
  setup(props, { root }) {
    const { licensePlate, licensePlateStepRules } = useLicensePlate(root)
    const { mobile, mobileStepRules } = useMobile(root)
    const { verificationCode } = useVerification(root)

    const stepper = ref(1)
    const isFormValid = ref(false)
    const isLoading = ref(false)
    const booking = ref<BookingModel>(null)
    const bookingStepLicensePlate = ref<{ focus: () => undefined }>(null)
    const bookingStepMobile = ref<{ focus: () => undefined }>(null)
    const bookingStepVerification = ref<{ focus: () => undefined }>(null)

    onMounted(() => {
      if (bookingStepLicensePlate.value) {
        bookingStepLicensePlate.value.focus()
      }
    })

    function submitStepLicensePlate() {
      stepper.value = 2
      if (bookingStepMobile.value) {
        bookingStepMobile.value.focus()
      }
    }

    async function submitStepMobile() {
      isLoading.value = true
      const response = await api.createBooking({
        licensePlate: licensePlate.value,
        mobileNumber: mobile.value,
        facilityId: root.$route.params.id,
      })
      if (response.wasSuccessful && response.data) {
        booking.value = response.data
        stepper.value = 3
        if (bookingStepVerification.value) {
          bookingStepVerification.value.focus()
        }
      }
      isLoading.value = false
    }

    async function submitStepVerification() {
      isLoading.value = true
      const bookingId = (booking.value as any).id as string
      const verifyResponse = await api.verifyCode(
        bookingId,
        verificationCode.value,
      )
      if (verifyResponse.wasSuccessful) {
        const reserveResponse = await api.reserveBooking(bookingId)
        if (reserveResponse.wasSuccessful) {
          root.$router.replace({
            name: "booking.detail",
            params: { id: bookingId },
          })
        } else {
          // Error handling
        }
      } else {
        // Error handling
      }
      isLoading.value = false
    }

    return {
      isFormValid,
      isLoading,
      stepper,
      licensePlate,
      licensePlateStepRules,
      booking,
      mobile,
      mobileStepRules,
      bookingStepLicensePlate,
      bookingStepMobile,
      submitStepLicensePlate,
      submitStepMobile,
      verificationCode,
      bookingStepVerification,
      submitStepVerification,
    }
  },
})
</script>
