import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: () => import('../components/hello.vue')
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('../components/demo.vue')
    }
  ]
})

export default router
