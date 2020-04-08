import Vue from "vue"
import { computed } from "@vue/composition-api"

interface SnackbarState {
  hasReservationCancelSnackbar: boolean
}

const state = Vue.observable<SnackbarState>({
  hasReservationCancelSnackbar: false,
})

const hasReservationCancelSnackbar = computed(
  () => state.hasReservationCancelSnackbar,
)

let timeoutId: number | undefined = undefined

const hideReservationCancelSnackbar = () => {
  state.hasReservationCancelSnackbar = false
  clearTimeout(timeoutId)
}

const showReservationCancelSnackbar = () => {
  state.hasReservationCancelSnackbar = true
  timeoutId = setTimeout(() => hideReservationCancelSnackbar(), 6000)
}

export const useSnackbar = () => {
  return {
    showReservationCancelSnackbar,
    hideReservationCancelSnackbar,
    hasReservationCancelSnackbar,
  }
}
