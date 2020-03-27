import Vue from "vue"
import { computed } from "@vue/composition-api"

interface BookingFormState {
  valid: boolean
  licensePlate: string
  mobile: string
}

const state = Vue.observable<BookingFormState>({
  valid: false,
  licensePlate: "",
  mobile: "",
})

const valid = computed(() => state.valid)
const licensePlate = computed(() => state.licensePlate)
const mobile = computed(() => state.mobile)

const setMobile = (value: string) => (state.mobile = value)
const setLicensePlate = (value: string) => (state.licensePlate = value)
const setValid = (value: boolean) => (state.valid = value)

export const useBookingForm = () => {
  return {
    valid,
    licensePlate,
    mobile,
    setMobile,
    setLicensePlate,
    setValid,
  }
}
