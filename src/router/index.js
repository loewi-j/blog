import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Chart = () => import('../views/chart/Chart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/chart',
        component: Chart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:id',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
