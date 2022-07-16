//make uppercase filter
import Vue from "vue";

Vue.filter("uppercase", (v) => v.toUpperCase());

//make reverse filter
Vue.filter("reverse", (v) => v.split("").reverse().join(""));
