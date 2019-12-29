<template>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Hasło</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Hasło">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Powtórz hasło</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Powtórz hasło">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="button" class="btn btn-primary">Załóż konto</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegistrationForm"
    }
</script>

<style scoped>

</style>