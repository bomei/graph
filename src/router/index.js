import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MD from '@/components/MD'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/md',
      name: 'MD',
      component: MD
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    // {
    //   path: '/md',
    //   name: 'MD',
    //   component: MD
    // }
  ]
})
