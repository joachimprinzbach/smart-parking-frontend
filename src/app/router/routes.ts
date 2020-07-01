import { RouteConfig } from "vue-router"
import App from "@/app/pages/App.vue"

const guest = { meta: { guest: true } }
const admin = { meta: { auth: true } }

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/",
        name: "home",
        ...guest,
        component: () => import("../pages/HomePage.vue"),
      },
      {
        path: "/tutorial",
        name: "tutorial",
        ...guest,
        component: () => import("../pages/TutorialPage.vue"),
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
        component: () => import("../pages/terms/TermsPage.vue"),
        children: [
          {
            path: "/terms/agb",
            name: "terms",
            ...guest,
            component: () => import("../pages/terms/ConditionsPage.vue"),
          },
          {
            path: "/terms/data-privacy",
            name: "terms.privacy",
            ...guest,
            component: () => import("../pages/terms/DataPrivacyPage.vue"),
          },
          {
            path: "",
            redirect: "terms", // default child path
          },
        ],
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
