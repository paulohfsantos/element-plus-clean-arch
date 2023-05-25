import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { title: 'Home', requiresAuth: true },
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: { title: 'About', requiresAuth: true },
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: { title: 'About' },
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
    meta: { title: 'About' },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})