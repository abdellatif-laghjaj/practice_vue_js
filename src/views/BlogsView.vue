<template>
    <div class="blogs">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    name: "BlogsView",
    data: function () {
        return {
            pageName: "Blogs",
            pageDescription: "Our blogs are here, please check them out",
        };
    },
};
</script>
