import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Chart = () => import('../views/chart/Chart')
const Profile = () => import('../views/profile/Profile')
const Articles = () => import('../views/articles/Articles')
const Login = () => import('../views/login/Login')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta:{
          needLogin: false
        }
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
        path: '/articles/:id',
        component: Articles
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/home') {
    next();
  } else {
    let token = localStorage.getItem('userId');
    // console.log(localStorage.getItem('userId'))
    // console.log(localStorage.getItem('Authorization'))
    if (token != null && token != '') {
      next();

    } else {
      router.push('/login')
    }
  }
});

export default router
