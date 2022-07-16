<template>
    <div class="post">
        <div class="post-views btn btn-info text-white">
            <span
                >Views <span class="badge bg-warning">{{ views }}</span></span
            >
        </div>
        <div class="post-image">
            <img :src="image" alt="post image" />
        </div>
        <h1 class="post-title">{{ title | uppercase | reverse }}</h1>
        <span class="post-date">Posted: 11/08/2022</span>
        <p class="post-content">
            {{ content }}
        </p>
        <div class="row post-cat-auth">
            <div class="col-sm-6">
                <span class="badge rounded-pill bg-danger post-author"
                    >@{{ author }}</span
                >
            </div>
            <div class="col-sm-6 text-end">
                <span class="badge rounded-pill bg-danger post-category">
                    {{ category }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "post",
    props: ["views", "image", "title", "date", "content", "author", "category"],
};
</script>

<style lang="scss" scoped>
.post {
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 16px;
    box-shadow: 0 0 14px #ddd;
    position: relative;
    text-align: left;

    .post-views {
        position: absolute;
        top: 6px;
        right: 6px;
    }

    .post-image img {
        border-radius: 10px;
        object-fit: cover;
        width: 100%;
        height: 200px;
    }

    .post-title {
        font-weight: bold;
    }

    .post-date {
        display: block;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .post-content {
        font-size: 18px;
        margin: 6px 0;
    }

    .post-cat-auth {
        margin: 6px 0;
        font-size: 18px;
    }
}
</style>
