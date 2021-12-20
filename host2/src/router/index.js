import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import ('../views/Home.vue')
const About = () => import('../views/a.vue')
Vue.use(VueRouter)

import { rFromLib} from 'lib1'
console.log(rFromLib);
const r = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a',
    name: 'A',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]
var routes = r.concat(rFromLib);
// /debugger;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
