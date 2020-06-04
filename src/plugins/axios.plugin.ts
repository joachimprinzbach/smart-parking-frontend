/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue, { PluginObject } from "vue"

import Axios from "axios"

import { appConfig } from "@/config/app.config"

Axios.defaults.baseURL = appConfig.apiPath

export const Http: PluginObject<void> = {
  install(VueInstance): void {
    VueInstance.$http = Axios
    VueInstance.prototype.$http = Axios
  },
}

Vue.use(Http)
