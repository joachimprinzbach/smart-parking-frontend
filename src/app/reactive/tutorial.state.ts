import Vue from "vue"
import { computed } from "@vue/composition-api"

interface TutorialState {
  hasDone: boolean
}

export const TOKEN_KEY = "smart-parking-turorial"

export const state = Vue.observable<TutorialState>({
  hasDone: false,
})

export const hasTutorialDone = computed(() => !!state.hasDone)

export function setHasDoneTutorial(hasDone: boolean) {
  state.hasDone = hasDone
  localStorage.setItem(TOKEN_KEY, JSON.stringify(state.hasDone))
}

setHasDoneTutorial(JSON.parse(localStorage.getItem(TOKEN_KEY) || "false"))
