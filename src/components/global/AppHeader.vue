<template>
    <div class="header">
        <div class="container">
            <div class="logo">Abdel<span>.</span></div>
            <ul class="text-end">
                <router-link to="/" tag="li" exact>
                    <a>Home</a>
                </router-link>
                <router-link to="/blogs" tag="li">
                    <a>Blogs</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a>About</a>
                </router-link>
                <router-link to="/help" tag="li">
                    <a>Help</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #333;
    color: #fff;
    overflow: hidden;

    .logo {
        font-size: 24px;
        width: 200px;
        padding: 20px;
        float: left;
    }

    ul {
        float: right;
        width: calc(100% - 200px);
        margin: 0;

        li {
            padding: 20px;
            display: inline-block;
            font-size: 18px;

            a {
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>
