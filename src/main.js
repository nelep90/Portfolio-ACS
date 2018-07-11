// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {vueAccordion} from 'vue-accordion'

Vue.component('vue-accordion', vueAccordion)

Vue.config.productionTip = false

export const globalStore = new Vue({
  data: {
    baseUrl: 'http://localhost/vue-portfolio-template/'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


