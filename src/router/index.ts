import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../views/detail/detail.vue')
    }
  ],
});

export default router

