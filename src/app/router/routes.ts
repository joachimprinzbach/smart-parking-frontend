import { RouteConfig } from "vue-router"
import HomePage from "@/app/pages/HomePage.vue"

export const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/ContactPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../pages/TermsPage.vue"),
  },
  {
    path: "/facility/:id",
    name: "facility.detail",
    component: () => import("../pages/FacilityDetailPage.vue"),
  },
  {
    path: "/facility/:id/booking",
    name: "booking.form",
    component: () => import("../pages/BookingFormPage.vue"),
  },
  {
    path: "/booking/:id",
    name: "booking.detail",
    component: () => import("../pages/BookingPage.vue"),
  },
  // {
  //   path: "/booking/:id/payment",
  //   name: "booking.payment",
  //   component: () => import("../pages/BookingPaymentPage.vue"),
  // },
  {
    path: "/booking/:id/confirmation",
    name: "booking.confirmation",
    component: () => import("../pages/BookingConfirmationPage.vue"),
  },
  // {
  //   path: "/booking/:id/receipt",
  //   name: "booking.receipt",
  //   component: () => import("../pages/BookingReceiptPage.vue"),
  // },
  {
    path: "/not-found",
    name: "not-found",
    component: () => import("../pages/NotFoundPage.vue"),
  },
  { path: "*", redirect: "/" },
]
