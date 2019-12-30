<template>
    <div class="jumbotron">
        <h1 class="display-4">
            @{{ nickname }}
        </h1>
        <p class="lead">
            {{ firstName + ' ' + lastName }}
        </p>
        <hr class="my-4">
        <p>{{ description }}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
</template>

<script>
    export default {
        name: "UserHeader",
        data() {
            return {
                firstName: '',
                lastName: '',
                nickname: '',
                description: ''
            };
        },

        mounted() {
            const self = this;
            self.axios.get('/profile/data/' + self.$route.params.id).then(data => {
                data = data.data;
                self.firstName = data.firstName;
                self.lastName = data.lastName;
                self.nickname = data.nickname;
                self.description = data.biography;
            });
        },

        methods: {}
    }
</script>

<style scoped>

</style>