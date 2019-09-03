import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

// const Home = () => import('./Home.vue');
// const Admin = () => import('./Admin.vue');
const Home = () => import("./views/Home.vue");
const Producing = () => import("./views/Producing.vue");
const ProductPrices = () => import("./views/ProductPrices.vue");
const CourseSchedule = () => import("./views/CourseSchedule.vue");

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/producing",
      name: "producing",
      component: Producing
    },
    {
      path: "/product-prices",
      name: "ProductPrices",
      component: ProductPrices
    },
    {
      path: "/course-schedule",
      name: "CourseSchedule",
      component: CourseSchedule
    }
  ]
});
