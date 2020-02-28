import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '@/routes/auth'

/** components */
import HomePage from '@/views/HomePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    ...auth
  ]
})
