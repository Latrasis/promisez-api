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
    rec_list: [
      {
        title: '1',
        description: 'Clean Bathroom',
        done: false
      },
      { title: '2', description: 'Clean Bathroom', done: false},
      { title: '3', description: 'Clean Bathroom', done: false},
      { title: '4', description: 'Clean Bathroom', done: false},
    ],
    send_list: []
  },
  mutations : {
    addRecItem: (state, item) => state.rec_list.push(item),
    addSendItem: (state, item) => state.send_list.push(item),
    addContact: (state, contact) => state.contacts.push(contact)
  },
  actions : {
    createPromiseItem({ state, commit }, item) {
      if (item.receiver == state.profile.name) {
        commit('addRecItem', item)
      } else {
        commit('addSendItem', item)
      }
    }
  }
})

const app = new Vue({
  router,
  store
}).$mount('#app')
