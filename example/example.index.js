import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import SugarUI from "@sugarSrc/index.js"
import routes from "./router.js"
import './style/index.scss'

[SugarUI, VueRouter].map((plugin) => {
    Vue.use(plugin)
})

let router = new VueRouter({
    routes
  })

new Vue({
    el: "#app",
    // store,
    router,
    components: { App },
    template: "<App/>",
    created() {
    }
})