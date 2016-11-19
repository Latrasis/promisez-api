import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './routes/List.vue'
import RegistrationForm from './routes/RegistrationForm.vue'
import Promis from './routes/Promis.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    { path: '/', component: App,
      children: [
        { path: '', component: List },
        { path: '/registration', component: RegistrationForm },
        { path: '/promise/:id', component: Promis }
      ]
    }
  ]
})

const store = new Vuex.Store({
  state: {
    promises: new Set()
  },
  mutations : {
    createPromise: (state, promise) => state.promises.add(promise),
    deletePromise: (state, promise) => state.promises.delete(promise)
  }
})

const app = new Vue({
  router
}).$mount('#app')
