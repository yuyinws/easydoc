import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/components/index.vue'),

    children: [
      {
        path: 'catalog',
        name: 'catalog',
        component: () => import('@/views/catalog.vue'),
      },
    ],
  },
  // {
  //   path: '/content',
  //   name: 'content',
  //   component: () => import('@/views/content.vue'),
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
