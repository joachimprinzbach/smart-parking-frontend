import Vue from "vue"
import { computed } from "@vue/composition-api"

interface BookingFormState {
  valid: boolean
  licensePlate: string
  mobilePrefix: MobilePrefixItem
  mobile: string
}

export interface MobilePrefixItem {
  text: string,
  prefix: string,
  value: string,
}

export const mobilePrefixes: MobilePrefixItem[] = [
  { text: "+41 (CH)", prefix: "+41", value: "ch" },
  { text: "+49 (DE)", prefix: "+49", value: "de" },
  { text: "+33 (FR)", prefix: "+33", value: "fr" },
]

const state = Vue.observable<BookingFormState>({
  valid: false,
  licensePlate: "",
  mobilePrefix: mobilePrefixes[0],
  mobile: "",
})

const valid = computed(() => state.valid)
const licensePlate = computed(() => state.licensePlate)
const mobilePrefix = computed(() => state.mobilePrefix)
const mobile = computed(() => state.mobile)

const setMobilePrefix = (value: MobilePrefixItem) => (state.mobilePrefix = value)
const setMobile = (value: string) => (state.mobile = value)
const setLicensePlate = (value: string) => (state.licensePlate = value)
const setValid = (value: boolean) => (state.valid = value)

export const useBookingForm = () => {
  return {
    valid,
    licensePlate,
    mobile,
    mobilePrefix,
    setMobile,
    setMobilePrefix,
    setLicensePlate,
    setValid,
  }
}
