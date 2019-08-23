import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "jquery/dist/jquery.min.js";
// import "lightslider/dist/js/lightslider.min.js";
// import "lightslider/dist/css/lightslider.min.css";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/js/script.js";
import "./assets/scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
