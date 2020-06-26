import { RouteConfig } from "vue-router"
import HomePage from "@/app/pages/HomePage.vue"

const guest = { meta: { guest: true } }
const admin = { meta: { auth: true } }

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("../pages/App.vue"),
    children: [
      {
        path: "/",
        name: "home",
        ...guest,
        component: HomePage,
      },
      {
        path: "/contact",
        name: "contact",
        ...guest,
        component: () => import("../pages/ContactPage.vue"),
      },
      {
        path: "/about",
        name: "about",
        ...guest,
        component: () => import("../pages/AboutPage.vue"),
      },
      {
        path: "/terms",
        name: "terms",
        ...guest,
        component: () => import("../pages/TermsPage.vue"),
      },
      {
        path: "/facility/:id",
        name: "facility.detail",
        ...guest,
        component: () => import("../pages/FacilityDetailPage.vue"),
      },
      {
        path: "/facility/:id/reservation",
        name: "reservation.form",
        ...guest,
        component: () => import("../pages/ReservationFormPage.vue"),
      },
      {
        path: "/facility/:id/booking",
        name: "booking.form",
        ...guest,
        component: () => import("../pages/BookingFormPage.vue"),
      },
      {
        path: "/booking/:id",
        name: "booking.detail",
        ...guest,
        component: () => import("../pages/BookingPage.vue"),
      },
      {
        path: "/booking/:id/confirmation",
        name: "booking.confirmation",
        ...guest,
        component: () => import("../pages/BookingConfirmationPage.vue"),
      },
      {
        path: "/not-found",
        name: "not-found",
        component: () => import("../pages/NotFoundPage.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../pages/admin/Admin.vue"),
    children: [
      {
        path: "/",
        name: "admin.dashboard",
        ...admin,
        component: () => import("../pages/admin/AdminDashboard.vue"),
      },
      {
        path: "/admin/facility/:id",
        name: "admin.facility",
        ...admin,
        component: () => import("../pages/admin/AdminFacility.vue"),
      },
      {
        path: "/admin/login",
        name: "admin.login",
        component: () => import("../pages/admin/AdminLogin.vue"),
      },
      {
        path: "",
        redirect: "admin.dashboard", // default child path
      },
    ],
  },
  { path: "*", redirect: "/" },
]
