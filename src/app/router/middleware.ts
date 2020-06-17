import { isAuthenticated } from "../reactive/admin.state"
import { NavigationGuard } from "vue-router"

export const authGuard: NavigationGuard = (to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !isAuthenticated.value) {
    next({
      name: "admin.login",
    })
  } else {
    next()
  }
}
