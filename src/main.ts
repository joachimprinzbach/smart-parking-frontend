/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */
import Vue from "vue"
import "./styles/styles.scss"

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 * The order is important!
 */
import "@/plugins/axios.plugin"
import "@/plugins/vue-composition-api.plugin"
import "@/plugins/google-analytics.plugin"
import vuetify from "@/plugins/vuetify.plugin"
import { i18n } from "@/plugins/i18n.plugin"
import { router } from "@/plugins/vue-router.plugin"

/* ============
 * Filters + Directives
 * ============
 */
import "@/app/filters/join-texts.filter"

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from "@/app/App.vue"
import "./registerServiceWorker"

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app")

import { state } from "@/app/reactive/tutorial.state"
if (!state.hasDone) {
  router.replace({ name: "tutorial" })
}
