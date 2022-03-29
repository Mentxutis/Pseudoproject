import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ListTodo from "../views/ListTodo.vue";
import NewUser from "../views/NewUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeView",
    component: HomeView,
  },
  {
    path: "/hello",
    component: HelloWorld,
  },
  {
    path: "/ListToDo",
    name: "ListTodo",
    component: ListTodo,
  },
  {
    path: "/NewUser",
    name: "newUser",
    // route level code-splitting
    // this generates a separate chunk (newUser.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "newUser" */ "../views/NewUser.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
