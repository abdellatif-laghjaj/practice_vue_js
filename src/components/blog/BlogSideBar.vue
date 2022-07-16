<template>
    <div v-font="90" class="sidebar-widgets">{{ text | uppercase }}</div>
</template>

<script>
export default {
    name: "blogSidebar",
    data: function () {
        return {
            text: "SideBar",
        };
    },
    filters: {
        uppercase: (v) => {
            return v.toUpperCase();
        },
    },
};
</script>
