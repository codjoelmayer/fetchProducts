import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
