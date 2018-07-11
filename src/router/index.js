import Vue from 'vue'
import Router from 'vue-router'
import Experiences from '@/components/Experiences'
import Home from '@/components/Home'
import Cv from '@/components/Cv'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

import {vueAccordion} from 'vue-accordion'

Vue.component('vue-accordion', vueAccordion)

export {vueAccordion}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cv',
      name: 'CV',
      component: Cv
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
