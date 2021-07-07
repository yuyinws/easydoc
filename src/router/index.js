import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
