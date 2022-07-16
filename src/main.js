import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/style.scss";
import "normalize.css";

import "./filters";

Vue.config.productionTip = false;

//make custom directive to change font size
Vue.directive("font", {
    bind: (el, binding) => {
        el.style.fontSize = binding.value + "px";
    },
});

new Vue({
    router,
    store,
    render: (createElement) => createElement(App),
}).$mount("#app");
