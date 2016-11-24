import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import { state, mutations, actions } from './store.js'
import { routes } from './router.js'

Vue.use(VueRouter)
Vue.use(Vuex)

const app = new Vue({
  router: new VueRouter({ routes }),
  store: new Vuex.Store({ state, mutations, actions })
}).$mount('#app')
