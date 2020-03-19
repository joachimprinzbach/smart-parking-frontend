import Vue from "vue"
import { computed } from "@vue/composition-api"

interface AppBarState {
  title: null | string
  hasBackButton: boolean
  hasCloseButton: boolean
  closeFunction: Function | null
}

const state = Vue.observable<AppBarState>({
  title: "",
  hasBackButton: true,
  hasCloseButton: true,
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
const setCloseButton = (closeFunction: Function) => {
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
