import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Cv from '@/components/Cv'
import Projets from '@/components/Projets'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/Cv',
      name: 'Cv',
      component: Cv
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }, 
   
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})