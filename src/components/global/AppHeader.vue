<template>
    <div class="header">
        <div class="logo">
            Abdel<spna>.</spna>
        </div>
        <ul>
            <router-link to="/" tag="li" exact>
                <a>Home</a>
            </router-link>
            <router-link to="/about" tag="li">
                <a>About</a>
            </router-link>
            <router-link to="/help" tag="li" replace>
                <a>Help</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'AppHeader',
    }
</script>

<style lang="scss" scoped>
    .header{
        background-color: #333;
        color: #fff;
        overflow: hidden;

        .logo{
            font-size: 30px;
            width: 200px;
            padding: 20px;
            float: left;
        }

        ul{
            float: right;
            width: calc(100% - 200px);

            li{
                padding: 20px;
                display: inline-block;
                font-size: 18px;

                a{
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
</style>

