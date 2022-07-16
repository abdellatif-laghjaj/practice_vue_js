//make uppercase filter
import Vue from "vue";

Vue.filter("uppercase", (v) => v.toUpperCase());

//make reverse filter
Vue.filter("reverse", (v) => v.split("").reverse().join(""));

//make text short
Vue.filter("shortenText", (v) => {
    const max_length = 160;
    if (v.length > max_length) v = v.substr(0, max_length) + "...";
    return v;
});
