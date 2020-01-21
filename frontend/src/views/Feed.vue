<template>
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-4">
                <p v-if="feed.length === 0">Brak postów... Póki co.</p>
                <SinglePost :key="post.id" v-for="post in feed" :src="'post/image/' + post.fileName"
                            :description="post.description" :likes-count="post.Like.count" :post-id="post.id"
                            :nickname="post.User.nickname" :user-id="post.User.id"></SinglePost>
            </div>
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
</style>