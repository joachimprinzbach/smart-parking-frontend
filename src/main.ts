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
import vuetify from "@/plugins/vuetify.plugin"
import { i18n } from "@/plugins/i18n.plugin"
import { router } from "@/plugins/vue-router.plugin"

/* ============
 * Filters
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
