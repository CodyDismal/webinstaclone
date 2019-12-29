<template>
    <div class="container">
        <div class="row">
            <div class="col-6">

            </div>
            <div class="col-6">
                <h1>WebInstaClone</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-6">

            </div>
            <div class="col-6">
                <LoginForm v-if="isLoginForm"/>
                <RegistrationForm v-else/>
                <p class="little-tip" v-if="isLoginForm" @click="changeForm">Nie masz konta? Załóż Sobie!</p>
                <p class="little-tip" v-else @click="changeForm">Masz już konto? Załoguj się!</p>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import LoginForm from "../components/LoginForm";
    import RegistrationForm from "../components/RegistrationForm";

    export default {
        name: 'home',
        data() {
            return {
                isLoginForm: true
            }
        },
        methods: {
            changeForm() {
                this.isLoginForm = !this.isLoginForm;
            }
        },
        components: {
            RegistrationForm,
            LoginForm,
        }
    }
</script>

<style>
  .little-tip {
    cursor: pointer;
    padding-top: 15px;
  }
</style>
