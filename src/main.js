import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueResource from "vue-resource";
import VueRouter from  "vue-router";

Vue.use(VueResource);
Vue.use(VueRouter);


Vue.config.productionTip = false;

new Vue({
  router : router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
