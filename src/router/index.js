import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入布局组件
import Layout from '@/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // 路由重定向到主页
    redirect: '/home',
    children: [
      // 主页
      { path: '/home', component: () => import('@/views/home') },
      // 搜索页
      { path: '/search/:kw?', component: () => import('@/views/search'), name:'search'}
    ]
  }
]

const router = new VueRouter({
  routes
})

const vuePush = router.push
VueRouter.prototype.push= function (location,cd1,cd2){
  if(cd1 || cd2)return vuePush.call(this,location,cd1,cd2)
  return vuePush.call(this,location, () => {})
}

export default router
