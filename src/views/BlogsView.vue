<template>
    <div class="blogs">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                        <BlogPost />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebae"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from "@/components/blog/BlogPost";

export default {
    name: "BlogsView",
    data: function () {
        return {
            pageName: "Blogs",
            pageDescription: "Our blogs are here, please check them out",
        };
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        BlogPost,
    },
};
</script>
