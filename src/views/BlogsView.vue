<template>
    <div class="blogs">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPost
                            v-for="post in posts"
                            :key="post.id"
                            :views="post.views"
                            :image="post.image"
                            :title="post.title"
                            :date="post.date"
                            :content="post.content"
                            :author="post.author"
                            :category="post.category"
                        >
                            {{ post }}
                        </BlogPost>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <BlogSideBar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from "@/components/blog/BlogPost";
import BlogSideBar from "@/components/blog/BlogSideBar";
import Posts from "@/json/posts.json";

export default {
    name: "BlogsView",
    data: function () {
        return {
            pageName: "Blogs",
            pageDescription: "Our blogs are here, please check them out",
            posts: Posts,
        };
    },
    components: {
        /* eslint-disable */
        BlogPost,
        BlogSideBar,
    },
};
</script>
