import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Profile from './routes/Profile.vue'
import List from './routes/List.vue'
import Create from './routes/Create.vue'
import Item from './routes/Item.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    { path: '/profile', component: Profile,
      children: [
        { path: 'rec', component: List, name: 'rec' },
        { path: 'send', component: List, name: 'send' },
      ]
    },
    { path: '/item/:id', component: Item },
    { path: '/create', component: Create }
  ]
})

const store = new Vuex.Store({
  state: {
    profile: {
      name: 'Bob'
    },
    contacts: [
      {name: 'Alice'},
      {name: 'Eve'}
    ],
    promiselist: {}
  },
  mutations : {
    addPromise: (state, {id, promise}) => state.promiseList[id] = promise,
    addContact: (state, {id, contact}) => state.contacts[id] = contact
  },
  actions : {
    createPromise({ state, commit }, promise) {
      commit('addPromise', promise.description+promise.assignee, promise)
    }
  }
})

const app = new Vue({
  router,
  store
}).$mount('#app')
