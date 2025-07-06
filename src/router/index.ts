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
      path: '/inventory/item-upsert',
      name: 'item-upsert',
      component: () => import('../views/Inventory/ItemUpsert.vue'),
    },
  ],
})

export default router
