<template>
    <div class="container feed-container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-4">
                <SinglePost :key="post.id" v-for="post in feed" :src="'post/image/' + post.fileName"
                            :description="post.description" :likes-count="post.Like.count"
                            :nickname="post.User.nickname" :user-id="post.User.id"></SinglePost>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<script>
    import SinglePost from "../components/SinglePost";

    export default {
        name: "Feed",

        data() {
            return {
                feed: []
            };
        },

        created() {
            const self = this;
            self.axios.get('/feed').then(res => {
                self.feed = res.data;
            });
        },


        components: {SinglePost}
    }
</script>

<style scoped>
    .feed-container {
        padding-top: 70px;
    }
</style>