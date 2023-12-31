import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import WebBuilder from "../views/WebBuilder.vue";
<<<<<<< HEAD
import ViewPage from "../views/ViewPage.vue";
import ViewEdit from "../views/ViewEdit.vue";
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f

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
<<<<<<< HEAD
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
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
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
