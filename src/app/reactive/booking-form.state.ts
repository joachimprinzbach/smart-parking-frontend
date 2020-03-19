import Vue from "vue"
import { computed } from "@vue/composition-api"

interface BookingFormState {
  valid: boolean
  licencePlate: string
  mobile: string
}

const state = Vue.observable<BookingFormState>({
  valid: false,
  licencePlate: "",
  mobile: "",
})

const valid = computed(() => state.valid)
const licencePlate = computed(() => state.licencePlate)
const mobile = computed(() => state.mobile)

const setMobile = (value: string) => (state.mobile = value)
const setLicencePlate = (value: string) => (state.licencePlate = value)
const setValid = (value: boolean) => (state.valid = value)

export const useBookingForm = () => {
  return {
    valid,
    licencePlate,
    mobile,
    setMobile,
    setLicencePlate,
    setValid,
  }
}
