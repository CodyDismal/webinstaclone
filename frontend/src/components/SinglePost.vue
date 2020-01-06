<template>
    <div class="card" style="width: 18rem;">
        <img :src="src" class="card-img-top" :alt="description">
        <div class="card-body">
            <h5 class="card-title">@{{ nickname }}</h5>
            <p class="card-text">
                {{ description }}
            </p>
            <a class="btn btn-primary">Like</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SinglePost",

        props: ['src', 'description', 'nickname']
    }
</script>

<style scoped>

</style>