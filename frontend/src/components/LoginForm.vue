<template>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email"
                           placeholder="Podaj email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Hasło" v-model="password">
                </div>
                <button @click="login" type="button" class="btn btn-primary">Zaloguj się</button>
            </form>
        </div>
    </div>
</template>

<script>
    /* eslint no-console: "error" */
    export default {
        name: "LoginForm",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                const self = this;
                this.axios.post('/auth/login', {
                    email: self.email,
                    password: self.password
                }).then(result => {
                    self.$store.commit('setLoggedIn', true);
                    self.$store.commit('setLoggedUserId', result.data.userId);
                    if (result.data.redirectToFillInfo) {
                        self.$router.push('personal-data');
                        return;
                    }

                    self.$router.push('feed');
                }).catch(error => {
                })
            }
        }

    }
</script>

<style scoped>

</style>