<template>
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <h1>Jeszcze tylko moment...</h1>
                <p>Potrzebujemy tylko wypełnić dane twojego profila</p>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3">
                <div class="form-group">
                    <label for="name">Imię</label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>
            </div>
            <div class="col-3">
                <div class="form-group">
                    <label for="lastname">Nazwisko</label>
                    <input type="text" class="form-control" id="lastname" v-model="lastName">
                </div>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div class="form-group">
                    <label for="nickname">Nazwa kona</label>
                    <input type="text" class="form-control" id="nickname" v-model="nickname">
                </div>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div class="form-group">
                    <label for="desc">Krótki opis</label>
                    <textarea class="form-control" id="desc" v-model="description"></textarea>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="sendData">
                    Gotowe
                </button>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonalData',
        data() {
            return {
                name: '',
                lastName: '',
                nickname: '',
                description: '',
            };
        },

        methods: {
            sendData() {
                const self = this;
                const data = {
                    firstName: self.name,
                    lastName: self.lastName,
                    nickname: self.nickname,
                    description: self.description
                };

                this.axios.post('/profile/data', data).then(res => {
                    debugger;
                    self.$router.push({name: 'user', params: {id: res.data.userId}});
                }).catch(err => {
                    //
                });
            }
        }

    };
</script>

<style>

</style>