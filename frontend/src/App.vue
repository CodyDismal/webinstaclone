<template>
    <div id="app">
        <Navbar></Navbar>
        <div class="view">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: 'App',
        components: {Navbar},

        mounted() {
            const self = this;
            self.axios.get('/feed').then(res => {
                if (err.response.status === 401) {

                }
            }).catch(err => {
                if (err.response.status === 401) {

                }
            });
        },

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
        margin-bottom: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .view {
        padding-top: 75px;
    }
</style>
