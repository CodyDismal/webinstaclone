<template>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"
                           placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Hasło</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Hasło"
                           v-model="password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Powtórz hasło</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Powtórz hasło"
                           v-model="passwordCopy">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agreed">
                    <label class="form-check-label" for="exampleCheck1">Zgadzam się z RODO, Cookies i
                        t.d.</label>
                </div>
                <button type="button" class="btn btn-primary" :disabled='!passwordIsOk' @click="register">
                    Załóż konto
                </button>
            </form>
        </div>
        <div class="alert alert-danger" v-if='password !== passwordCopy'>
            Hasła muszą się zgadzać!
        </div>
        <div class="alert alert-danger" v-if='password.length <= 3'>
            Hasło musi mieć przynajmniej 4 symboli!
        </div>
        <div class="alert alert-success" v-if='registrationSuccess'>
            Rejestracja powiodłą się! Sprawdź mail by aktywować konto!
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegistrationForm",
        data() {
            return {
                email: '',
                password: '',
                passwordCopy: '',
                agreed: false,
                registrationSuccess: false
            }
        },
        computed: {
            passwordIsOk() {
                return this.password.length > 3 && this.password === this.passwordCopy && this.agreed === true;
            }
        },
        methods: {
            register() {
                const self = this;
                this.axios.post('/auth/register', {
                    email: self.email,
                    password: self.password
                }).then(result => {
                    self.registrationSuccess = true;
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>