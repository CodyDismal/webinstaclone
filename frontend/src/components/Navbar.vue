<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">WebInstaClone</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" v-if="isLoggedIn">
                        <span>
                            <router-link :to="{name: 'feed' }">Feed</router-link>
                        </span>
                    </a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" v-if="isLoggedIn">
                        <span>
                            <router-link :to="{name: 'user', params: { id: userId }}">Mój profil</router-link>
                        </span>
                    </a>

                    <a class="nav-link" v-else>
                        <router-link to="/">Zaloguj</router-link>
                    </a>
                </li>

                <li class="nav-item active">
                    <a href="" class="nav-link" v-if="isLoggedIn" @click="logout">
                        Wyloguj
                    </a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    <router-link :to="{name: 'new-post'}">Dodaj post</router-link>
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
            logout() {
                const self = this;
                self.axios.post('/auth/logout').then(res => {
                    self.$router.push('home');
                    self.$store.commit('setLoggedIn', false);
                    self.$store.commit('setLoggedUserId', -1);
                });
            }
        },
        computed: {
            isLoggedIn() {
                return !!this.$store.state.loggedIn;
            },
            userId() {
                return this.$store.state.loggedUserId;
            }
        }
    }
</script>

<style scoped>
    .navbar {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 9999;
    }
</style>