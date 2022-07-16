<template>
    <div class="our-help">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
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
};
</script>
