import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MDRender from '@/components/MDRender'

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
      name: 'Hello',
      component: Hello
    }
  ]
})
