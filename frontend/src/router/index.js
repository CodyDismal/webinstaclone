import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'login',
        component: Home
    },
    {
        path: '/personal-data',
        name: 'personal-data',
        component: () => import(/* webpackChunkName: "about" */ '../views/PersonalData.vue')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: () => import('../views/User.vue')
    },
    {
        path: '/new-post',
        name: 'new-post',
        component: () => import('../views/NewPost.vue')
    },
    {
        path: '/post/:id',
        name: 'post',
        component: () => import('../views/Post.vue')
    },
    {
        path: '/feed',
        name: 'feed',
        component: () => import('../views/Feed.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
