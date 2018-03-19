import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";
import SugarUI from '../src/index';
import './style/index.scss';


Vue.use(VueRouter);
Vue.use(SugarUI);

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App);
  }
}).$mount("#app");
