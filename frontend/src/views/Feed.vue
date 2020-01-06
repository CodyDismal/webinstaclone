<template>
    <div class="container">
        <SinglePost :key="post.id" v-for="post in feed" :src="'post/image/' + post.fileName"
                    :description="post.description"
                    :nickname="post.User.nickname"></SinglePost>
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