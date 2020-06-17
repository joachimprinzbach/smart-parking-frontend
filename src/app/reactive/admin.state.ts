import Vue from "vue"
import { computed } from "@vue/composition-api"

interface AdminState {
  accessToken: string | null
}

export const ACCESS_TOKEN_KEY = "smart-parking-key"

export const state = Vue.observable<AdminState>({
  accessToken: null,
})

export const isAuthenticated = computed(() => !!state.accessToken)

export function setAccessToken(accessToken: string | null) {
  state.accessToken = accessToken
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken || "")
}

export function removeAccessToken() {
  state.accessToken = null
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

setAccessToken(localStorage.getItem(ACCESS_TOKEN_KEY))
