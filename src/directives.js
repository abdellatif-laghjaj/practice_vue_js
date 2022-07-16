import Vue from "vue";
//make custom directive to change font size

Vue.directive("format", {
    bind: (el, binding) => {
        el.style.fontSize = binding.value + "px";
        //Bold modifier
        if (binding.modifiers.bold) el.style.fontWeight = "bold";
        //color modifier
        if (binding.modifiers.orange) el.style.color = "orange";
    },
});
