<template>
    <div class="post">
        <h1 class="post-title">Blog post title</h1>
        <span class="post-date">11/08/2022</span>
        <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            cum cumque dolorum facilis fuga inventore minus mollitia
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">Author</span>
            </div>
            <div class="col-sm-6">
                <span class="badge rounded-pill bg-danger post-category"
                    >Category</span
                >
            </div>
        </div>
        <div class="post-views">
            <span>Views <span class="badge bg-warning">4</span></span>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "post",
};
</script>
