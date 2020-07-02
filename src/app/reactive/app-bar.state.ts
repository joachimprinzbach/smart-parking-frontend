import Vue from "vue"
import { computed } from "@vue/composition-api"

type CallbackFunction = () => void;

interface AppBarState {
  title: null | string
  hasBackButton: boolean
  hasCloseButton: boolean
  closeFunction: null | CallbackFunction
}

const state = Vue.observable<AppBarState>({
  title: "",
  hasBackButton: false,
  hasCloseButton: false,
  closeFunction: null,
})

const title = computed(() => state.title)
const hasTitle = computed(() => !!state.title)
const hasBackButton = computed(() => state.hasBackButton)
const hasCloseButton = computed(() => state.hasCloseButton)

const setHasBackButton = (value: boolean) => {
  state.hasBackButton = value
  state.hasCloseButton = value ? !value : false
}
const setCloseButton = (closeFunction: CallbackFunction) => {
  state.hasCloseButton = true
  state.hasBackButton = false
  state.closeFunction = closeFunction
}
const setTitle = (value: string | null) => (state.title = value)

const runCloseFunction = () =>
  state.closeFunction ? state.closeFunction() : void 0

export const useAppBar = () => {
  return {
    runCloseFunction,
    hasBackButton,
    setHasBackButton,
    hasCloseButton,
    setCloseButton,
    hasTitle,
    title,
    setTitle,
  }
}
