import { createRouter, createWebHistory } from "vue-router";
import MainTodo from "../pages/MainTodo.vue";
import TheAbout from "../pages/TheAbout.vue";
import TheBlog from "../pages/TheBlog.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "MainTodo",
    component: MainTodo,
  },
  {
    path: "/mainTodo",
    name: "MainTodo",
    component: MainTodo,
  },
  {
    path: "/about",
    name: "TheAbout",
    component: TheAbout,
  },
  {
    path: "/blog/:id",
    name: "TheBlogId",
    component: TheBlog,
  },
  {
    path: "/blog",
    name: "TheBlog",
    component: TheBlog,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
