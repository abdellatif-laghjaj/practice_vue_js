import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/style.scss";
import "normalize.css";

Vue.config.productionTip = false;

//make uppercase filter
Vue.filter("uppercase", (v) => v.toUpperCase());

//make reverse filter
Vue.filter("reverse", (v) => v.split("").reverse().join(""));

new Vue({
    router,
    store,
    render: (createElement) => createElement(App),
}).$mount("#app");
