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
          ref="bookingStepVerification"
          @submit="submitStepVerification"
        />
      </v-stepper-content>
      {{ isFormValid }}
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

export default defineComponent({
  components: {
    BookingStepLicensePlate,
    BookingStepMobile,
    BookingStepVerification,
  },
  setup(props, { root }) {
    const { licensePlate, licensePlateStepRules } = useLicensePlate(root)
    const { mobile, mobileStepRules } = useMobile(root)

    const stepper = ref(1)
    const isFormValid = ref(false)
    const isLoading = ref(false)
    const bookingStepLicensePlate = ref<{ focus: () => undefined }>(null)
    const bookingStepMobile = ref<{ focus: () => undefined }>(null)
    const bookingStepVerification = ref(null)

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
      if (response.wasSuccessful) {
        stepper.value = 3
      }
      isLoading.value = false
    }

    function submitStepVerification() {
      stepper.value = 4
    }

    return {
      isFormValid,
      isLoading,
      stepper,
      licensePlate,
      licensePlateStepRules,
      mobile,
      mobileStepRules,
      bookingStepLicensePlate,
      bookingStepMobile,
      submitStepLicensePlate,
      submitStepMobile,
      bookingStepVerification,
      submitStepVerification,
    }
  },
})
</script>
