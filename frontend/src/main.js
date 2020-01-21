import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.axios = axios;

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

Vue.prototype.axios.interceptors.response.use(function (response) {
    store.commit('setLoggedIn', getCookie('loggedIn'));
    store.commit('setLoggedUserId', getCookie('loggedUserId'));
    return response;
}, function (error) {
    if (error.response.status === 401) {
        router.push({name: 'login'});
    }
    return Promise.reject(error);
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
