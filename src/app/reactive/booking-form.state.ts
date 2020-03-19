import Vue from "vue";
import { computed } from "@vue/composition-api";

interface BookingFormState {
  valid: boolean;
  licencePlate: string;
  mobile: string;
}

const state = Vue.observable<BookingFormState>({
  valid: false,
  licencePlate: "",
  mobile: "",
});

const getValid = computed(() => state.valid);
const getLicencePlate = computed(() => state.licencePlate);
const getMobile = computed(() => state.mobile);

const setMobile = (value: string) => (state.mobile = value);
const setLicencePlate = (value: string) => (state.licencePlate = value);
const setValid = (value: boolean) => (state.valid = value);

export const useBookingForm = () => {
  return {
    getValid,
    getLicencePlate,
    getMobile,
    setMobile,
    setLicencePlate,
    setValid,
  };
};
