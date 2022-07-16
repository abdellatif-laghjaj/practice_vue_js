<template>
    <div class="header">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/help">Help</router-link>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'AppHeader',
    }
</script>