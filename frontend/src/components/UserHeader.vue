<template>
    <div class="jumbotron user">
        <h1 class="display-4">
            @{{ nickname }}
        </h1>
        <p class="lead">
            {{ firstName + ' ' + lastName }}
        </p>
        <hr class="my-4">
        <p>{{ description }}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" @click="follow" v-if="!followingThisUser">Obserwuj</a>
    </div>
</template>

<script>
    export default {
        name: "UserHeader",
        props: ['nickname', 'firstName', 'lastName', 'description', 'userId'],
        data() {
          return {
              followingThisUser: false
          }
        },
        watch: {
            'userId': function (nv, ov) {
                if (nv !== null) {
                    this.isFollowing();
                }
            }
        },
        methods: {
            follow() {
                const self = this;
                self.axios
                    .post('/follow/' + self.userId)
                    .then(res => {
                        if (res.data) {
                            self.followingThisUser = true;
                        }
                    });
            },
            isFollowing() {
                const self = this;
                self.axios
                    .get('/follow/' + self.userId)
                    .then(res => {
                        if (res.data) {
                            self.followingThisUser = true;
                        }
                    });
            }
        }
    }
</script>

<style scoped>
    .user {
        text-align: left;
    }
</style>