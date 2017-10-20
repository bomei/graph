import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MDRender from '@/components/MDRender'
import Qiangji from '@/components/Qiangji'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/md',
      name: 'MD',
      component: MDRender
    },
    {
      path: '/',
      name: 'Qiangji',
      component: Qiangji
    }
  ]
})
