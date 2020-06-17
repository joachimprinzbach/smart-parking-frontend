/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from "vue"
import VueRouter from "vue-router"
import { routes, authGuard } from "@/app/router"

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(/*to, from, savedPosition*/) {
    return { x: 0, y: 0 }
  },
})

router.beforeEach(authGuard)
