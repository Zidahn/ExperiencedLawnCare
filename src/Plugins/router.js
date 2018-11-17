import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/Components/RouteViews/Home.vue')
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import('@/Components/RouteViews/Login.vue')
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/Components/RouteViews/About.vue')
    }
  ]
})