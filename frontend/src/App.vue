<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">WebInstaClone</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" v-if="loggedIn">
                    <router-link :to="{name: 'user', params: { id: userId } }">Mój profil</router-link>
                </button>
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" v-else>
                    <router-link to="/">Zaloguj</router-link>
                </button>
            </form>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',

        computed: {
            loggedIn() {
                return this.$store.state.loggedIn;
            },

            userId() {
                return this.$store.state.userId;
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
