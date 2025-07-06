import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/inventory/product-upsert',
      name: 'product-upsert',
      component: () => import('../views/Inventory/ProductUpsert.vue'),
    },
  ],
})

export default router
