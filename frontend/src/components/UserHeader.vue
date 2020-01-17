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
        <a class="btn btn-primary btn-lg" href="#" role="button">Obserwuj</a>
    </div>
</template>

<script>
    export default {
        name: "UserHeader",
        props: ['nickname', 'firstName', 'lastName', 'description']
    }
</script>

<style scoped>
    .user {
        text-align: left;
    }
</style>