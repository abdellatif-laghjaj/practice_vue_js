<template>
    <div v-format.bold.orange="60" class="sidebar-widgets">
        {{ text | uppercase }}
    </div>
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
