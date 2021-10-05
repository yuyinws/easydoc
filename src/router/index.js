import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/components/index.vue'),

    children: [],
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('@/views/tree.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
