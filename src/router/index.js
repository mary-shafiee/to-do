import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";

Vue.use(VueRouter);



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,


    routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/team",
      name: "team",
      component:Team ,
    },

  ],
});

export default router;
