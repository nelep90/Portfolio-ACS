// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import router from './router'
import VueRouter from 'vue-router'
// import Home from './components/Home'
// import Cv from './components/Cv'
// import Projets from './components/Projets'
// import About from './components/About'
// import Contact from './components/Contact'


Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false
export const globalStore = new Vue({
  data: {
    baseUrl: 'http://localhost/vue-portfolio-template/'
  }
})

// const routes = [
//   {path: '/', component: Home},
//   {path: '/Cv', component: Cv},
//   {path: '/Projets', component: Projets},
//   {path: '/About', component: About}, 
//   {path: '/Contact', component: Contact}, 
// ]

// const router = new VueRouter({
//   routes 
// })

new Vue({
  el: '#app',
  validations: {},
  router,
  render: h => h(App)
})

