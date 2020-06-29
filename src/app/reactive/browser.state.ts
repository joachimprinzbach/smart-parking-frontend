import Vue from "vue"
import { computed } from "@vue/composition-api"

interface BrowserState {
  hasUnsavedData: boolean
  hasNetwork: boolean
}

const state = Vue.observable<BrowserState>({
  hasUnsavedData: true,
  hasNetwork: true,
})

const hasUnsavedData = computed(() => state.hasUnsavedData)
const hasNetwork = computed(() => state.hasNetwork)

const setHasUnsavedData = (value: boolean) => {
  state.hasUnsavedData = value
}

const setHasNetwork = (value: boolean) => {
  state.hasNetwork = value
}

window.onload = function() {
  window.addEventListener("beforeunload", e => {
    if (!state.hasUnsavedData) {
      return undefined
    }

    const confirmationMessage =
      "It looks like you have been editing something. " +
      "If you leave before saving, your changes will be lost."
    ;(e || window.event).returnValue = confirmationMessage //Gecko + IE
    return confirmationMessage //Gecko + Webkit, Safari, Chrome etc.
  })
}

export const useBrowser = () => {
  return {
    hasUnsavedData,
    setHasUnsavedData,
    hasNetwork,
    setHasNetwork,
  }
}
