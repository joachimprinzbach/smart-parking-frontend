import { RouteConfig } from "vue-router";
import HomePage from "../pages/HomePage.vue";

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
    path: "/object",
    name: "object.detail",
    component: () => import("../pages/ObjectDetailPage.vue"),
  },
  {
    path: "/booking",
    name: "booking.form",
    component: () => import("../pages/BookingFormPage.vue"),
  },
  {
    path: "/booking/:id/detail",
    name: "booking.detail",
    component: () => import("../pages/BookingDetailPage.vue"),
  },
  {
    path: "/booking/:id/payment",
    name: "booking.payment",
    component: () => import("../pages/BookingPaymentPage.vue"),
  },
  {
    path: "/booking/confirmation",
    name: "booking.confirmation",
    component: () => import("../pages/BookingConfirmationPage.vue"),
  },
  { path: "*", redirect: "/" },
];
