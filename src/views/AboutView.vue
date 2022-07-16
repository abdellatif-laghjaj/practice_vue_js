<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "about",
    data: function () {
        return {
            pageName: "About Us",
            pageDescription:
                "Hello World! I'm Andellatif Laghjaj a full stack developer from Morocco",
        };
    },
};
</script>
