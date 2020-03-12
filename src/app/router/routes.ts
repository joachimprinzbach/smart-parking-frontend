import {RouteConfig} from 'vue-router'
import HomePage from '../pages/HomePage.vue'

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue'),
  },
  {
    path: '/object',
    name: 'objectDetail',
    component: () => import('../pages/ObjectDetailPage.vue'),
  },
  {
    path: '/booking/:id',
    name: 'bookingForm',
    component: () => import('../pages/BookingFormPage.vue'),
  },
  {
    path: '/booking/:id/detail',
    name: 'bookingDetail',
    component: () => import('../pages/BookingDetailPage.vue'),
  },
  {
    path: '/booking/:id/payment',
    name: 'bookingPayment',
    component: () => import('../pages/BookingPaymentPage.vue'),
  },
  {
    path: '/booking/confirmation',
    name: 'bookingConfirmation',
    component: () => import('../pages/BookingConfirmationPage.vue'),
  },
  {path: '*', redirect: '/'},
]
