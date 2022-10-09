import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/home/home.vue"),
    },
    {
      path: "/doc",
      name: "Doc",
      component: () => import("../views/doc/doc.vue"),
      children: [
        {
          path: "switch",
          name: "SwitchDemo",
          component: () => import("../components/SwitchDemo.vue"),
        },
        {
          path: "button",
          name: "Buttondemo",
          component: () => import("../components/ButtonDemo.vue"),
        },
        {
          path: "dialog",
          name: "DialogDemo",
          component: () => import("../components/DialogDemo.vue"),
        },
        {
          path: "tabs",
          name: "TabsDemo",
          component: () => import("../components/TabsDemo.vue"),
        },
      ],
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import("../views/detail/detail.vue"),
    },
  ],
});

export default router;
