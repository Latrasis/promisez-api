import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Profile from './routes/Profile.vue'
import List from './routes/List.vue'
import Create from './routes/Create.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    { path: '/profile', component: Profile,
      children: [
        { path: 'rec', component: List },
        { path: 'send', component: List },
      ]
    },
    { path: '/create', component: Create }
  ]
})

const store = new Vuex.Store({
  state: {
    list: [
      {
        title: '1',
        description: 'Clean Bathroom',
        done: false
      },
      { title: '2', description: 'Clean Bathroom', done: false},
      { title: '3', description: 'Clean Bathroom', done: false},
      { title: '4', description: 'Clean Bathroom', done: false},
    ]
  },
  mutations : {
    addItem: (state, item) => state.list.push(item),
  },
  actions : {
    createPromiseItem({ commit }, item) {
      commit('addItem', item)
    }
  }
})

const app = new Vue({
  router,
  store
}).$mount('#app')
