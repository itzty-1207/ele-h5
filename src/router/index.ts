import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '@/views/tabs/TabsView.vue'
import HomeView from '@/views/home/HomeView.vue'
import OrderView from '@/views/order/OrderView.vue'
import MineView from '@/views/mine/MineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        { path: '/home', name: 'home', component: HomeView },
        { path: '/order', name: 'order', component: OrderView },
        { path: '/mine', name: 'mine', component: MineView },
      ],
    },
  ],
})

export default router
