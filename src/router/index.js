import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users
  },
  {
    path: "/users/:id/posts",
    name: "Posts",
    component: () => import("../views/Posts.vue")
  },
  {
    path: "/users/:id/posts/:postId",
    name: "SinglePost",
    component: () => import("../views/SinglePost.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
