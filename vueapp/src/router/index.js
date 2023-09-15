import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import WebBuilder from "../views/WebBuilder.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: {
      title: "home",
      requiresUnauth: true,
    },
  },
  {
    path: "/webbuilder",
    name: "webBuilder",
    component: WebBuilder,
    meta: {
      title: "webBuilder",
      requiresUnauth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
