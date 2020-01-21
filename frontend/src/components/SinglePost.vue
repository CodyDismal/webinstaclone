<template>
    <div class="card" style="width: 18rem;">
        <img :src="src" class="card-img-top" :alt="description">
        <div class="card-body">
            <h5 class="card-title" v-if="nickname">
                <router-link :to="{name: 'user', params: { id: userId }}">
                    @{{ nickname }}
                </router-link>

            </h5>
            <p class="card-text">
                {{ description }}
            </p>
            <div class="post-footer">
                <a class="btn btn-primary comment" area-disabled="true">Komentuj</a>
                <a class="btn btn-outline-primary like" @click="likePost">
                    ❤ {{ likesCount }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SinglePost",
        methods: {
            likePost() {
                const self = this;
                self.axios
                    .put('/likes/' + self.postId)
                    .then(res => {
                        self.likesCount = parseInt(res.data.likes);
                    });
            }
        },
        props: ['src', 'description', 'nickname', 'userId', 'likesCount', 'postId']
    }
</script>

<style scoped>
    .card {
        min-width: 30vw;
        margin: 10px !important;
    }

    .like {
        color: red !important;
    }
    .post-footer {
        float: right;
    }
    .card-title, .card-text {
        text-align: left;
    }

    .btn {
        margin-left: 10px;
    }

    .comment {
        color: white !important;
    }
</style>