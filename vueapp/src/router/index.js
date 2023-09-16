import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import WebBuilder from "../views/WebBuilder.vue";
import ViewPage from "../views/ViewPage.vue";
import ViewEdit from "../views/ViewEdit.vue";

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
  {
    path: "/page/:pageId",
    name: "pageView",
    component: ViewPage,
    meta: {
      title: "pageView",
      requiresUnauth: true,
    },
  },
  {
    path: "/edit/:pageId",
    name: "EditView",
    component: ViewEdit,
    meta: {
      title: "EditView",
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
