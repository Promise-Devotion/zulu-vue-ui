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
      redirect: { name: "SwitchDemo" },
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
        {
          path: "carousel",
          name: "CarouselDemo",
          component: () => import("../components/CarouselDemo.vue"),
        },
      ],
    },
    {
      path: "/introduction",
      name: "Introduction",
      redirect: { name: "Base" },
      component: () => import("../views/Introduction/Introduction.vue"),
      children: [
        {
          path: "base",
          name: "Base",
          component: () => import("../components/introduce/base.vue"),
        },
        {
          path: "install",
          name: "Install",
          component: () => import("../components/introduce/Install.vue"),
        },
        {
          path: "get-start",
          name: "GetStart",
          component: () => import("../components/introduce/GetStart.vue"),
        },
        {
          path: "updatelog",
          name: "Updatelog",
          component: () => import("../components/introduce/UpdateLog.vue"),
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
