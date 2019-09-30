import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home")
    },
    {
      path: "",
      component: () => import("@/layout/threeColumnLayout"),
      children: [
        {
          path: "/publicData/pageOne",
          name: "publicDataOne",
          component: () => import("@/views/publicData/pageOne")
        },
        {
          path: "/publicData/pageTwo",
          name: "publicDataTwo",
          component: () => import("@/views/publicData/pageTwo")
        }
      ]
    }
  ]
});
