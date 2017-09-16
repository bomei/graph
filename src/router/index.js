import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MD from '@/components/MD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MD
    },
    {
      path: '/md',
      name: 'MD',
      component: MD
    }
  ]
})
