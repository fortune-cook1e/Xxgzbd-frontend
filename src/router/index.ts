import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '3B 3片区'
    },
    component: App
  }
]

const router = new VueRouter({
  routes
})

export default router
