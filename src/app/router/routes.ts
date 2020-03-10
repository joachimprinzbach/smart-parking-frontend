import {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {path: '*', redirect: '/'},
]
