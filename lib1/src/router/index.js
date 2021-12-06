import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import ('../views/Home.vue')
const About = () => import('../views/About.vue')
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
Vue.component(Home.name, Home);
Vue.component(About.name, About);
Vue.use(VueRouter)

export const  routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router





  
//Export in the form of a plugin instead
// export default {
//     install: function (Vue) {
//       console.log('Installing vue components!');
  
//       _.each(components, function (component) {
//         Vue.component(component.name, component);
//       });
//     }
//   };

  // function addComponentToVue(component){


  // }