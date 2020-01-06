import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: false,
        userId: -1
    },
    mutations: {
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
        setLoggedUserId(state, value) {
            state.userId = value;
        },
    },
    actions: {},
    modules: {}
})
