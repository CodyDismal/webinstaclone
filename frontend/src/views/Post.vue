<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img :src="'/post/image/' + $route.params.id"/>
            </div>
            <div class="col-6">
                <p>{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Post',

        data() {
            return {
                description: '',
            };
        },

        created() {
            const self = this;
            self.axios.get('/post/' + self.$route.params.id).then(data => {
                self.description = data.data.description;
            });
        }
    }
</script>

<style>
    img {
        max-width: 20vw;
    }
</style>