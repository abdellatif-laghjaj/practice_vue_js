<template>
    <div class="our-help">
        <h1 v-format.orange>{{ pageName }}</h1>
        <p v-bold>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "help",
    data: function () {
        return {
            pageName: "Help Us",
            pageDescription:
                "Help us to improve our service, please contact us",
        };
    },
    directives: {
        bold: {
            bind: function (el) {
                el.style.backgroundColor = "red";
            },
        },
    },
};
</script>
