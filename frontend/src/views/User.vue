<template>
    <div class="container user-container">
        <div class="row">
            <div class="col-5">
                <UserHeader :nickname="nickname"
                            :first-name="firstName"
                            :last-name="lastName"
                            :description="description"
                            :user-id="userId"></UserHeader>
            </div>
            <div class="col-7 col-posts">
                <p v-if="feed.length === 0">Brak postów... Póki co.</p>
                <SinglePost :key="post.id" v-for="post in feed" :src="'/post/image/' + post.fileName"
                            :description="post.description" :likes-count="post.Like.count"></SinglePost>
            </div>
        </div>


    </div>
</template>

<script>

    import UserHeader from "../components/UserHeader";
    import SinglePost from "../components/SinglePost";

    export default {
        name: 'User',
        data() {
            return {
                firstName: '',
                lastName: '',
                nickname: '',
                description: '',
                userId: null,
                feed: []
            };
        },
        mounted() {
            const self = this;
            self.axios.get('/profile/data/' + self.$route.params.id).then(data => {
                data = data.data;
                self.userId = data.id;
                self.firstName = data.firstName;
                self.lastName = data.lastName;
                self.nickname = data.nickname;
                self.description = data.biography;
                self.feed = data.Posts;
            });
        },
        components: {UserHeader, SinglePost},
    }
</script>

<style>
    .user-container {
        padding-top: 70px;
    }

    .col-posts {
        margin-top: -10px;
    }
</style>