import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress/nprogress.js'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/index" },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index.vue'),
      meta: {
        name: '首页',
        headnavbar: false,
        titlebbar: true
      }
    },
    {
      path: '/car',
      name: 'car',

      component: () => import('@/views/car.vue'),
      meta: {
        name: '购物车',
        headnavbar: true,
        titlebbar: true

      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user.vue'),
      meta: {
        name: '个人中心',
        headnavbar: true,
        titlebbar: true
      }
    },
    {
      path: '/son',
      name: 'son',
      component: () => import('@/views/son.vue'),
      meta: {
        name: '子页面',
        headnavbar: true,
        titlebbar: false,
        tbbat: true
      }
    }
  ]
})
NProgress.configure({ showSpinner: false })//清除圆圈
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})
router.afterEach((to, from) => {
  NProgress.done();
  // ...
})

export default router
